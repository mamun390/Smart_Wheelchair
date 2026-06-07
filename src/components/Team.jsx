import { team } from '../data/team.js';

export default function Team() {
  return (
    <section className="section-pad bg-paper" id="team">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">People</span>
          <h2>The implementing team.</h2>
          <p>
            A multidisciplinary team from the Department of Computer Science &amp;
            Engineering and the Medical Center, Jahangirnagar University.
          </p>
        </div>

        <div className="team-grid stagger">
          {team.map((m) => (
            <div className={`member${m.lead ? ' lead' : ''}`} key={m.name}>
              <div className="m-photo">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} />
                ) : (
                  <span className="initials">{m.initials}</span>
                )}
              </div>
              <div className="m-body">
                <span className={`m-role${m.roleClass ? ' ' + m.roleClass : ''}`}>
                  {m.role}
                </span>
                <h3>{m.name}</h3>
                <p className="aff">
                  {m.aff.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < m.aff.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
