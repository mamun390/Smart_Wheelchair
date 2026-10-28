// Generates team/<slug>/index.html for every member in src/data/team.js.
// Run after adding or renaming a member:   npm run pages
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/data/team.js', import.meta.url), 'utf8');
const members = [...src.matchAll(/name: '([^']+)',[\s\S]*?slug: '([^']+)',[\s\S]*?title: '([^']+)'/g)]
  .map(([, name, slug, title]) => ({ name, slug, title }));

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const m of members) {
  const dir = new URL(`../team/${m.slug}/`, import.meta.url);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    new URL('index.html', dir),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="../../logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(m.name)} · Gesture-based Intelligent Wheelchair · Jahangirnagar University</title>
  <meta name="description" content="${esc(m.name)}, ${esc(m.title)}, Jahangirnagar University. Team member of the Gesture-based Intelligent Wheelchair project (ICSETEP)." />
  <meta property="og:title" content="${esc(m.name)}" />
  <meta property="og:description" content="${esc(m.title)}, Jahangirnagar University" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Spline+Sans:wght@400;500;600;700&family=Spline+Sans+Mono:wght@500;600&display=swap" rel="stylesheet" />
</head>
<body>
  <div id="root" data-slug="${m.slug}"></div>
  <script type="module" src="../../src/profile-main.jsx"></script>
</body>
</html>
`
  );
  console.log('team/' + m.slug + '/index.html');
}
