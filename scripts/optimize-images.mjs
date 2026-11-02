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
