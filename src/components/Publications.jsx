import { useState } from 'react';
import { pubCategories } from '../data/publications.js';
import {
  SearchIcon,
  JournalIcon,
  ConfIcon,
  PreprintIcon,
  WorkshopIcon,
} from './Icons.jsx';

const EMPTY_ICONS = {
  review: SearchIcon,
  journal: JournalIcon,
  conf: ConfIcon,
  preprint: PreprintIcon,
  workshop: WorkshopIcon,
};

export default function Publications() {
  const [active, setActive] = useState(pubCategories[0].id);
  const current = pubCategories.find((c) => c.id === active);
  const EmptyIcon = EMPTY_ICONS[current.id] || SearchIcon;

  return (
    <section className="section-pad bg-paper" id="publications">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Dissemination</span>
          <h2>Publications.</h2>
          <p>
            Peer-reviewed and in-progress research output from the project. This
            section is updated as the work progresses.
          </p>
        </div>

        <div className="reveal">
          <div className="tabs" role="tablist">
            {pubCategories.map((c) => (
              <button
                key={c.id}
                className={`tab${active === c.id ? ' active' : ''}`}
                onClick={() => setActive(c.id)}
              >
                {c.label}
                {c.items.length > 0 && (
                  <span className="count">{c.items.length}</span>
                )}
              </button>
            ))}
          </div>

          <div className="pub-panel" key={current.id}>
            {current.items.length === 0 ? (
              <div className="empty">
                <EmptyIcon />
                <p>{current.empty}</p>
              </div>
            ) : (
              current.items.map((p, i) => (
                <div className="pub-item" key={i}>
                  <span className="idx">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="pmeta">
                    <div className="ptitle">
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noreferrer">
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </div>
                    {p.authors && <div className="pauth">{p.authors}</div>}
                    {p.venue && <div className="pvenue">{p.venue}</div>}
                  </div>
                  {p.statusLabel && (
                    <span className={`status ${p.status || 'pub'}`}>
                      {p.statusLabel}
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
