// Entry point for the individual profile pages in /team/<slug>/index.html.
// Each page sets data-slug on #root to choose which member to show.
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Profile from './components/Profile.jsx';
import './styles.css';

const root = document.getElementById('root');
const slug = root.dataset.slug;
const HOME = '../../';

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Navbar home={HOME} />
    <main>
      <Profile slug={slug} />
    </main>
    <Footer home={HOME} />
  </React.StrictMode>
);
