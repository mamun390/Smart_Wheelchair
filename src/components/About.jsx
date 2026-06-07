export default function About() {
  return (
    <section className="section-pad bg-paper" id="about">
      <div className="wrap over">
        <div className="reveal">
          <span className="eyebrow">About the Project</span>
          <h2 className="h2-serif">
            Mobility, reimagined through intelligent gesture control.
          </h2>
          <p>
            Millions of people in Bangladesh live with mobility impairments, yet
            access to affordable, adaptive wheelchairs remains severely limited.
            Conventional powered wheelchairs depend on joysticks that many users
            — particularly those with limited hand strength or upper-limb
            conditions — find difficult or impossible to operate.
          </p>
          <p>
            This project develops an{' '}
            <strong>intelligent wheelchair driven by intuitive human gestures.</strong>{' '}
            Using computer vision, embedded sensing, and machine learning, the
            system interprets head, hand, and body gestures in real time to
            navigate safely — reducing physical effort while improving safety
            through obstacle detection and assisted control.
          </p>
          <p>
            Carried out under the{' '}
            <strong>
              Improving Computer and Software Engineering and Tertiary Education
              Project (ICSETEP)
            </strong>
            , the work pairs the CSE Department's expertise in AI and embedded
            systems with clinical guidance from the University Medical Center to
            ensure the design is genuinely usable, accessible, and locally
            affordable.
          </p>
        </div>

        <div className="info-card reveal">
          <h3>Project at a Glance</h3>
          {[
            ['Sub-Project', ' Developing a Gesture-based Intelligent Wheelchair for the Physically Challenged People in Bangladesh'],
            ['Parent Project', 'ICSETEP'],
            ['Research Grant', '৳ 2,19,18,000/='],
            ['Duration', '2 Years (2026–2027)'],
            ['Funding', 'ADB & Government of Bangladesh'],
            ['Host', 'Dept. of CSE, Jahangirnagar University'],
            ['Clinical Partner', 'JU Medical Center'],
          ].map(([lab, val]) => (
            <div className="info-row" key={lab}>
              <span className="lab">{lab}</span>
              <span className="val">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
