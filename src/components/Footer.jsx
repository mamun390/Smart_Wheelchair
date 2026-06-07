import juLogo from '../assets/ju_logo.png';
import adbLogo from '../assets/adb_logo.png';
import icsetepLogo from '../assets/icsetep_header.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-top">
          <div className="f-brand">
            <img src={juLogo} alt="Jahangirnagar University" />
            <div className="ft">
              <b>Gesture-based Intelligent Wheelchair</b>
              <p>
                A sub-project under ICSETEP, hosted at the Department of Computer
                Science &amp; Engineering, Jahangirnagar University.
              </p>
            </div>
          </div>

          <div className="f-col">
            <h4>Navigate</h4>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#team">Team</a>
            <a href="#publications">Publications</a>
            <a href="#activities">Activities</a>
          </div>

          <div className="f-col">
            <h4>Project</h4>
            <p>RDG: ৳ 2,19,18,000/=</p>
            <p>Duration: 2026–2027</p>
            <p>Parent: ICSETEP</p>
            <p>Host: Dept. of CSE, JU</p>
          </div>
        </div>

        <div className="f-funders">
          <div className="lbl">Funded &amp; Supported by</div>
          <div className="funder-row">
            <div className="fblk">
              <img src={adbLogo} alt="Asian Development Bank" />
              <span>Asian Development Bank (ADB)</span>
            </div>
            <div className="fblk">
              <span>Government of Bangladesh (GoB)</span>
            </div>
            <div className="fblk icsetep-wrap">
              <img src={icsetepLogo} alt="ICSETEP / UGC" />
            </div>
          </div>
        </div>

        <div className="f-bottom">
          <span>
            © 2026 Intelligent Wheelchair Project · Jahangirnagar University. All
            rights reserved.
          </span>
          <span>
            Improving Computer and Software Engineering and Tertiary Education
            Project (ICSETEP)
          </span>
        </div>
      </div>
    </footer>
  );
}
