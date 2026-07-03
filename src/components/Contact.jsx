import { useState } from 'react';
import { HomeIcon, MailIcon, GlobeIcon } from './Icons.jsx';

// ───────────────────────────────────────────────────────────────────────────
// 1) Paste the access key you get from https://web3forms.com here.
//    Messages are delivered to the EMAIL ADDRESS you used when creating the key.
//    That address is your "inbox" — change the recipient by making a new key.
// ───────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'c0061ddc-cbb4-4014-99d3-288832703ca4';

// Checks the *format* of an email (e.g. name@domain.com).
// It CANNOT confirm the address actually exists — that needs a confirmation
// link. For a contact form, checking the format is the normal standard.
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const emailOk = isValidEmail(email);
  const showEmailError = email.length > 0 && !emailOk;

  // The Send button only turns on when all three fields are valid.
  const canSend =
    name.trim() !== '' &&
    emailOk &&
    message.trim() !== '' &&
    status !== 'sending';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSend) return;

    setStatus('sending');

    // Build the payload from the form fields + a few extras Web3Forms needs.
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New message from the Wheelchair project website');
    formData.append('from_name', name);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const note =
    status === 'success'
      ? "Thanks! Your message has been sent — we'll get back to you soon."
      : status === 'error'
      ? 'Something went wrong. Please try again, or email us directly.'
      : status === 'sending'
      ? 'Sending…'
      : 'Fill in your name, a valid email and a message, then hit send.';

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
                <a href="mailto:makazad@juniv.edu" className="email-link">
                  makazad@juniv.edu
                </a>
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

        <form className="form reveal" onSubmit={handleSubmit}>
          <div className="fg">
            <label htmlFor="nm">Your Name</label>
            <input
              id="nm"
              name="name"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="fg">
            <label htmlFor="em">Email</label>
            <input
              id="em"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {showEmailError && (
              <span
                style={{
                  color: '#c0392b',
                  fontSize: '0.8rem',
                  marginTop: '4px',
                  display: 'block',
                }}
              >
                Please enter a valid email address.
              </span>
            )}
          </div>

          <div className="fg">
            <label htmlFor="ms">Message</label>
            <textarea
              id="ms"
              name="message"
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Honeypot: invisible to people, but bots tend to fill it in.
              If it gets filled, Web3Forms silently rejects the spam. */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: 'none' }}
          />

          <button
            className="btn btn-primary"
            type="submit"
            disabled={!canSend}
            style={!canSend ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message →'}
          </button>

          <p
            className="form-note"
            style={
              status === 'success'
                ? { color: 'var(--emerald)' }
                : status === 'error'
                ? { color: '#c0392b' }
                : undefined
            }
          >
            {note}
          </p>
        </form>
      </div>
    </section>
  );
}