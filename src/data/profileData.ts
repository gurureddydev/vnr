import vijya1 from '../imports/vijya1.jpeg';
import vijya2 from '../imports/vijya2.jpeg';
import vijya3 from '../imports/vijya3.jpeg';

export interface CareerItem {
  year: string;
  title: string;
  desc: string;
}

export interface NewsItem {
  id: string;
  headline: string;
  date: string;
  summary: string;
  category: string;
  imageUrl: string;
}

export interface GalleryPhoto {
  id: string;
  label: string;
  imageUrl: string;
  date: string;
}

export interface LeaderInfo {
  name: string;
  constituency: string;
  district: string;
  party: string;
  status: string;
  fatherName: string;
  age: number;
  profession: string;
  spouseProfession: string;
  village: string;
  election: string;
  partNumber: string;
  serialNumber: string;
  voterStatus: string;
  phone: string;
  email: string;
}

export const LEADER_INFO: LeaderInfo = {
  name: 'M.C. VIJAYANANDA REDDY',
  constituency: 'Chittoor',
  district: 'Chittoor',
  party: 'YSR Congress Party',
  status: 'MLA Candidate',
  fatherName: 'Late M A Chinnabba Reddy',
  age: 54,
  profession: 'Business',
  spouseProfession: 'Business',
  village: 'Kothapallemitta',
  election: '2024 Assembly Candidate',
  partNumber: '44',
  serialNumber: '77',
  voterStatus: 'Enrolled',
  phone: '+91 94400 12345',
  email: 'office@ysrcp-chittoor.in',
};

export interface NavItem {
  label: string;
  anchor?: string;
  hasDropdown?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', anchor: 'top' },
  { label: 'About Leader', anchor: 'about' },
  { label: 'Political Career', anchor: 'career' },
  { label: 'Constituency', anchor: 'constituency' },
  { label: 'YSR Schemes', hasDropdown: true },
  { label: 'Photo Gallery', anchor: 'gallery' },
  { label: 'In The News', anchor: 'news' },
  { label: 'Download Profile', anchor: 'download' },
  { label: 'Contact Office', anchor: 'contact' },
];

export const TICKER_NEWS = [
  '*MC Vijayananda Reddy addresses party workers in Chittoor*',
  '*YSRCP seeks Unmapped and Anomaly lists*',
  '*Bhogapuram is YS Jagan\'s work, TDP\'s credit theft*',
  '*Cheyyeru sand loot exposed*',
  '*YSRCP fights for Chittoor constituency infrastructure & development*',
  '*Former APSRTC Vice Chairman MC Vijayananda Reddy joins mass rally*',
];

export const CAREER_ITEMS: CareerItem[] = [
  {
    year: '2024',
    title: 'YSRCP MLA Candidate – Chittoor',
    desc: 'Officially fielded as the YSR Congress Party candidate for the 2024 Andhra Pradesh Legislative Assembly election from Chittoor constituency.',
  },
  {
    year: '2021–2024',
    title: 'Chittoor Assembly Constituency Coordinator',
    desc: 'Served as the official YSRCP coordinator for Chittoor Assembly Constituency, overseeing party activities, Navaratnalu welfare scheme implementation, and public outreach across all mandals.',
  },
  {
    year: '2019–2022',
    title: 'Former Vice Chairman – APSRTC',
    desc: 'Appointed as Vice Chairman of the Andhra Pradesh State Road Transport Corporation, contributing to public transport policy, worker welfare, and regional bus connectivity.',
  },
  {
    year: '2014–2019',
    title: 'Senior YSRCP Party Leader – Chittoor District',
    desc: 'Active senior leader and organiser for YSR Congress Party in Chittoor district, leading membership drives, padayatras, and public grievances redressal campaigns.',
  },
  {
    year: 'Pre-2014',
    title: 'Business & Community Welfare Work',
    desc: 'Established successful business ventures in Chittoor. Active in community welfare initiatives supporting education, rural roads, healthcare camps, and drinking water facilities in Kothapallemitta village and surrounding areas.',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    label: 'Namaste & Greeting Chittoor Voters',
    imageUrl: vijya2,
    date: 'Aug 2024',
  },
  {
    id: 'g2',
    label: 'Chittoor Constituency Praja Yatra',
    imageUrl: vijya3,
    date: 'Jul 2024',
  },
  {
    id: 'g3',
    label: 'Official Leadership Portrait',
    imageUrl: vijya1,
    date: 'Jun 2024',
  },
  {
    id: 'g4',
    label: 'Navaratnalu Welfare Distribution in Chittoor',
    imageUrl: vijya2,
    date: 'May 2024',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'n1',
    headline: '*MC Vijayananda Reddy chairs ward coordinators meeting in Chittoor*',
    date: 'Aug 4, 2026',
    summary: 'Chittoor YSRCP candidate MC Vijayananda Reddy held a detailed review meeting with ward in-charges to streamline door-to-door campaign efforts and review welfare scheme coverage.',
    category: 'Constituency',
    imageUrl: vijya2,
  },
  {
    id: 'n2',
    headline: '*YSRCP MLA candidate reaffirms commitment to Chittoor development*',
    date: 'Aug 2, 2026',
    summary: 'Speaking at a press conference in Chittoor, Vijayananda Reddy highlighted key projects including industrial corridor linkage, drinking water projects, and youth employment initiatives.',
    category: 'Press Release',
    imageUrl: vijya1,
  },
  {
    id: 'n3',
    headline: '*Vijayananda Reddy distributes relief to flood-affected families in constituency*',
    date: 'Jul 29, 2026',
    summary: 'Inspected low-lying areas in Chittoor town following heavy rains and ensured immediate distribution of essential provisions and medical aid to affected residents.',
    category: 'Social Work',
    imageUrl: vijya3,
  },
  {
    id: 'n4',
    headline: '*YSRCP senior leader attends state-level party coordination committee*',
    date: 'Jul 25, 2026',
    summary: 'Participated in high-level party meeting held at Tadepalli to finalize campaign strategy and review booth-level committee formations for Chittoor district.',
    category: 'Party Event',
    imageUrl: vijya2,
  },
];

export const POLITICAL_POSITIONS = [
  'Chittoor Assembly Coordinator',
  'Former APSRTC Vice Chairman',
  'Senior YSRCP Leader',
  'YSRCP Chittoor District Core Committee Member',
];
