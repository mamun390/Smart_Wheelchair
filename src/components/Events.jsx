import { useCallback, useEffect, useState } from 'react';
import { inception as ev } from '../data/events.js';
import './events.css';

const SITE = 'https://icsetepd67-juniv.org';
const url = (name, thumb) => `/${ev.folder}/${name}${thumb ? '-thumb' : ''}.webp`;
const photos = [ev.lead, ...ev.gallery];

// Structured data so search engines understand the event.
const eventLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: `${ev.title}: ${ev.subtitle}`,
  startDate: ev.dateISO,
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  description: ev.intro,
  image: [`${SITE}${url(ev.lead.src)}`, `${SITE}${url('group-photo')}`],
  location: {
    '@type': 'Place',
    name: 'Department of Computer Science and Engineering, Jahangirnagar University',
    address: { '@type': 'PostalAddress', addressLocality: 'Savar', addressRegion: 'Dhaka', postalCode: '1342', addressCountry: 'BD' },
  },
  organizer: { '@type': 'Organization', name: 'Department of Computer Science and Engineering, Jahangirnagar University', url: SITE },
  performer: [ev.chiefGuest, ...ev.hosts].map((p) => ({ '@type': 'Person', name: p.name, jobTitle: p.role })),
};

export default function Events() {
  const [open, setOpen] = useState(-1);
  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback((d) => setOpen((i) => (i + d + photos.length) % photos.length), []);

  useEffect(() => {
    if (open < 0) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, step]);

  return (
    <section className="section-pad bg-paper" id="events">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd).replace(/</g, '\\u003c') }} />
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Events</span>
          <h2>{ev.title}.</h2>
          <p>{ev.intro}</p>
        </div>

        <div className="ev-feature reveal">
          <figure className="ev-lead">
            <button type="button" className="ev-photo" onClick={() => setOpen(0)} aria-label={`Open photo: ${ev.lead.caption}`}>
              <img src={url(ev.lead.src, true)} alt={ev.lead.alt} width="720" height="405" loading="lazy" decoding="async" />
            </button>
            <figcaption>{ev.lead.caption}</figcaption>
          </figure>

          <div className="info-card ev-details">
            <h3>Event Details</h3>
            {ev.details.map(([k, v]) => (
              <div className="info-row" key={k}>
                <span className="lab">{k}</span>
                <span className="val">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ev-panel reveal">
          <div className="ev-chief">
            <span className="ev-tag">Chief Guest</span>
            <b>{ev.chiefGuest.name}</b>
            <span>{ev.chiefGuest.role}</span>
          </div>
          {ev.hosts.map((h) => (
            <div className="ev-host" key={h.label}>
              <span className="ev-tag light">{h.label}</span>
              <b>{h.name}</b>
              <span>{h.role}</span>
            </div>
          ))}
        </div>

        <div className="ev-columns reveal">
          <div>
            <h3 className="ev-sub">Special Guests</h3>
            <ul className="ev-list">
              {ev.specialGuests.map((g) => (
                <li key={g.name}>
                  <b>{g.name}</b>
                  <span>{g.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="ev-sub">Technical Sessions</h3>
            {ev.sessions.map((s) => (
              <div className="ev-session" key={s.label}>
                <span className="ev-tag light">{s.label}</span>
                {s.talk && <p className="ev-talk">{s.talk}</p>}
                <ul className="ev-list">
                  {s.speakers.map((sp) => (
                    <li key={sp.name}>
                      <b>{sp.name}</b>
                      <span>{sp.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <h3 className="ev-sub ev-gallery-title reveal">Photo Gallery</h3>
        <div className="ev-gallery reveal">
          {ev.gallery.map((p, i) => (
            <figure className={`ev-item${p.tall ? ' tall' : ''}${p.wide ? ' wide' : ''}`} key={p.src}>
              <button type="button" className="ev-photo" onClick={() => setOpen(i + 1)} aria-label={`Open photo: ${p.caption}`}>
                <img src={url(p.src, true)} alt={p.alt} loading="lazy" decoding="async" />
              </button>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {open >= 0 && (
        <div className="ev-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={url(photos[open].src)} alt={photos[open].alt} />
            <figcaption>
              {photos[open].caption}
              <span className="ev-count">
                {open + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
          <button type="button" className="ev-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}>
            ‹
          </button>
          <button type="button" className="ev-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}>
            ›
          </button>
          <button type="button" className="ev-close" aria-label="Close photo viewer" onClick={close}>
            ×
          </button>
        </div>
      )}
    </section>
  );
}
