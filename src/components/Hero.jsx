import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll('.hero .hero-r');
    const timers = [];
    els.forEach((el, i) => {
      timers.push(setTimeout(() => el.classList.add('in'), 120 + i * 120));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="wrap">
        <div className="hero-badges reveal hero-r">
          <span className="chip">
            <i />
            ICSETEP Sub-Project
          </span>
          <span className="chip">Assistive Technology</span>
          <span className="chip">Human–Computer Interaction</span>
        </div>

        <h1 className="reveal hero-r">
          Developing a <span className="accent">Gesture-based</span> Intelligent
          Wheelchair for the Physically Challenged People in Bangladesh
        </h1>

        <p className="lead reveal hero-r">
          A research initiative at the Department of Computer Science &amp;
          Engineering, Jahangirnagar University — building an affordable,
          gesture-controlled smart wheelchair to restore mobility and
          independence for physically challenged people across Bangladesh.
        </p>

        <div className="hero-actions reveal hero-r">
          <a href="#research" className="btn btn-primary">
            Explore the Research →
          </a>
          <a href="#team" className="btn btn-ghost">
            Meet the Team
          </a>
        </div>

        <div className="hero-stats reveal hero-r">
          <div className="st">
            <div className="k">৳ 2,19,18,000</div>
            <div className="l">Research Grant (RDG)</div>
          </div>
          <div className="st">
            <div className="k">2 Years</div>
            <div className="l">Duration · 2026–2027</div>
          </div>
          <div className="st">
            <div className="k">ADB &amp; GoB</div>
            <div className="l">Funding Authority</div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span className="m" />
        Scroll
      </div>
    </section>
  );
}
