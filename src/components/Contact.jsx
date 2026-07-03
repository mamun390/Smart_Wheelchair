import { useState } from 'react';
import { HomeIcon, MailIcon, GlobeIcon } from './Icons.jsx';

export default function Contact() {
  const [note, setNote] = useState({
    text: 'This is a demo form. Connect it to email or a backend to receive messages.',
    sent: false,
  });

  const send = () =>
    setNote({
      text: 'Thanks! This demo form does not send messages yet — wire it to a backend or email service.',
      sent: true,
    });

  return (
    <section className="section-pad contact-sec" id="contact">
      <div className="wrap contact">
        <div className="contact-info reveal">
          <span className="eyebrow mint">Get in touch</span>
          <h2 className="h2-serif light">Contact the project team.</h2>

          <div className="ci-row">
            <span className="ic">
              <HomeIcon />
            </span>
            <div>
              <b>Project Office</b>
              <span>
                Dept. of CSE, Jahangirnagar University,
                <br />
                Savar, Dhaka 1342, Bangladesh.
              </span>
            </div>
          </div>

          <div className="ci-row">
            <span className="ic">
              <MailIcon />
            </span>
            <div>
              <b>Email</b>
              <span>
                Principal Investigator — Dept. of CSE, JU
                <br />
                makazad@juniv.edu 
                
              </span>
            </div>
          </div>

          <div className="ci-row">
            <span className="ic">
              <GlobeIcon />
            </span>
            <div>
              <b>Department</b>
              <span>cse.juniv.edu · Jahangirnagar University</span>
            </div>
          </div>
        </div>

        <div className="form reveal">
          <div className="fg">
            <label htmlFor="nm">Your Name</label>
            <input id="nm" type="text" placeholder="Full name" />
          </div>
          <div className="fg">
            <label htmlFor="em">Email</label>
            <input id="em" type="email" placeholder="you@example.com" />
          </div>
          <div className="fg">
            <label htmlFor="ms">Message</label>
            <textarea id="ms" placeholder="How can we help?" />
          </div>
          <button className="btn btn-primary" type="button" onClick={send}>
            Send Message →
          </button>
          <p
            className="form-note"
            style={note.sent ? { color: 'var(--emerald)' } : undefined}
          >
            {note.text}
          </p>
        </div>
      </div>
    </section>
  );
}
