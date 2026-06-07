// Small set of reusable stroke icons used across sections.
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
};

export const HandIcon = () => (
  <svg {...base}>
    <path d="M9 11V6a2 2 0 0 1 4 0v5" />
    <path d="M13 7a2 2 0 0 1 4 0v6" />
    <path d="M5 11a2 2 0 0 1 4 0v2" />
    <path d="M5 13v3a6 6 0 0 0 6 6h1a6 6 0 0 0 6-6v-3" />
  </svg>
);

export const NavIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);

export const ChipIcon = () => (
  <svg {...base}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </svg>
);

export const HeartIcon = () => (
  <svg {...base}>
    <path d="M12 21s-7-4.3-9.3-9.2C1 8 3 4 6.5 4 9 4 12 7 12 7s3-3 5.5-3C21 4 23 8 21.3 11.8 19 16.7 12 21 12 21z" />
  </svg>
);

export const ChartIcon = () => (
  <svg {...base}>
    <path d="M3 3v18h18" />
    <path d="M7 14l3-3 3 3 5-6" />
  </svg>
);

export const DocIcon = () => (
  <svg {...base}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 13h6M9 17h6" />
  </svg>
);

export const BuildingIcon = () => (
  <svg {...base}>
    <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01" />
  </svg>
);

export const FileIcon = () => (
  <svg {...base}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

export const WheelchairIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="19" r="2.4" />
    <circle cx="18" cy="17" r="3.2" />
    <path d="M9 16.6V9h6l2 5" />
    <path d="M9 9V5h3" />
    <path d="M5 9h4" />
  </svg>
);

// Publication empty-state icons keyed by category id
export const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);
export const JournalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
export const ConfIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 21h18M6 21V8M18 21V8M3 8l9-5 9 5M9 21v-5h6v5" />
  </svg>
);
export const PreprintIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);
export const WorkshopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
    <circle cx="12" cy="10" r="3" />
    <rect x="3" y="4" width="18" height="16" rx="2" />
  </svg>
);

// Contact icons
export const MailIcon = () => (
  <svg {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const GlobeIcon = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
  </svg>
);
export const HomeIcon = () => (
  <svg {...base}>
    <path d="M3 21h18M5 21V7l8-4 8 4v14" />
    <path d="M9 21v-5h6v5" />
  </svg>
);
