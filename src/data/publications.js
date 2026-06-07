// Each category drives a tab. To add a publication, push an object into
// `items`, e.g.:
// {
//   title: 'Real-time Gesture Recognition for Assistive Wheelchairs',
//   authors: 'M. A. K. Azad, S. Basak, et al.',
//   venue: 'IEEE Access (Under Review)',
//   status: 'review',           // 'review' | 'preprint' | 'pub'
//   statusLabel: 'Under Review',
//   link: 'https://...'          // optional
// }
export const pubCategories = [
  {
    id: 'review',
    label: 'Under Review',
    empty: 'Manuscripts currently under review will appear here. No submissions are under review yet — check back soon.',
    items: [],
  },
  {
    id: 'journal',
    label: 'Journal',
    empty: 'Journal articles from this project will be listed here once published.',
    items: [],
  },
  {
    id: 'conf',
    label: 'Conference',
    empty: 'Conference papers and proceedings will be listed here once accepted.',
    items: [],
  },
  {
    id: 'preprint',
    label: 'Preprint',
    empty: 'Preprints (arXiv / TechRxiv) will be linked here as they are released.',
    items: [],
  },
  {
    id: 'workshop',
    label: 'Workshops',
    empty: 'Workshop papers and presentations will be listed here.',
    items: [],
  },
];
