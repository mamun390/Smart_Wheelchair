// Events shown in the Events section. Photos live in public/events/<folder>/
// as <name>.webp (full size, opened in the viewer) and <name>-thumb.webp.
export const inception = {
  folder: 'events/inception-2026',
  title: 'Inception Workshop',
  subtitle: 'Developing a Gesture-based Intelligent Wheelchair for the Physically Challenged People in Bangladesh',
  dateISO: '2026-07-14T11:00:00+06:00',
  intro:
    'The sub-project was formally launched on 14 July 2026 with an inception workshop at the Department of Computer Science and Engineering, Jahangirnagar University. The workshop introduced the project goals, work plan and research team to university leadership, faculty members, researchers and students.',
  details: [
    ['Date', 'Tuesday, 14 July 2026'],
    ['Time', '11:00 AM'],
    ['Venue', 'Rooms 202 & 302, Dept. of CSE, Jahangirnagar University'],
    ['Organised by', 'Department of Computer Science and Engineering, JU'],
    ['Funded by', 'ADB & Government of Bangladesh (ICSETEP)'],
  ],
  chiefGuest: { name: 'Prof. Dr. Mohammad Kamrul Ahsan', role: 'Vice-Chancellor, Jahangirnagar University' },
  hosts: [
    { label: 'Program Chair', name: 'Prof. Dr. Abul Kalam Azad', role: 'Principal Investigator, ICSETEP Project D-67' },
    { label: 'Inaugural Speech & Hosting', name: 'Sarnali Basak', role: 'Co-Principal Investigator, ICSETEP Project D-67' },
  ],
  specialGuests: [
    { name: 'Prof. Dr. Md. Shamsul Alam', role: 'Pro-Vice-Chancellor (Academic), Jahangirnagar University' },
    { name: 'Prof. Dr. Mohammad Nazrul Islam', role: 'Pro-Vice-Chancellor (Administration), Jahangirnagar University' },
    { name: 'Prof. Dr. Mahbub Kabir', role: 'Dean, Faculty of Mathematical & Physical Sciences, Jahangirnagar University' },
    { name: 'Prof. Dr. Mohammad Zahidur Rahman', role: 'Dept. of Computer Science & Engineering, Jahangirnagar University' },
    { name: 'Prof. Dr. Mohammad Sohrab Hossain', role: 'Executive Director, CRP, Savar' },
    { name: 'Gazi Md. Nazrul Islam', role: 'Project Director, ICSETEP' },
  ],
  sessions: [
    {
      label: 'Technical Session I',
      speakers: [
        { name: 'Sarnali Basak', role: 'Associate Professor, Dept. of CSE, JU; Co-PI, ICSETEP D-67' },
        { name: 'Md. Masum Bhuiyan', role: 'Lecturer, Dept. of CSE, JU' },
      ],
    },
    {
      label: 'Technical Session II',
      talk: 'Research & Reality: Robotics, IoT and the Global Frontier',
      speakers: [
        { name: 'Redwan Ferdous', role: 'Managing Director, FronTech Limited' },
        { name: 'Safiul Haque Chowdhury', role: 'Research Assistant, AI Assistive Rehabilitation Technology Lab, ICSETEP D-67, Dept. of CSE, JU' },
      ],
    },
  ],
  lead: { src: 'team', alt: 'The project team seated in front of the Inception Workshop banner', caption: 'The project team at the Inception Workshop' },
  gallery: [
    { src: 'opening-session', alt: 'Guests seated at the head table during the opening session', caption: 'Opening session in progress' },
    { src: 'standee', alt: 'Inception Workshop standee listing the chief guest and special guests', caption: 'Workshop standee with the guest panel', tall: true },
    { src: 'podium-address', alt: 'A guest addressing the audience from the podium', caption: 'An address at the opening session' },
    { src: 'participants', alt: 'Faculty members, researchers and students attending the workshop', caption: 'Faculty members, researchers and students in attendance' },
    { src: 'guest-remarks', alt: 'A guest speaking at the podium during the opening session', caption: 'Remarks from the guest panel' },
    { src: 'session-2-sarnali', alt: 'Sarnali Basak presenting the project prototype during Technical Session II', caption: 'Technical Session II: Sarnali Basak presenting the project prototype' },
    { src: 'technical-session-2', alt: 'Redwan Ferdous presenting during Technical Session II', caption: 'Technical Session II: Redwan Ferdous, Managing Director, FronTech Limited' },
    { src: 'certificate', alt: 'A certificate of appreciation presented at the Inception Workshop', caption: 'Certificate of appreciation presented to guests' },
    { src: 'group-photo', alt: 'Group photo of the project team with workshop participants', caption: 'Group photo with workshop participants', wide: true },
  ],
};
