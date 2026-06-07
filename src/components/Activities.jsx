import { activities } from '../data/activities.js';

export default function Activities() {
  return (
    <section className="section-pad bg-sage" id="activities">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Activities &amp; Milestones</span>
          <h2>Project journey.</h2>
          <p>
            Key milestones, workshops and outreach across the two-year
            programme.
          </p>
        </div>

        <div className="timeline stagger">
          {activities.map((a) => (
            <div className="tl-item" key={a.title}>
              <span className="date">{a.date}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
