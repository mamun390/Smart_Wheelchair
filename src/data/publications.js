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
    empty: 'Manuscripts currently under review will appear here.',
    items: [
      {
        title:
          'Useful Until Visibility Shifts: The Visible Marker Count as Information and Shortcut on the MoCap Hand Postures Benchmark',
        venue: 'Conference paper',
        status: 'review',
        statusLabel: 'Under Review',
      },
      {
        title:
          'A Low-Cost IoT-Based Touchless Vision-Guided Mobile Robot with Real-Time Firmware-Level Obstacle Protection',
        venue: 'Conference paper',
        status: 'review',
        statusLabel: 'Under Review',
      },
      {
        title:
          'Quantifying Occlusion Tolerance and Safety in MediaPipe-Based Hand Gesture Recognition for Smart Wheelchair Interfaces',
        venue: 'Conference paper',
        status: 'review',
        statusLabel: 'Under Review',
      },
      {
        title:
          'Disentangling Frame-Level and Temporal Evidence in HMM-Based Hand Gesture Recognition via Matched Transition Ablation',
        venue: 'Conference paper',
        status: 'review',
        statusLabel: 'Under Review',
      },
      {
        title:
          'Interpretable Real-Time Static Hand Gesture Recognition Using Transfer Learning, Landmark-Guided Localization and XAI',
        venue: 'Conference paper',
        status: 'review',
        statusLabel: 'Under Review',
      },
      {
        title:
          'Latency, Accuracy and Edge-Enforced Safety in an IoT Gesture-Control Architecture for Low-Cost Mobile Robots',
        venue: 'Journal article',
        status: 'review',
        statusLabel: 'Under Review',
      },
      {
        title:
          'When Marker Count Becomes a Shortcut: Visibility Shifts and Confidence Failure in Motion-Capture Hand Posture Recognition',
        venue: 'Journal article',
        status: 'review',
        statusLabel: 'Under Review',
      },
      {
        title:
          'Safety Aware Knowledge Extraction from Motion Capture Hand Posture Data for Subject Independent Assistive Command Control',
        venue: 'Journal article',
        status: 'review',
        statusLabel: 'Under Review',
      },
    ],
  },
  {
  id: 'journal',
  label: 'Journal',
  empty: 'Journal articles from this project will be listed here once published.',
  items: [
    {
      title:
        'Gesture-Based Navigation of Smart Wheelchairs: A Review of Current Trends and Future Directions',
      authors:
        'Rakib Ahammed Diptho, Safiul Haque Chowdhury, Md. Abdullah Al Mamun, Md. Shakhawat Hosen, Md. Shamsur Rahman, Sarnali Basak, Md. Abul Kalam Azad',
      venue:
        'Technologies, Volume 14, Issue 7, Article 430, MDPI, 2026',
      status: 'pub',
      statusLabel: 'Published',
      link: 'https://www.mdpi.com/2227-7080/14/7/430',
    },
    {
      title:
        'Hand Landmark Detection using YOLO26n for Gesture-Based Smart Wheelchair Navigation',
      authors:
        'Rakib Ahammed Diptho, Safiul Haque Chowdhury, Md. Abdullah Al Mamun, Md. Shakhawat Hosen, Md. Shamsur Rahman, Sarnali Basak, Md. Abul Kalam Azad',
      venue:
        'Jahangirnagar University Journal of Electronics and Computer Science, Volume 17, 2026',
      status: 'pub',
      statusLabel: 'Published',
    },
  ],
  },
  {
    id: 'conf',
    label: 'Conference',
    empty: 'Conference papers and proceedings will be listed here once accepted.',
    items: [],
  },
  {
    id: 'dataset',
    label: 'Datasets',
    empty: 'Datasets released by the project will be listed here.',
    items: [
      {
        title:
          'HandGesture-5G: A Multi-View, Multi-Illumination Smartphone Image Dataset of Five Static Hand Gestures for Robust Computer Vision Research',
        authors:
          'Rakib Ahammed Diptho, Safiul Haque Chowdhury, Md. Abdullah Al Mamun, Md. Shakhawat Hosen, Md. Shamsur Rahman, Sarnali Basak, Md. Abul Kalam Azad',
        venue: 'Mendeley Data, V2, 2026',
        status: 'pub',
        statusLabel: 'Dataset',
        link: 'https://doi.org/10.17632/wj25crzdbm.2',
      },
    ],
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
