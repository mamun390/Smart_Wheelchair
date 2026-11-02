// Reads src/data/team.js as text (it imports images, so it can't be imported
// directly in Node) and returns what search engines need for each member:
// name, slug, title, name variants and links to their other profiles.
import { readFileSync } from 'node:fs';

export const SITE = 'https://icsetepd67-juniv.org';

const PROFILE_HOSTS = /(scholar\.google|researchgate\.net|orcid\.org|linkedin\.com|github\.com|scopus\.com|juniv\.edu\/teachers)/;

// "Prof. Dr. Md Abul Kalam Azad" -> ["Md Abul Kalam Azad", "Abul Kalam Azad"]
function nameVariants(name) {
  const plain = name.replace(/^((Prof|Dr|Ms|Mr|Mrs|Engr)\.?\s+)+/i, '').trim();
  const noMd = plain.replace(/^(Md\.?|Mohammad|Mohammed)\s+/i, '').trim();
  return [...new Set([plain, noMd])].filter((n) => n && n !== name);
}

export function readTeam() {
  const src = readFileSync(new URL('../src/data/team.js', import.meta.url), 'utf8');
  const found = [...src.matchAll(/name: '([^']+)',[\s\S]*?slug: '([^']+)',[\s\S]*?title: '([^']+)'/g)];
  return found.map((m, i) => {
    const [, name, slug, title] = m;
    const block = src.slice(m.index, found[i + 1]?.index ?? src.length);
    const urls = [...block.matchAll(/(?:website|scholar|researchgate|url): '(https?:\/\/[^']+)'/g)]
      .map((u) => u[1])
      .filter((u) => PROFILE_HOSTS.test(u));
    return { name, slug, title, alternateName: nameVariants(name), sameAs: [...new Set(urls)] };
  });
}

export function personSchema(m) {
  return {
    '@type': 'Person',
    name: m.name,
    ...(m.alternateName.length && { alternateName: m.alternateName }),
    jobTitle: m.title,
    url: `${SITE}/team/${m.slug}/`,
    ...(m.sameAs.length && { sameAs: m.sameAs }),
    affiliation: { '@type': 'CollegeOrUniversity', name: 'Jahangirnagar University', url: 'https://juniv.edu/' },
    memberOf: { '@type': 'ResearchOrganization', name: 'AI Assistive Rehabilitation Technology Lab (Smart Wheelchair Lab)', url: `${SITE}/` },
  };
}

// Safe to place inside <script type="application/ld+json">.
export const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');
