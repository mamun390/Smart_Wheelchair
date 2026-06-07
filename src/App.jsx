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
