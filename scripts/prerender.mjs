// Runs after `vite build`: fills <div id="root"> in every built page with
// server-rendered HTML so the site is fully readable by search engines.
// Also writes sitemap.xml with today's date.
import { readFileSync, writeFileSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://icsetepd67-juniv.org';
const dist = resolve('dist');
const ssr = await import(pathToFileURL(resolve('.ssr/entry-server.js')).href);

const fill = (file, html) => {
  const page = readFileSync(file, 'utf8');
  const out = page.replace(/(<div id="root"[^>]*>)\s*(<\/div>)/, (_, open, close) => open + html + close);
  if (out === page) throw new Error('No empty #root found in ' + file);
  writeFileSync(file, out);
};

fill(resolve(dist, 'index.html'), ssr.renderHome());
console.log('prerendered index.html');

const urls = [`${SITE}/`];
const teamDir = resolve(dist, 'team');
if (existsSync(teamDir)) {
  for (const slug of readdirSync(teamDir)) {
    const f = resolve(teamDir, slug, 'index.html');
    if (!existsSync(f)) continue;
    fill(f, ssr.renderProfile(slug));
    urls.push(`${SITE}/team/${slug}/`);
    console.log(`prerendered team/${slug}/index.html`);
  }
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u, i) =>
      `  <url><loc>${u}</loc><lastmod>${today}</lastmod><changefreq>${i ? 'monthly' : 'weekly'}</changefreq><priority>${i ? '0.7' : '1.0'}</priority></url>`
  )
  .join('\n')}
</urlset>
`
);
console.log(`sitemap.xml (${urls.length} URLs)`);

rmSync(resolve('.ssr'), { recursive: true, force: true });
