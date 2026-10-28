import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Team from './components/Team.jsx';
import LabOffice from './components/LabOffice.jsx';
import Publications from './components/Publications.jsx';
import Activities from './components/Activities.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';

export default function App() {
  useScrollReveal();

  // Arriving from a profile page with e.g. #team: jump to that section once
  // React has rendered it (the browser tries before the section exists).
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto' });
    }, 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Team />
        <LabOffice />
        <Publications />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
