import {
  HandIcon,
  NavIcon,
  ChipIcon,
  HeartIcon,
  ChartIcon,
  DocIcon,
} from './Icons.jsx';

const FOCUS = [
  {
    num: '01',
    Icon: HandIcon,
    title: 'Gesture Recognition',
    desc: 'Robust real-time recognition of head, hand and body gestures using computer vision and deep learning, tolerant of lighting and motion.',
  },
  {
    num: '02',
    Icon: NavIcon,
    title: 'Intelligent Navigation',
    desc: 'Obstacle detection, collision avoidance and assisted path control so users move safely with minimal effort indoors and outdoors.',
  },
  {
    num: '03',
    Icon: ChipIcon,
    title: 'Embedded Edge AI',
    desc: 'Lightweight models running on low-power embedded hardware for responsive, on-device control without constant connectivity.',
  },
  {
    num: '04',
    Icon: HeartIcon,
    title: 'Clinical Evaluation',
    desc: 'Usability and safety trials with the JU Medical Center to validate comfort, accessibility and benefit for real patients.',
  },
  {
    num: '05',
    Icon: ChartIcon,
    title: 'Affordability & Scale',
    desc: 'A cost-conscious design using locally sourceable components so the device is viable for widespread adoption in Bangladesh.',
  },
  {
    num: '06',
    Icon: DocIcon,
    title: 'Open Dissemination',
    desc: 'Findings shared through peer-reviewed journals, conferences, workshops and capacity-building activities for students and practitioners.',
  },
];

export default function Research() {
  return (
    <section className="section-pad bg-sage" id="research">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Research Focus</span>
          <h2>What we are building and investigating.</h2>
          <p>
            The project spans gesture recognition, intelligent navigation, and
            human-centred clinical evaluation — engineered for real-world
            deployment at low cost.
          </p>
        </div>

        <div className="cards stagger">
          {FOCUS.map(({ num, Icon, title, desc }) => (
            <div className="card" key={num}>
              <span className="num">{num}</span>
              <div className="ic">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
