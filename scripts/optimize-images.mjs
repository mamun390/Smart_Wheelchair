// Last build step: shrinks images so pages load fast (Google ranks on speed).
// - Large PNG/JPEG files in dist/assets become resized WebP files, and every
//   reference to them in the built HTML/JS/CSS is updated.
// - logo.png (favicon) is resized to 512px.
// - og-image.png (1200x630) is created for link previews on social media.
// Needs the `sharp` package; if it is missing the build still succeeds unchanged.
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync } from 'node:fs';
import { resolve, extname, basename, join } from 'node:path';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.log('optimize-images: sharp not installed, skipping');
  process.exit(0);
}

const dist = resolve('dist');
const assets = join(dist, 'assets');
const MAX_WIDTH = 720;
const MIN_BYTES = 20 * 1024;

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

// 1) Convert big raster assets to WebP.
const renamed = {};
for (const f of readdirSync(assets)) {
  const ext = extname(f).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
  const src = join(assets, f);
  const before = statSync(src).size;
  if (before < MIN_BYTES) continue;
  const out = f.slice(0, -ext.length) + '.webp';
  const buf = await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
  writeFileSync(join(assets, out), buf);
  unlinkSync(src);
  renamed[f] = out;
  console.log(`${f}: ${Math.round(before / 1024)} KB -> ${out}: ${Math.round(buf.length / 1024)} KB`);
}

// 2) Point every built file at the new names.
if (Object.keys(renamed).length) {
  for (const file of walk(dist).filter((p) => /\.(html|js|css)$/.test(p))) {
    let text = readFileSync(file, 'utf8');
    let changed = false;
    for (const [from, to] of Object.entries(renamed)) {
      if (text.includes(from)) {
        text = text.split(from).join(to);
        changed = true;
      }
    }
    if (changed) writeFileSync(file, text);
  }
}

// 3) Favicon / app icon: 512px PNG instead of the full-size original.
const logo = join(dist, 'logo.png');
const logoBefore = statSync(logo).size;
const logoBuf = await sharp(logo).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ compressionLevel: 9, palette: true }).toBuffer();
writeFileSync(logo, logoBuf);
console.log(`logo.png: ${Math.round(logoBefore / 1024)} KB -> ${Math.round(logoBuf.length / 1024)} KB`);

// 4) Social preview card (1200x630): logo on the site's forest green.
const card = await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#0f3326' } })
  .composite([{ input: await sharp(logoBuf).resize(420, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(), gravity: 'center' }])
  .png()
  .toBuffer();
writeFileSync(join(dist, 'og-image.png'), card);
for (const file of walk(dist).filter((p) => p.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const out = html.replace(/(property="og:image"|name="twitter:image") content="([^"]*)\/logo\.png"/g, '$1 content="$2/og-image.png"');
  if (out !== html) writeFileSync(file, out);
}
console.log('og-image.png: 1200x630 social preview');

// 5) Favicons in the formats Google Search and browsers look for:
//    /favicon.ico (16/32/48), /favicon-48x48.png, /favicon-192x192.png and
//    /apple-touch-icon.png, all linked with absolute URLs from every page.
const icon = (size) => sharp(logoBuf).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(icoSizes.map(icon));
const header = Buffer.alloc(6 + 16 * icoSizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoSizes.length, 4);
let offset = header.length;
icoSizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(s, e);
  header.writeUInt8(s, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(icoPngs[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += icoPngs[i].length;
});
writeFileSync(join(dist, 'favicon.ico'), Buffer.concat([header, ...icoPngs]));
writeFileSync(join(dist, 'favicon-48x48.png'), await icon(48));
writeFileSync(join(dist, 'favicon-192x192.png'), await icon(192));
writeFileSync(join(dist, 'apple-touch-icon.png'), await sharp(logoBuf).resize(180, 180, { fit: 'contain', background: '#ffffff' }).png().toBuffer());
const iconTags = [
  '<link rel="icon" href="/favicon.ico" sizes="48x48" />',
  '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />',
  '<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />',
  '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />',
].join('\n  ');
for (const file of walk(dist).filter((p) => p.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const out = html
    .replace(/[ \t]*<link rel="apple-touch-icon"[^>]*>\n?/g, '')
    .replace(/<link rel="icon"[^>]*>/, () => iconTags);
  if (out !== html) writeFileSync(file, out);
}
console.log('favicons: favicon.ico, 48px, 192px, apple-touch-icon');
