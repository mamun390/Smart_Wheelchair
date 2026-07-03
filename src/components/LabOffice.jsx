import { WheelchairIcon, BuildingIcon, FileIcon, HeartIcon } from './Icons.jsx';

const ITEMS = [
  {
    Icon: BuildingIcon,
    title: 'Project Office',
    desc: 'Department of Computer Science & Engineering, Jahangirnagar University, Savar, Dhaka 1342, Bangladesh.',
  },
  {
    Icon: FileIcon,
    title: 'Research & Prototyping Lab',
    desc: 'Hardware integration, embedded systems, sensor rigs and gesture-capture stations for building and testing wheelchair prototypes.',
  },
  {
    Icon: HeartIcon,
    title: 'Clinical Testing — JU Medical Center',
    desc: 'User trials and safety evaluation conducted in collaboration with the University Medical Center.',
  },
];

export default function LabOffice() {
  return (
    <section className="section-pad bg-sage" id="lab">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Where we work</span>
          <h2>Lab &amp; Project Office.</h2>
        </div>

        <div className="lab">
          <div className="lab-visual reveal">
            <div className="pat" />
            <div className="glyph">
              <WheelchairIcon />
              <b>AI Assistive Rehabilitation Technology Lab</b>
              <span>Department of Computer Science & Engineering  <br />Jahangirnagar University</span>
            </div>
          </div>

          <ul className="lab-list reveal">
            {ITEMS.map(({ Icon, title, desc }) => (
              <li key={title}>
                <span className="ic">
                  <Icon />
                </span>
                <div>
                  <b>{title}</b>
                  <span>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
