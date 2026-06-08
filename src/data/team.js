// Team members. To add a real photo, set `photo` to an imported image
// (e.g. import azad from '../assets/azad.jpg') and pass it in here.
import mamun from '../assets/mamun.jpg';
import rakib from '../assets/rakib.jpeg';
import shamsur from '../assets/shamsur.jpg';
import sarnali from '../assets/sarnali.jpeg';
import safiul from '../assets/Safiul.png';
import kalam from '../assets/kalam.png';
import sakhawat from '../assets/sakhawat.png';

export const team = [
  {
    initials: 'AKA',
    role: 'Principal Investigator',
    roleClass: 'pi',
    name: 'Prof. Dr. Md Abul Kalam Azad',
    aff: ['Professor, Dept. of CSE,', 'Jahangirnagar University'],
    lead: true,
    photo: kalam,
  },
  {
    initials: 'SB',
    role: 'Co-PI · 1',
    roleClass: 'copi',
    name: 'Ms. Sarnali Basak',
    aff: ['Associate Professor, Dept. of CSE,', 'Jahangirnagar University'],
    photo: sarnali,
  },
  {
    initials: 'SR',
    role: 'Co-PI · 2',
    roleClass: 'copi',
    name: 'Dr. Md. Shamsur Rahman',
    aff: ['Chief Medical Officer (CMO),', 'Medical Center, JU'],
    photo: shamsur,
  },
  {
    initials: 'RAD',
    role: 'Research Assistant',
    roleClass: '',
    name: 'Rakib Ahmed Diptho',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: rakib,
  },
  {
    initials: 'SHC',
    role: 'Research Assistant',
    roleClass: '',
    name: 'Safiul Haque Chowdhury',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: safiul,
  },
  {
    initials: 'MAAM',
    role: 'Masters Research Student',
    roleClass: '',
    name: 'Md. Abdullah Al Mamun',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: mamun,
  },
  {
    initials: 'SH',
    role: 'Masters Research Student',
    roleClass: '',
    name: 'Md. Shakhawat Hosen',
    aff: ['Dept. of CSE,', 'Jahangirnagar University'],
    photo: sakhawat,
  },
];
