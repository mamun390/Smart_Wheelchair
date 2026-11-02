// Runs after `vite build`: fills <div id="root"> in every built page with
// server-rendered HTML so the site is fully readable by search engines.
// Also writes sitemap.xml with today's date.
import { readFileSync, writeFileSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { SITE, readTeam, personSchema, jsonLd } from './team-meta.mjs';

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

// List every team member on the home page so Google links each name to the lab.
const home = resolve(dist, 'index.html');
const members = readTeam().map(personSchema);
const teamLd = `  <script type="application/ld+json">${jsonLd({
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  '@id': `${SITE}/#lab`,
  member: members,
})}</script>\n</head>`;
writeFileSync(home, readFileSync(home, 'utf8').replace('</head>', () => teamLd));
console.log(`team schema: ${members.length} members`);

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
