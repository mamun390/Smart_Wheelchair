import { team } from '../data/team.js';
import { pubCategories } from '../data/publications.js';
import { MailIcon, GlobeIcon, PhoneIcon, HomeIcon } from './Icons.jsx';

const TYPE_LABEL = {
  project: 'Project',
  journal: 'Journal',
  conference: 'Conference',
  dataset: 'Dataset',
};

// Project publications (from data/publications.js) that list this member,
// followed by the member's own publications, without duplicates.
function allPublications(m) {
  const key = (m.pubName || m.name).toLowerCase();
  const seen = new Set();
  const out = [];
  const push = (p) => {
    const t = p.title.trim().toLowerCase();
    if (seen.has(t)) return;
    seen.add(t);
    out.push(p);
  };
  pubCategories.forEach((c) =>
    c.items.forEach((p) => {
      if (p.authors && p.authors.toLowerCase().includes(key)) {
        push({ ...p, type: 'project' });
      }
    })
  );
  (m.publications || []).forEach(push);
  return out;
}

const telHref = (phone) => `tel:${phone.replace(/\(.*\)/, '').replace(/[^\d+]/g, '')}`;

export default function Profile({ slug }) {
  const idx = team.findIndex((m) => m.slug === slug);

  if (idx === -1) {
    return (
      <section className="section-pad bg-paper profile-missing">
        <div className="wrap">
          <h2 className="h2-serif">Profile not found.</h2>
          <a href="../../#team" className="btn btn-primary">← Back to the team</a>
        </div>
      </section>
    );
  }

  const m = team[idx];
  const prev = team[(idx - 1 + team.length) % team.length];
  const next = team[(idx + 1) % team.length];
  const pubs = allPublications(m);
  const profileLinks = [
    m.scholar && { label: 'Google Scholar', url: m.scholar },
    m.researchgate && { label: 'ResearchGate', url: m.researchgate },
    ...(m.links || []),
  ].filter(Boolean);
  const emails = m.emails || [];
  const phones = m.phones || [];
  const hasContact = emails.length > 0 || phones.length > 0 || !!m.office;
  const hasSide =
    hasContact ||
    (m.education && m.education.length > 0) ||
    (m.interests && m.interests.length > 0);

  return (
    <>
      <section className="profile-hero">
        <div className="hero-grid" />
        <div className="wrap">
          <a href="../../#team" className="back-link">← Back to the team</a>

          <div className="ph-inner">
            <div className="ph-photo">
              {m.photo ? (
                <img src={m.photo} alt={m.name} />
              ) : (
                <span className="initials">{m.initials}</span>
              )}
            </div>

            <div className="ph-text">
              <span className={`m-role ${m.roleClass.toLowerCase()}`}>{m.role}</span>
              <h1>{m.name}</h1>
              {m.title && <p className="ph-title">{m.title}</p>}
              <p className="ph-aff">Jahangirnagar University, Savar, Dhaka 1342, Bangladesh</p>

              {profileLinks.length > 0 && (
                <div className="ph-links">
                  {profileLinks.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="pill">
                      <GlobeIcon /> {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className={`wrap profile-body${hasSide ? '' : ' no-side'}`}>
          <div className="pb-main">
            {m.bio && m.bio.length > 0 && (
              <div className="pb-block">
                <span className="eyebrow">Biography</span>
                {m.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            <div className="pb-block">
              <div className="pb-head">
                <span className="eyebrow">Publications</span>
                {pubs.length > 0 && <span className="pb-count">{pubs.length}</span>}
              </div>
              {pubs.length === 0 ? (
                <p className="muted">Publications will appear here.</p>
              ) : (
                <div className="pub-panel">
                  {pubs.map((p, i) => (
                    <div className="pub-item" key={i}>
                      <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                      <div className="pmeta">
                        <div className="ptitle">
                          {p.link ? (
                            <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
                          ) : (
                            p.title
                          )}
                        </div>
                        {p.authors && <div className="pauth">{p.authors}</div>}
                        {(p.venue || p.year) && (
                          <div className="pvenue">
                            {[p.venue, p.year].filter(Boolean).join(' · ')}
                          </div>
                        )}
                      </div>
                      {p.type && (
                        <span className={`ptype ${p.type}`}>{TYPE_LABEL[p.type] || p.type}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {m.scholar && (
                <a href={m.scholar} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">
                  Full list on Google Scholar →
                </a>
              )}
            </div>
          </div>

          {hasSide && (
          <aside className="pb-side">
            {hasContact && (
            <div className="info-card">
              <h3>Contact</h3>
              <ul className="contact-list">
                {emails.map((e) => (
                  <li key={e}>
                    <span className="ci"><MailIcon /></span>
                    <a href={`mailto:${e}`}>{e}</a>
                  </li>
                ))}
                {phones.map((ph) => (
                  <li key={ph}>
                    <span className="ci"><PhoneIcon /></span>
                    <a href={telHref(ph)}>{ph}</a>
                  </li>
                ))}
                {m.office && (
                  <li>
                    <span className="ci"><HomeIcon /></span>
                    <span>{m.office}</span>
                  </li>
                )}
              </ul>
            </div>
            )}

            {m.education && m.education.length > 0 && (
              <div className="info-card">
                <h3>Education</h3>
                <ul className="edu">
                  {m.education.map((e, i) => (
                    <li key={i}>
                      <b>{e.degree}</b>
                      <span>{e.inst}{e.year ? ` · ${e.year}` : ''}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {m.interests && m.interests.length > 0 && (
              <div className="info-card">
                <h3>Research Interests</h3>
                <div className="tags">
                  {m.interests.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </aside>
          )}
        </div>

        <div className="wrap profile-nav">
          <a href={`../${prev.slug}/`}>
            <small>Previous</small>
            <b>← {prev.name}</b>
          </a>
          <a href={`../${next.slug}/`} className="right">
            <small>Next</small>
            <b>{next.name} →</b>
          </a>
        </div>
      </section>
    </>
  );
}
