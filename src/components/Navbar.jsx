import { useEffect, useState } from 'react';
import juLogo from '../assets/ju_logo.png';

const LINKS = [
  ['Home', '#home'],
  ['Research', '#research'],
  ['Team', '#team'],
  ['Lab & Office', '#lab'],
  ['Publications', '#publications'],
  ['Activities', '#activities'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#home" className="brand">
          <img src={juLogo} alt="Jahangirnagar University logo" />
          <span className="bt">
            <b>Intelligent Wheelchair Lab</b>
            <span>Jahangirnagar University · CSE</span>
          </span>
        </a>

        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
