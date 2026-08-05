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

export interface SocialLinks {
  youtube: string;
  instagram: string;
  twitter: string;
  facebook: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  youtube: 'https://www.youtube.com/@mcvijayanandareddy4187/featured',
  instagram: 'https://www.instagram.com/mc_vijayanandareddy?igsh=YzI5d292Y2ZzOHQ%3D',
  twitter: 'https://x.com/McVNR1234',
  facebook: 'https://www.facebook.com/VijayanandaReddyMC?rdid=PBYCprlSB4wjtvKY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JVyM9rPwT%2F%3Fref%3D1#',
};

export interface YouTubeVideo {
  id: string;
  title: string;
  titleTe: string;
  videoUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
  duration: string;
  date: string;
  views: string;
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'RfVZrCg-rMs',
    title: 'Chittoor YSRCP Candidate MC Vijayananda Reddy about His Win in AP Elections | Today\'s Leader',
    titleTe: 'చిత్తూరు ఏపీ ఎన్నికల విజయంపై ఎంసి విజయానంద రెడ్డి ముఖాముఖి | టుడేస్ లీడర్',
    videoUrl: 'https://www.youtube.com/watch?v=RfVZrCg-rMs',
    embedUrl: 'https://www.youtube.com/embed/RfVZrCg-rMs',
    thumbnailUrl: 'https://img.youtube.com/vi/RfVZrCg-rMs/hqdefault.jpg',
    duration: '06:15',
    date: 'AP Elections',
    views: 'Featured Interview',
  },
  {
    id: 'Z-2RPPzSUZA',
    title: 'MC Vijayananda Reddy Address to Chittoor Constituency Cadre & Public Rally',
    titleTe: 'చిత్తూరు నియోజకవర్గ కార్యకర్తల సమావేశంలో ఎంసి విజయానంద రెడ్డి ప్రసంగం',
    videoUrl: 'https://www.youtube.com/watch?v=Z-2RPPzSUZA',
    embedUrl: 'https://www.youtube.com/embed/Z-2RPPzSUZA',
    thumbnailUrl: 'https://img.youtube.com/vi/Z-2RPPzSUZA/hqdefault.jpg',
    duration: '08:40',
    date: 'Public Speech',
    views: 'YSRCP Campaign',
  },
  {
    id: '00dds5fFmZo',
    title: 'MC Vijayananda Reddy Press Conference & Development Blueprint for Chittoor',
    titleTe: 'చిత్తూరు సమగ్ర అభివృద్ధి ప్రణాళికపై ఎంసి విజయానంద రెడ్డి పత్రికా సమావేశం',
    videoUrl: 'https://www.youtube.com/watch?v=00dds5fFmZo',
    embedUrl: 'https://www.youtube.com/embed/00dds5fFmZo',
    thumbnailUrl: 'https://img.youtube.com/vi/00dds5fFmZo/hqdefault.jpg',
    duration: '10:15',
    date: 'Press Conference',
    views: 'Media Address',
  },
  {
    id: 'xt2F8Td6FcE',
    title: 'Navaratnalu Welfare Scheme Reach & Grassroots Campaign in Chittoor Mandals',
    titleTe: 'చిత్తూరు మండలాల్లో నవరత్నాల సంక్షేమ పథకాల విస్తృత ప్రచారం',
    videoUrl: 'https://www.youtube.com/watch?v=xt2F8Td6FcE',
    embedUrl: 'https://www.youtube.com/embed/xt2F8Td6FcE',
    thumbnailUrl: 'https://img.youtube.com/vi/xt2F8Td6FcE/hqdefault.jpg',
    duration: '05:30',
    date: 'Welfare Campaign',
    views: 'Chittoor Outreach',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', anchor: 'top' },
  { label: 'About Leader', anchor: 'about' },
  { label: 'Political Career', anchor: 'career' },
  { label: 'Constituency', anchor: 'constituency' },
  { label: 'YSR Schemes', hasDropdown: true },
  { label: 'Photo Gallery', anchor: 'gallery' },
  { label: 'Videos', anchor: 'videos' },
  { label: 'News', anchor: 'news' },
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
