import { team } from '../data/team.js';

export default function Team() {
  const investigators = team.filter(
    (m) => m.roleClass === 'Pi' || m.roleClass === 'CoPi'
  );

  const assistants = team.filter(
    (m) => m.roleClass === 'RA'
  );

  const students = team.filter(
    (m) => m.roleClass === 'Student'
  );

  const renderMembers = (members) =>
    members.map((m) => (
      <div
        className={`member${m.lead ? ' lead' : ''}`}
        key={m.name}
      >
        <div className="m-photo">
          {m.photo ? (
            <img src={m.photo} alt={m.name} />
          ) : (
            <span className="initials">{m.initials}</span>
          )}
        </div>

        <div className="m-body">
          <span className={`m-role ${m.roleClass}`}>
            {m.role}
          </span>

          <h3><a
    href={member.website}
    target="_blank"
    rel="noopener noreferrer"
    className="member-name"
  >
    {member.name}
  </a></h3>

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
    ));

  return (
    <section className="section-pad bg-paper" id="team">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">People</span>
          <h2>The implementing team.</h2>
          <p>
            A multidisciplinary team from the Department of Computer Science &
            Engineering and the Medical Center, Jahangirnagar University.
          </p>
        </div>

        {/* Principal Investigator & Co-PIs */}
        <div className="team-section">
          <h3 className="group-title">
            Principal Investigator & Co-Investigators
          </h3>

          <div className="team-grid investigators">
            {renderMembers(investigators)}
          </div>
        </div>

        {/* Research Assistants */}
        <div className="team-section">
          <h3 className="group-title">
            Research Assistants
          </h3>

          <div className="team-grid assistants">
            {renderMembers(assistants)}
          </div>
        </div>

        {/* Master's Students */}
        <div className="team-section">
          <h3 className="group-title">
            Master's Research Students
          </h3>

          <div className="team-grid students">
            {renderMembers(students)}
          </div>
        </div>
      </div>
    </section>
  );
}