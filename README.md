# Gesture-based Intelligent Wheelchair — Project Website (React)

Vite + React rebuild of the project website. Same design, split into
per-section components.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for hosting
```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the production build
```

## Project structure
```
src/
  assets/                 logos (JU, ADB, ICSETEP)
  components/
    Navbar.jsx            sticky nav + mobile menu
    Hero.jsx              hero + on-load stagger
    About.jsx             overview + "at a glance" card
    Research.jsx          6 research-focus cards
    Team.jsx              team grid (reads data/team.js), cards open profile pages
    Profile.jsx           member profile page content
    LabOffice.jsx         lab & office
    Publications.jsx      tabbed publications (reads data/publications.js)
    Activities.jsx        timeline (reads data/activities.js)
    Contact.jsx           contact info + demo form
    Footer.jsx            funders + links
    Icons.jsx             shared inline SVG icons
  data/
    team.js               edit team members here
    activities.js         edit milestones here
    publications.js       add publications here
  hooks/
    useScrollReveal.js    scroll-in animations
  App.jsx                 assembles the home page sections
  main.jsx                home page entry point
  profile-main.jsx        profile page entry point
team/<slug>/index.html    one page per member (generated, see below)
scripts/make-profile-pages.mjs  generates the team/<slug>/ pages
  styles.css              all styles + design tokens
```

## Common edits
- **Team photos:** in `src/data/team.js`, import an image and set `photo`,
  e.g. `import azad from '../assets/azad.jpg'` then `photo: azad`.
- **Member profiles:** each member in `src/data/team.js` has a `slug` and
  optional `title`, `bio`, `emails`, `phones`, `office`, `scholar`,
  `researchgate`, `links`,
  `education`, `interests` and `publications`. Empty fields are hidden.
  Project publications are added to each profile automatically.
- **Profile pages:** each member has a real page at `team/<slug>/`, which
  opens in the same tab when their card is clicked. After adding, removing
  or renaming a member in `team.js`, run `npm run pages` to regenerate the
  `team/` folders (delete the old folder of a removed member by hand).
- **Add a publication:** push an item into the relevant category's `items`
  array in `src/data/publications.js` (template is in the file comments).
- **Contact email:** update the placeholder in `src/components/Contact.jsx`.
