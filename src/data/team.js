// Team members. To add a real photo, set `photo` to an imported image
// (e.g. import azad from '../assets/azad.jpg') and pass it in here.
//
// Each member gets their own profile page at  #/team/<slug>.
// Profile fields (all optional; empty ones are simply hidden):
//   title         designation shown under the name
//   bio           array of paragraphs
//   emails        array of email addresses
//   phones        array of phone numbers
//   office        office / postal address
//   scholar       Google Scholar profile URL
//   researchgate  ResearchGate profile URL
//   links         array of { label, url }  (ORCID, GitHub, LinkedIn, ...)
//   education     array of { degree, inst, year }
//   interests     array of research interests
//   publications  array of { title, venue, year, link, type }
//                 type: 'journal' | 'conference' | 'dataset' (shown as a badge)
// Project publications from data/publications.js are added automatically
// (matched by `pubName` in the author list) and shown first.
import mamun from '../assets/mamun.jpg';
import rakib from '../assets/rakib.jpeg';
import shamsur from '../assets/shamsur.jpg';
import sarnali from '../assets/sarnali.jpeg';
import safiul from '../assets/Safiul.png';
import kalam from '../assets/kalam.png';
import sakhawat from '../assets/sakhawat.png';

const JU_CSE_OFFICE =
  'Department of Computer Science and Engineering, Jahangirnagar University, Savar, Dhaka 1342, Bangladesh';

export const team = [
  {
    initials: 'AKA',
    role: 'Principal Investigator',
    roleClass: 'Pi',
    name: 'Prof. Dr. Md Abul Kalam Azad',
    aff: ['Professor, Dept. of CSE,', 'Jahangirnagar University'],
    lead: true,
    photo: kalam,
    website: 'https://juniv.edu/teachers/makazad',
    slug: 'abul-kalam-azad',
    pubName: 'Md. Abul Kalam Azad',
    title: 'Professor and Chairman, Department of Computer Science and Engineering',
    bio: [
      'Prof. Dr. Md Abul Kalam Azad is Professor and Chairman of the Department of Computer Science and Engineering at Jahangirnagar University. He holds doctoral degrees from Jahangirnagar University and the University of Ulsan, South Korea, and a master\'s degree in Information Technology from KTH Royal Institute of Technology, Sweden.',
      'His research spans wireless sensor and cognitive radio networks, cloud and edge computing, data science and blockchain. He leads the Gesture-based Intelligent Wheelchair sub-project under ICSETEP.',
    ],
    emails: ['makazad@juniv.edu', 'akazad.ju@gmail.com'],
    phones: ['+880 1885-926041'],
    office: JU_CSE_OFFICE,
    scholar: '',
    researchgate: 'https://www.researchgate.net/profile/Md-Azad-9',
    links: [{ label: 'University Profile', url: 'https://juniv.edu/teachers/makazad' }],
    education: [
      { degree: 'PhD, Wireless Sensor Networks', inst: 'University of Ulsan, South Korea' },
      { degree: 'PhD, Cognitive Radio Networks', inst: 'Jahangirnagar University', year: '2017–2021' },
      { degree: 'MSc in Information Technology', inst: 'KTH Royal Institute of Technology, Sweden', year: '2006–2008' },
      { degree: 'BSc (Hons) in Computer Science and Engineering', inst: 'Jahangirnagar University' },
    ],
    interests: [
      'Computer and wireless networks',
      'Wireless sensor networks',
      'Cloud technologies and protocols',
      'Data science and big data',
      'Blockchain technology',
    ],
    publications: [
      { title: 'Secure Targeted Message Dissemination in IoT Using Blockchain Enabled Edge Computing', venue: 'IEEE Transactions on Consumer Electronics, 70(3)', year: '2024', type: 'journal' },
      { title: 'Prioritized Scheduling Routing Protocol for Minimizing Packet Drop in Wireless Body Area Network', venue: 'International Journal of Computer Networks and Communications, 16(6)', year: '2024', type: 'journal' },
      { title: 'Design and Implementation of an IoT Based Remote Health Monitoring System', venue: 'Journal of Computer and Communications, 12', year: '2024', type: 'journal' },
      { title: 'Fish Disease Detection Using Image Based Machine Learning Technique in Aquaculture', venue: 'Journal of King Saud University – Computer and Information Sciences', year: '2021', type: 'journal' },
      { title: 'Improving Signal Detection Accuracy at FC of a CRN using Machine Learning and Fuzzy Rules', venue: 'Indonesian Journal of Electrical Engineering and Computer Science, 21(2)', year: '2021', type: 'journal' },
      { title: 'Secure data sharing and searching at the edge of cloud-assisted Internet of Things', venue: 'IEEE Cloud Computing, 4', year: '2017', type: 'journal' },
      { title: 'Security and privacy challenges in mobile cloud computing: Survey and way ahead', venue: 'Journal of Network and Computer Applications, 84', year: '2017', type: 'journal' },
      { title: 'AURP: An AUV-Aided Underwater Routing Protocol for Underwater Acoustic Sensor Networks', venue: 'Sensors, 12(2)', year: '2012', type: 'journal' },
    ],
  },
  {
    initials: 'SB',
    role: 'Co-PI · 1',
    roleClass: 'CoPi',
    name: 'Ms. Sarnali Basak',
    aff: ['Associate Professor, Dept. of CSE,', 'Jahangirnagar University'],
    photo: sarnali,
    website: 'https://juniv.edu/teachers/sarnali.cse',
    slug: 'sarnali-basak',
    pubName: 'Sarnali Basak',
    title: 'Associate Professor, Department of Computer Science and Engineering',
    bio: [
      'Sarnali Basak is an Associate Professor in the Department of Computer Science and Engineering at Jahangirnagar University. She holds an MSc in Cognitive Science from the School of Informatics, University of Edinburgh.',
      'Her research covers artificial intelligence, machine learning, neural computation and the Internet of Things, with recent work on medical image analysis and gesture-based assistive systems.',
    ],
    emails: ['sarnali.cse@juniv.edu', 'sarnali.cse@gmail.com'],
    phones: ['+880 2224491045-51 (PABX)'],
    office: JU_CSE_OFFICE,
    scholar: 'https://scholar.google.com/citations?user=tzwpSwwAAAAJ&hl=en',
    researchgate: '',
    links: [{ label: 'University Profile', url: 'https://juniv.edu/teachers/sarnali.cse' }],
    education: [
      { degree: 'MSc in Cognitive Science', inst: 'School of Informatics, University of Edinburgh, Scotland', year: '2015–2016' },
      { degree: 'MSc (Research) in Computer Science and Engineering', inst: 'Jahangirnagar University', year: '2010–2012' },
      { degree: 'BSc (Hons) in Computer Science and Engineering', inst: 'Jahangirnagar University', year: '2005–2009' },
    ],
    interests: [
      'Artificial intelligence',
      'Brain sciences',
      'Machine learning',
      'Neural computation',
      'Internet of Things',
      'Computational design and modelling',
    ],
    publications: [
      { title: 'CNN5Conv2FC: A Resource-Aware Deep Learning Framework for Real-Time Mango Leaf Disease Recognition', venue: 'Advances in Agriculture (Wiley)', year: '2026', type: 'journal', link: 'https://doi.org/10.1155/aia/7124711' },
      { title: 'Cross-Dataset Evaluation of the Lightweight YOLO Family for Breast Ultrasound Lesion Segmentation: Effects of Preprocessing, Hyperparameter Optimization, and Test-Time Augmentation', venue: 'NDT (MDPI), 4(3), 28', year: '2026', type: 'journal', link: 'https://doi.org/10.3390/ndt4030028' },
      { title: 'Developing an Efficient Supplier Performance Evaluation and Selection Process By Integrating the MARCOS Method', venue: 'Array (Elsevier)', year: '2026', type: 'journal', link: 'https://doi.org/10.1016/j.array.2026.100742' },
      { title: 'Enhancing Dermatological Diagnosis Through Medical Image Analysis: How Effective Is YOLO11 Compared to Leading CNN Models?', venue: 'NDT (MDPI), 3(2), 11', year: '2025', type: 'journal', link: 'https://doi.org/10.3390/ndt3020011' },
      { title: 'A Cross-Modal Transformer with Explainable AI for Multimodal Breast Cancer Detection', venue: 'PECCII 2026 (IEEE)', year: '2026', type: 'conference', link: 'https://doi.org/10.1109/PECCII70991.2026.11661976' },
      { title: 'An Explainable Machine Learning Framework for Crop Production Prediction and Recommendation System in Bangladesh', venue: 'IEEE RAAICON 2025', year: '2025', type: 'conference', link: 'https://doi.org/10.1109/RAAICON69033.2025.11502351' },
      { title: 'xLSTM-Based Framework for Accurate Rainfall Forecasting Across Bangladesh: A Comparative Analysis with LSTM and GRU', venue: 'IEEE ICCIT 2025', year: '2025', type: 'conference', link: 'https://doi.org/10.1109/ICCIT68739.2025.11491345' },
      { title: 'Cyberbullying Detection in Bangla Facebook Comments Using Pre-Trained Transformer Models', venue: 'MIET 2024 (Springer)', year: '2024', type: 'conference', link: 'https://doi.org/10.1007/978-981-96-2721-9_30' },
      { title: 'Deep Learning-based Diabetic Retinopathy Detection for automated health assessment', venue: 'IEEE NCIM 2023', year: '2023', type: 'conference', link: 'https://ieeexplore.ieee.org/document/10212764' },
      { title: 'Gesture-based Smart Wheelchair for Assisting Physically Challenged People', venue: 'IEEE ICCCI 2021', year: '2021', type: 'conference', link: 'https://ieeexplore.ieee.org/document/9402632' },
    ],
  },
  {
    initials: 'SR',
    role: 'Co-PI · 2',
    roleClass: 'CoPi',
    name: 'Dr. Md. Shamsur Rahman',
    aff: ['Chief Medical Officer (CMO),', 'Medical Center, JU'],
    photo: shamsur,
    website: 'https://juniv.edu/center/medical-centre#',
    slug: 'shamsur-rahman',
    pubName: 'Md. Shamsur Rahman',
    title: 'Chief Medical Officer, Medical Center, Jahangirnagar University',
  },
  {
    initials: 'RAD',
    role: 'Research Assistant',
    roleClass: 'RA',
    name: 'Rakib Ahammed Diptho',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: rakib,
    slug: 'rakib-ahammed-diptho',
    pubName: 'Rakib Ahammed Diptho',
    title: 'Research Assistant, Department of Computer Science and Engineering',
    bio: [
      'Rakib Ahammed Diptho is a researcher and lecturer whose work centres on computer vision and applied machine learning for healthcare and assistive technology.',
      'He works across the full research pipeline, from dataset construction and model development to manuscript preparation, and serves as a peer reviewer for Neural Computing and Applications, Frontiers in Artificial Intelligence, Frontiers in Medical Technology, Frontiers in Oncology and MDPI Diagnostics.',
    ],
    emails: ['3788diptho@juniv.edu', 'dipthobracu02@gmail.com'],
    office: JU_CSE_OFFICE,
    scholar: 'https://scholar.google.com/citations?user=SSoTLJoAAAAJ',
    researchgate: '',
    links: [
      { label: 'ORCID', url: 'https://orcid.org/0009-0007-3062-1034' },
      { label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=58931418400' },
      { label: 'GitHub', url: 'https://github.com/RADiptho' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/md-rakib-ahammed-diptho-a2468227a' },
    ],
    education: [
      { degree: 'M.Sc. in Computer Science', inst: 'Jahangirnagar University', year: '2024–2025' },
      { degree: 'B.Sc. in Computer Science and Engineering', inst: 'BRAC University', year: '2019–2024' },
    ],
    interests: [
      'Computer vision',
      'Applied machine learning for healthcare',
      'Assistive technology',
      'Explainable AI',
      'Lightweight and edge model deployment',
      'Cross-dataset generalization',
    ],
    publications: [
      { title: 'Physically consistent and spatially conformalized machine learning for trustworthy flood susceptibility mapping of the 2024 Feni flash flood', venue: 'Discover Geoscience, 4(1), 390', year: '2026', type: 'journal' },
      { title: 'Reliable methane storage screening and inverse design of metal organic frameworks under distribution shift', venue: 'Discover Artificial Intelligence', year: '2026', type: 'journal', link: 'https://doi.org/10.1007/s44163-026-02574-5' },
      { title: 'Cross-Dataset Evaluation of the Lightweight YOLO Family for Breast Ultrasound Lesion Segmentation: Effects of Preprocessing, Hyperparameter Optimization, and Test-Time Augmentation', venue: 'NDT (MDPI), 4(3), 28', year: '2026', type: 'journal', link: 'https://doi.org/10.3390/ndt4030028' },
      { title: 'CNN5Conv2FC: A Resource-Aware Deep Learning Framework for Real-Time Mango Leaf Disease Recognition', venue: 'Advances in Agriculture (Wiley)', year: '2026', type: 'journal', link: 'https://doi.org/10.1155/aia/7124711' },
      { title: 'Enhancing Dermatological Diagnosis Through Medical Image Analysis: How Effective Is YOLO11 Compared to Leading CNN Models?', venue: 'NDT (MDPI), 3(2), 11', year: '2025', type: 'journal', link: 'https://doi.org/10.3390/ndt3020011' },
      { title: 'A Cross-Modal Transformer with Explainable AI for Multimodal Breast Cancer Detection', venue: 'PECCII 2026 (IEEE)', year: '2026', type: 'conference', link: 'https://doi.org/10.1109/PECCII70991.2026.11661976' },
      { title: 'An Explainable Machine Learning Framework for Crop Production Prediction and Recommendation System in Bangladesh', venue: 'IEEE RAAICON 2025', year: '2025', type: 'conference', link: 'https://doi.org/10.1109/RAAICON69033.2025.11502351' },
      { title: 'xLSTM-Based Framework for Accurate Rainfall Forecasting Across Bangladesh: A Comparative Analysis with LSTM and GRU', venue: 'IEEE ICCIT 2025', year: '2025', type: 'conference', link: 'https://doi.org/10.1109/ICCIT68739.2025.11491345' },
      { title: 'PCOS Diagnosis with Confluence CNN: A Revolution in Women\'s Health', venue: 'IEEE ICCIT 2023', year: '2023', type: 'conference' },
      { title: 'Event Aligned MODIS Dataset for Mangrove Canopy Response to Tropical Cyclones in the Bay of Bengal', venue: 'Mendeley Data (Elsevier)', year: '2026', type: 'dataset' },
      { title: 'Bangladesh Historical Rainfall and Meteorological Dataset for Future Rainfall Prediction', venue: 'Mendeley Data (Elsevier)', year: '2026', type: 'dataset' },
    ],
  },
  {
    initials: 'SHC',
    role: 'Research Assistant',
    roleClass: 'RA',
    name: 'Safiul Haque Chowdhury',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: safiul,
    slug: 'safiul-haque-chowdhury',
    pubName: 'Safiul Haque Chowdhury',
    title: 'Research Assistant, Department of Computer Science and Engineering',
    bio: [
      'Safiul Haque Chowdhury is a Research Assistant in the Department of Computer Science and Engineering at Jahangirnagar University and a member of IEEE. His work focuses on explainable and privacy-preserving machine learning, particularly for healthcare, and on gesture-controlled robotic platforms.',
      'He is an Editorial Member of the Journal of Artificial Intelligence and Digital Health and a Senior Researcher at SIResearchLab, Bangladesh University.',
    ],
    emails: ['4169safiulhaque@juniv.edu'],
    office: JU_CSE_OFFICE,
    scholar: 'https://scholar.google.com/citations?user=8prvggIAAAAJ',
    researchgate: 'https://www.researchgate.net/profile/Safiul-Haque-Chowdhury',
    links: [
      { label: 'ORCID', url: 'https://orcid.org/0009-0003-7098-2476' },
      { label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/author/878700928448992' },
      { label: 'GitHub', url: 'https://github.com/safiulhaquechowdhury' },
      { label: 'JAID Editorial Board', url: 'https://www.confmeets.com/journals/jaid/editorial_member/safiul-haque-chowdhury-271134' },
      { label: 'SIResearchLab', url: 'https://siresearchlab.bu.edu.bd/team' },
    ],
    education: [
      { degree: 'M.Sc. in Computer Science', inst: 'Jahangirnagar University', year: '2025–2026' },
      { degree: 'B.Sc. in Computer Science and Engineering', inst: 'Bangladesh University', year: '2020–2024' },
    ],
    interests: ['Machine learning', 'Explainable AI', 'Differential privacy', 'Quantum computing', 'Gesture-controlled robotics'],
    publications: [
      { title: 'A Secure Bank Loan Prediction System by Bridging Differential Privacy and Explainable Machine Learning', venue: 'Electronics (MDPI), 14(8), 1691', year: '2025', type: 'journal' },
      { title: 'Identification of Maternal Health Risk From Optimal Features Using Explainable Machine Learning', venue: 'Engineering Reports, 7(11), e70491', year: '2025', type: 'journal' },
      { title: 'Cross-Dataset Evaluation of the Lightweight YOLO Family for Breast Ultrasound Lesion Segmentation: Effects of Preprocessing, Hyperparameter Optimization, and Test-Time Augmentation', venue: 'NDT (MDPI), 4(3), 28', year: '2026', type: 'journal', link: 'https://doi.org/10.3390/ndt4030028' },
      { title: 'Physically consistent and spatially conformalized machine learning for trustworthy flood susceptibility mapping of the 2024 Feni flash flood', venue: 'Discover Geoscience, 4(1), 390', year: '2026', type: 'journal' },
      { title: 'Hepatitis C Detection from Blood Donor Data Using Hybrid Deep Feature Synthesis and Interpretable Machine Learning', year: '2025', type: 'conference' },
      { title: 'Interpretable Heart Failure Identification Utilizing Auto Machine Learning Tools', year: '2025', type: 'conference' },
      { title: 'Brain Stroke Prediction using Explainable Machine Learning and Time Series Feature Engineering', year: '2024', type: 'conference' },
      { title: 'Newborn Weight Prediction And Interpretation Utilizing Explainable Machine Learning', year: '2024', type: 'conference' },
    ],
  },
  {
    initials: 'MAAM',
    role: 'Masters Research Student',
    roleClass: 'Student',
    name: 'Md. Abdullah Al Mamun',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: mamun,
    slug: 'abdullah-al-mamun',
    pubName: 'Abdullah Al Mamun',
    title: 'M.Sc. Research Student, Department of Computer Science and Engineering',
    bio: [
      'Md. Abdullah Al Mamun is an M.Sc. research student in the Department of Computer Science and Engineering at Jahangirnagar University, supervised by Prof. Dr. Md Abul Kalam Azad. His thesis work covers hand gesture recognition and Bangla natural language processing.',
    ],
    emails: ['mamun.stu2019@juniv.edu', 'mamun.jucse29@gmail.com'],
    phones: ['+880 1764-901306'],
    office: JU_CSE_OFFICE,
    scholar: 'https://scholar.google.com/citations?user=fS3ZUQwAAAAJ&hl=en',
    researchgate: '',
    links: [
      { label: 'GitHub', url: 'https://github.com/mamun390' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mamun-jucse' },
    ],
    education: [
      { degree: 'M.Sc. in Computer Science and Engineering', inst: 'Jahangirnagar University', year: '2025–present' },
      { degree: 'B.Sc. in Computer Science and Engineering', inst: 'Jahangirnagar University' },
    ],
    interests: ['Machine learning', 'Hand gesture recognition', 'Natural language processing', 'AI and robotics security'],
  },
  {
    initials: 'SH',
    role: 'Masters Research Student',
    roleClass: 'Student',
    name: 'Md. Shakhawat Hosen',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: sakhawat,
    slug: 'shakhawat-hosen',
    pubName: 'Shakhawat Hosen',
    title: 'M.Sc. Research Student, Department of Computer Science and Engineering',
    bio: [
      'Md. Shakhawat Hosen is an M.Sc. research student in the Department of Computer Science and Engineering at Jahangirnagar University. His thesis studies the robustness of MediaPipe-based hand gesture recognition under occlusion.',
    ],
    office: JU_CSE_OFFICE,
    scholar: 'https://scholar.google.com/citations?hl=en&user=Gq5Gq6UAAAAJ',
    researchgate: '',
    links: [{ label: 'ORCID', url: 'https://orcid.org/0009-0000-9614-4524' }],
    education: [
      { degree: 'M.Sc. in Computer Science and Engineering', inst: 'Jahangirnagar University' },
      { degree: 'B.Sc. in Computer Science and Engineering', inst: 'Jahangirnagar University' },
    ],
    interests: ['Hand gesture recognition', 'Occlusion robustness', 'Computer vision', 'Internet of Things', 'Blockchain'],
  },
];
