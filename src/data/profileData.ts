import vijya1 from '../vijya1.jpeg';
import vijya2 from '../vijya2.jpeg';
import vijya3 from '../vijya3.jpeg';

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
  fullName: string;
  moniker: string;
  dob: string;
  constituency: string;
  district: string;
  party: string;
  status: string;
  fatherName: string;
  motherName: string;
  spouseName: string;
  age: number;
  profession: string;
  spouseProfession: string;
  village: string;
  education: string;
  election: string;
  partNumber: string;
  serialNumber: string;
  voterStatus: string;
  phone: string;
  email: string;
  officeAddress: string;
}

export const LEADER_INFO: LeaderInfo = {
  name: 'M.C. VIJAYANANDHA REDDY',
  fullName: 'M. C. Vijayanandha Reddy',
  moniker: 'VNR',
  dob: 'July 24, 1969',
  constituency: 'Chittoor',
  district: 'Chittoor',
  party: 'YSR Congress Party',
  status: 'MLA Candidate',
  fatherName: 'M. A. Chinnabba Reddy',
  motherName: 'Padmajyothi',
  spouseName: 'M. V. Indhumathi',
  age: 57,
  profession: 'Business',
  spouseProfession: 'Business',
  village: 'Kothapallemitta',
  education: 'B.Com (OUS) – Viswa Bharathi University, Raipur, Chhattisgarh (2005)',
  election: '2024 Assembly Candidate',
  partNumber: '44',
  serialNumber: '77',
  voterStatus: 'Enrolled',
  phone: '+91 81250 26072',
  email: 'mcvreddy1234@mcvnr.com',
  officeAddress: 'YSRCP Party Office Chittoor, Ettiyamma Temple Street, Konga reddy palli',
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
    title: 'Chittoor YSRCP Candidate MC Vijayanandha Reddy about His Win in AP Elections | Today\'s Leader',
    titleTe: 'చిత్తూరు ఏపీ ఎన్నికల విజయంపై ఎంసి విజయానంధ రెడ్డి ముఖాముఖి | టుడేస్ లీడర్',
    videoUrl: 'https://www.youtube.com/watch?v=RfVZrCg-rMs',
    embedUrl: 'https://www.youtube.com/embed/RfVZrCg-rMs',
    thumbnailUrl: 'https://img.youtube.com/vi/RfVZrCg-rMs/hqdefault.jpg',
    duration: '06:15',
    date: 'AP Elections',
    views: 'Featured Interview',
  },
  {
    id: 'Z-2RPPzSUZA',
    title: 'MC Vijayanandha Reddy Address to Chittoor Constituency Cadre & Public Rally',
    titleTe: 'చిత్తూరు నియోజకవర్గ కార్యకర్తల సమావేశంలో ఎంసి విజయానంధ రెడ్డి ప్రసంగం',
    videoUrl: 'https://www.youtube.com/watch?v=Z-2RPPzSUZA',
    embedUrl: 'https://www.youtube.com/embed/Z-2RPPzSUZA',
    thumbnailUrl: 'https://img.youtube.com/vi/Z-2RPPzSUZA/hqdefault.jpg',
    duration: '08:40',
    date: 'Public Speech',
    views: 'YSRCP Campaign',
  },
  {
    id: '00dds5fFmZo',
    title: 'MC Vijayanandha Reddy Press Conference & Development Blueprint for Chittoor',
    titleTe: 'చిత్తూరు సమగ్ర అభివృద్ధి ప్రణాళికపై ఎంసి విజయానంధ రెడ్డి పత్రికా సమావేశం',
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

export interface NavItem {
  label: string;
  anchor?: string;
  hasDropdown?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', anchor: 'top' },
  { label: 'About Leader', anchor: 'about' },
  { label: 'Political Career', anchor: 'career' },
  { label: 'Philanthropy', anchor: 'philanthropy' },
  { label: 'Constituency', anchor: 'constituency' },
  { label: 'YSR Schemes', hasDropdown: true },
  { label: 'Photo Gallery', anchor: 'gallery' },
  { label: 'Videos', anchor: 'videos' },
  { label: 'News', anchor: 'news' },
  { label: 'Contact Office', anchor: 'contact' },
];

export const TICKER_NEWS = [
  '*MC Vijayanandha Reddy (VNR) — Jananeta of Chittoor Constituency*',
  '*YSRCP nominates Vijayanandha Reddy as Chittoor Assembly candidate for 2024 elections*',
  '*VNR provided free meals to 3,000 people daily during COVID-19 crisis in Chittoor*',
  '*15 free mineral water plants established in Chittoor municipality by VNR*',
  '*Former APSRTC Vice Chairman MC Vijayanandha Reddy joins mass rally*',
  '*VNR installed first bronze statue of Y.S. Rajasekhara Reddy in Chittoor district*',
  '*Jagananna Canteens by VNR serve 600 free meals daily for over a year*',
];

export interface PhilanthropyItem {
  icon: string;
  title: string;
  desc: string;
}

export const PHILANTHROPY_ITEMS: PhilanthropyItem[] = [
  {
    icon: '🍽️',
    title: 'Jagananna Canteens',
    desc: 'With the resolve to provide a full meal to every poor person, VNR started Jagananna Canteens in the constituency, providing free meals to 600 people every day for more than a year.',
  },
  {
    icon: '🏥',
    title: 'COVID-19 Crisis Relief',
    desc: 'During the COVID-19 pandemic, he provided meals for 3,000 people every day and distributed essential groceries free of cost to struggling families. He also provided fans and beds free of cost to the quarantine ward in Chittoor Government Hospital.',
  },
  {
    icon: '🏪',
    title: 'Municipal Market Gate Fee Waiver',
    desc: 'As a farmer\'s son who understands the hardship of laborers, he paid Crores of rupees from his own funds for three years to stop the collection of market gate fee from street vendors, market traders, and transport vehicles in Chittoor constituency.',
  },
  {
    icon: '🛒',
    title: 'Push Carts for Vendors',
    desc: 'Seeing the hardship of small traders, he spent nearly ₹60 lakh and distributed 100 push carts to vendors who were unable to buy new carts.',
  },
  {
    icon: '👔',
    title: 'Uniforms for Drivers',
    desc: 'Being someone who started his life as a driver, he provided 4 sets of uniforms along with a tailoring allowance of ₹1,000 for stitching costs, using his own funds, to nearly 3,500 auto drivers and lorry drivers in Chittoor constituency.',
  },
  {
    icon: '💧',
    title: 'Free Mineral Water Plants',
    desc: 'With the resolve to provide safe drinking water, a total of 15 mineral water plants have been established in the municipality of the Chittoor constituency.',
  },
  {
    icon: '🕊️',
    title: 'Free Funeral Services (Maha Prasthanam)',
    desc: 'With the intention that every person\'s final journey should be conducted with dignity, Maha Prasthanam vehicles (Hearse/Mortuary Vans) have been made available for free. Two vehicles in Chittoor Rural and Gudipala Mandals, and two vehicles plus four freezer boxes in Chittoor city — all offered free of cost.',
  },
];

export const CAREER_ITEMS: CareerItem[] = [
  {
    year: '2024',
    title: 'YSRCP MLA Candidate – Chittoor',
    desc: 'The YSR Congress Party (YSRCP) nominated Vijayanandha Reddy as its candidate for the Chittoor Assembly constituency in the Andhra Pradesh Legislative Assembly election 2024.',
  },
  {
    year: '2021–2024',
    title: 'Vice Chairman – APSRTC',
    desc: 'Held the significant administrative role of Vice Chairman of the Andhra Pradesh State Road Transport Corporation (APSRTC) from October 2021 to 2024, succeeding P.S. Munirathnam, under Chief Minister Y. S. Jagan Mohan Reddy.',
  },
  {
    year: '2014 & 2019',
    title: 'General Elections Campaign',
    desc: 'As part of the 2014 and 2019 general elections, he toured extensively across the Chittoor district and worked hard for the YSRCP party\'s victory.',
  },
  {
    year: '2012',
    title: 'By-Elections & Praja Prasthanam',
    desc: 'Worked diligently for the victory of YSRCP in the by-elections. Participated in and contributed to the success of the Praja Prasthanam (public journey) initiated by the YSRCP through Y.S. Sharmila.',
  },
  {
    year: '2011',
    title: 'Joined YSR Congress Party',
    desc: 'Formally joined the Y.S.R. Congress Party and began building the party\'s organisational network across Chittoor district.',
  },
  {
    year: '2010',
    title: 'Resigned from Congress Party',
    desc: 'On November 30, 2010, he resigned from the Congress Party and extended his support to Sri Y.S. Jagan Mohan Reddy, marking the beginning of his journey with YSRCP.',
  },
  {
    year: 'Legacy',
    title: 'First YSR Bronze Statue in Chittoor District',
    desc: 'Demonstrated his profound admiration for the late leader Y.S. Rajasekhara Reddy by installing the first bronze statue of the former Chief Minister in the entire Chittoor district.',
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
    headline: '*MC Vijayanandha Reddy chairs ward coordinators meeting in Chittoor*',
    date: 'Aug 4, 2026',
    summary: 'Chittoor YSRCP candidate MC Vijayanandha Reddy (VNR) held a detailed review meeting with ward in-charges to streamline door-to-door campaign efforts and review welfare scheme coverage.',
    category: 'Constituency',
    imageUrl: vijya2,
  },
  {
    id: 'n2',
    headline: '*YSRCP MLA candidate reaffirms commitment to Chittoor development*',
    date: 'Aug 2, 2026',
    summary: 'Speaking at a press conference in Chittoor, Vijayanandha Reddy highlighted key projects including industrial corridor linkage, drinking water projects, and youth employment initiatives.',
    category: 'Press Release',
    imageUrl: vijya1,
  },
  {
    id: 'n3',
    headline: '*VNR distributes relief to flood-affected families in constituency*',
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
  'Chittoor Assembly Constituency In-Charge',
  'Former Vice Chairman – APSRTC (Oct 2021–2024)',
  'Senior YSRCP Leader & Organiser – Chittoor District',
  'Close Political Ally of Y. S. Jagan Mohan Reddy',
  'Founder – Smart DV Technologies (Rural IT Employment)',
];
