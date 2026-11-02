// Build-time renderer used by scripts/prerender.mjs.
// It turns the React pages into plain HTML so search engines (and visitors
// with slow connections) see the real text immediately, not an empty <div>.
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Profile from './components/Profile.jsx';

export function renderHome() {
  return renderToString(<App />);
}

export function renderProfile(slug) {
  const HOME = '../../';
  return renderToString(
    <>
      <Navbar home={HOME} />
      <main>
        <Profile slug={slug} />
      </main>
      <Footer home={HOME} />
    </>
  );
}
