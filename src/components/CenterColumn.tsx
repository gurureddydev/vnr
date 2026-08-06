import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto, YOUTUBE_VIDEOS, YouTubeVideo, SOCIAL_LINKS, PHILANTHROPY_ITEMS } from '../data/profileData';
import { useLang } from '../context/LanguageContext';
import { t, tx } from '../data/translations';
import vijya1 from '../imports/vijya1.jpeg';
import vijya2 from '../imports/vijya2.jpeg';
import vijya3 from '../imports/vijya3.jpeg';

// ── FULL BIOGRAPHY DATA (EN + TE) ────────────────────────────────────────────
const BIO = {
  sectionTitle: {
    en: 'About M.C. Vijayanandha Reddy (VNR)',
    te: 'ఎం.సి. విజయానంధ రెడ్డి (VNR) గురించి',
  },
  sectionTag: { en: 'Official Biography', te: 'అధికారిక జీవిత చరిత్ర' },

  intro: {
    en: 'M. C. Vijayanandha Reddy (born July 24, 1969), popularly known by his moniker VNR, is an Indian politician from Andhra Pradesh. He is currently serving as the in-charge of the Chittoor Assembly constituency and is a close political ally of Y. S. Jagan Mohan Reddy, Peddireddy Ramachandra Reddy, and Peddireddy Mithun Reddy. He is noted for his various philanthropic acts and community service, which have contributed to his reputation for kindness. The YSR Congress Party (YSRCP) nominated him as its candidate for the Chittoor Assembly constituency in the 2024 Andhra Pradesh Legislative Assembly election.',
    te: 'ఎం. సి. విజయానంధ రెడ్డి (జననం: జూలై 24, 1969), VNR అనే పేరుతో ప్రసిద్ధి చెందారు, ఆంధ్రప్రదేశ్‌కు చెందిన భారతీయ రాజకీయ నాయకుడు. ప్రస్తుతం చిత్తూరు అసెంబ్లీ నియోజకవర్గ ఇన్‌చార్జ్‌గా పని చేస్తున్నారు మరియు వై. ఎస్. జగన్ మోహన్ రెడ్డి, పెద్దిరెడ్డి రామచంద్ర రెడ్డి మరియు పెద్దిరెడ్డి మిథున్ రెడ్డిల సన్నిహిత రాజకీయ మిత్రుడు. వివిధ దాతృత్వ చర్యలు మరియు సామాజిక సేవ ద్వారా దయాగుణంతో పేరు పొందారు. 2024 ఆంధ్రప్రదేశ్ శాసనసభ ఎన్నికలకు చిత్తూరు అసెంబ్లీ నియోజకవర్గం నుండి వైఎస్సార్సీపీ అభ్యర్థిగా నామినేట్ అయ్యారు.',
  },

  sections: [
    {
      heading: { en: 'Early Life & Education', te: 'పూర్వ జీవితం & విద్యాభ్యాసం' },
      paragraphs: [
        {
          en: 'M. C. Vijayanandha Reddy was born on July 24, 1969, into a farmer family to M. A. Chinnabba Reddy and Padmajyothi. Growing up in a family deeply rooted in agriculture and community life in Chittoor district, he witnessed the everyday challenges faced by farming families, agricultural labourers, and small-town residents from an early age — experiences that shaped his abiding sense of public responsibility.',
          te: 'ఎం. సి. విజయానంధ రెడ్డి 1969 జూలై 24న ఎం. ఎ. చిన్నబ్బ రెడ్డి మరియు పద్మజ్యోతి దంపతులకు రైతు కుటుంబంలో జన్మించారు. చిత్తూరు జిల్లాలో వ్యవసాయం మరియు సమాజ జీవనంలో లోతుగా మూలాలు నాటిన కుటుంబంలో పెరుగుతూ, చిన్నతనం నుండే వ్యవసాయ కుటుంబాలు, కూలీలు మరియు చిన్న పట్టణ నివాసుల సవాళ్ళను ప్రత్యక్షంగా చూశారు.',
        },
        {
          en: 'He is married to M. V. Indhumathi. He holds a Bachelor of Commerce (OUS) degree from Viswa Bharathi University, Raipur, Chhattisgarh, which he obtained in 2005.',
          te: 'ఆయన ఎం. వి. ఇంధుమతిని వివాహం చేసుకున్నారు. 2005లో ఛత్తీస్‌గఢ్‌లోని రాయ్‌పూర్ విశ్వ భారతి విశ్వవిద్యాలయం నుండి బ్యాచిలర్ ఆఫ్ కామర్స్ (OUS) డిగ్రీ పొందారు.',
        },
      ],
    },
    {
      heading: { en: 'Political Career', te: 'రాజకీయ జీవితం' },
      paragraphs: [
        {
          en: 'M. C. Vijayanandha Reddy has been actively involved in politics for the past decade, creating a distinct identity within the Y.S.R. Congress Party. He is constantly working to solve the problems of the people in the Chittoor constituency, always remaining accessible to the public. This dedication has earned him recognition from the people as a "Jananeta" (People\'s Leader) and a "Praja Nayakudu" (Public Leader).',
          te: 'ఎం. సి. విజయానంధ రెడ్డి గత దశాబ్దంగా రాజకీయాలలో చురుకుగా పాల్గొంటున్నారు, వైఎస్ కాంగ్రెస్ పార్టీలో ప్రత్యేక గుర్తింపు సృష్టించారు. చిత్తూరు నియోజకవర్గంలో ప్రజల సమస్యలను పరిష్కరించడానికి నిరంతరం కృషి చేస్తూ, ఎల్లప్పుడూ ప్రజలకు అందుబాటులో ఉంటారు. ఈ అంకితభావం ప్రజల నుండి "జననేత" మరియు "ప్రజా నాయకుడు" అనే గుర్తింపు తెచ్చిపెట్టింది.',
        },
        {
          en: 'On November 30, 2010, he resigned from the Congress Party and extended his support to Sri Y.S. Jagan Mohan Reddy. He subsequently joined the Y.S.R. Congress Party in 2011. In 2012, he worked diligently for the victory of YSRCP in the by-elections and contributed to the success of the "Praja Prasthanam" (public journey) initiated through Y.S. Sharmila. He also supported the "Odarpu Yatra" (consolation tour) undertaken by Y.S. Jagan Mohan Reddy and was an integral part of the tour in the Chittoor district.',
          te: '2010 నవంబర్ 30న కాంగ్రెస్ పార్టీకి రాజీనామా చేసి శ్రీ వైఎస్ జగన్ మోహన్ రెడ్డికి మద్దతు తెలిపారు. 2011లో వైఎస్ కాంగ్రెస్ పార్టీలో చేరారు. 2012లో ఉప ఎన్నికలలో వైఎస్సార్సీపీ విజయం కోసం శ్రద్ధగా పని చేశారు మరియు వైఎస్ షర్మిల ద్వారా ప్రారంభించిన "ప్రజా ప్రస్థానం" విజయానికి సహకరించారు. వైఎస్ జగన్ మోహన్ రెడ్డి చేపట్టిన "ఒడర్పు యాత్ర"కు మద్దతు ఇచ్చారు మరియు చిత్తూరు జిల్లాలో యాత్రలో అంతర్భాగంగా ఉన్నారు.',
        },
      ],
    },
    {
      heading: { en: 'Administrative Leadership – APSRTC', te: 'పరిపాలనా నాయకత్వం – ఎపిఎస్ఆర్టిసి' },
      paragraphs: [
        {
          en: 'M. C. Vijayanandha Reddy previously held a significant administrative role as Vice Chairman of the Andhra Pradesh State Road Transport Corporation (APSRTC) from October 2021 to 2024, succeeding P.S. Munirathnam, under Chief Minister Y. S. Jagan Mohan Reddy. In this capacity, he contributed to policy decisions affecting public transport across the state, with a particular focus on improving bus connectivity for rural and semi-urban communities.',
          te: 'ఎం. సి. విజయానంధ రెడ్డి ముఖ్యమంత్రి వై. ఎస్. జగన్ మోహన్ రెడ్డి ఆధ్వర్యంలో అక్టోబర్ 2021 నుండి 2024 వరకు ఆంధ్రప్రదేశ్ స్టేట్ రోడ్ ట్రాన్స్‌పోర్ట్ కార్పొరేషన్ (ఎపిఎస్ఆర్టిసి) వైస్ చైర్మన్‌గా ముఖ్యమైన పరిపాలనా పాత్ర నిర్వహించారు, పి.ఎస్. మునిరత్నం తరువాత ఈ పదవిని చేపట్టారు.',
        },
        {
          en: 'In that role, he championed worker welfare, efficient operations, and equitable service delivery across the corporation — setting a standard for the kind of governance Chittoor constituency deserves.',
          te: 'ఆ పాత్రలో, కార్మిక సంక్షేమం, సమర్థవంతమైన కార్యకలాపాలు మరియు కార్పొరేషన్ అంతటా న్యాయమైన సేవా వితరణకు మద్దతు ఇచ్చారు — చిత్తూరు నియోజకవర్గానికి అవసరమైన పాలన ప్రమాణాలను నెలకొల్పారు.',
        },
      ],
    },
    {
      heading: { en: 'Legacy & Smart DV Technologies', te: 'వారసత్వం & స్మార్ట్ DV టెక్నాలజీస్' },
      paragraphs: [
        {
          en: 'M. C. Vijayanandha Reddy demonstrated his profound admiration for the late leader Y.S. Rajasekhara Reddy by installing the first bronze statue of the former Chief Minister in the entire Chittoor district — a lasting tribute to a leader whose vision continues to inspire public service across the state.',
          te: 'ఎం. సి. విజయానంధ రెడ్డి దివంగత నాయకుడు వై.ఎస్. రాజశేఖర రెడ్డి పట్ల తన గాఢమైన ప్రశంసను చిత్తూరు జిల్లా మొత్తంలో మొదటి కంచు విగ్రహం ఏర్పాటు చేయడం ద్వారా ప్రదర్శించారు — రాష్ట్రమంతటా ప్రజా సేవకు ప్రేరణగా కొనసాగుతున్న నాయకునికి శాశ్వత నివాళి.',
        },
        {
          en: 'He also played a crucial role in the establishment and development of Smart DV Technologies, a software company known for being among the first to establish operations in a rural area of India, with the stated aim of providing employment opportunities for unemployed graduates in rural regions.',
          te: 'భారతదేశంలో గ్రామీణ ప్రాంతంలో కార్యకలాపాలు ప్రారంభించిన మొదటి సంస్థలలో ఒకటిగా పేరు పొందిన స్మార్ట్ DV టెక్నాలజీస్ స్థాపన మరియు అభివృద్ధిలో కీలక పాత్ర పోషించారు, గ్రామీణ ప్రాంతాల్లో నిరుద్యోగ గ్రాడ్యుయేట్లకు ఉద్యోగ అవకాశాలు కల్పించడం దీని లక్ష్యం.',
        },
      ],
    },
    {
      heading: { en: 'Commitment to People', te: 'ప్రజలకు నిబద్ధత' },
      paragraphs: [
        {
          en: 'Throughout his career, M.C. Vijayanandha Reddy has been guided by a straightforward principle: good governance is measured not in announcements, but in the lives it actually improves. He has consistently prioritised welfare scheme delivery, public grievance redressal, and direct engagement with voters across every village, ward, and mandal in the constituency.',
          te: 'తన వృత్తి జీవితమంతటా, ఎం.సి. విజయానంధ రెడ్డి ఒక సరళమైన సూత్రంతో మార్గనిర్దేశం పొందారు: మంచి పాలన ప్రకటనలలో కాదు, నిజంగా మెరుగుపడిన జీవితాలలో కొలవబడుతుంది. సంక్షేమ పథకాల వితరణ, ప్రజా ఫిర్యాదుల పరిష్కారం మరియు నియోజకవర్గంలోని ప్రతి గ్రామం, వార్డు మరియు మండలంలో ఓటర్లతో నేరుగా నిమగ్నత కోసం నిరంతరం ప్రాధాన్యత ఇచ్చారు.',
        },
        {
          en: 'His extensive charitable activities — from running Jagananna Canteens serving 600 free meals daily, to providing COVID relief for 3,000 people every day, to establishing 15 free mineral water plants — have cemented his reputation as a leader who leads by action. Whether distributing push carts to vendors, providing uniforms to 3,500 drivers, or offering free funeral services to ensure dignity in death, VNR has demonstrated the kind of consistent, ground-up service that builds lasting public trust.',
          te: 'రోజువారీ 600 ఉచిత భోజనాలు అందించే జగనన్న క్యాంటీన్లు నడపడం నుండి, రోజుకు 3,000 మందికి కోవిడ్ సహాయం అందించడం, 15 ఉచిత మినరల్ వాటర్ ప్లాంట్లు ఏర్పాటు చేయడం వరకు — అతని విస్తృత దాతృత్వ కార్యక్రమాలు చర్యల ద్వారా నడిపించే నాయకుడిగా అతని పేరుప్రతిష్ఠలను పటిష్ఠం చేశాయి. వ్యాపారులకు పుష్ కార్ట్‌లు పంపిణీ చేయడం, 3,500 డ్రైవర్లకు యూనిఫాంలు అందించడం లేదా మరణంలో గౌరవం నిర్ధారించడానికి ఉచిత అంత్యక్రియల సేవలు అందించడం — VNR శాశ్వత ప్రజా విశ్వాసాన్ని నిర్మించే స్థిరమైన సేవను ప్రదర్శించారు.',
        },
      ],
    },
  ],

  highlights: [
    {
      icon: '🏛️',
      en: { label: 'APSRTC Vice Chairman', sub: 'Oct 2021–2024, under CM YS Jagan' },
      te: { label: 'ఎపిఎస్ఆర్టిసి వైస్ చైర్మన్', sub: 'అక్టోబర్ 2021–2024, సిఎం వైఎస్ జగన్ ఆధ్వర్యంలో' },
    },
    {
      icon: '🗳️',
      en: { label: 'MLA Candidate 2024', sub: 'Chittoor Assembly Constituency' },
      te: { label: 'ఎమ్మెల్యే అభ్యర్థి 2024', sub: 'చిత్తూరు అసెంబ్లీ నియోజకవర్గం' },
    },
    {
      icon: '❤️',
      en: { label: 'Jananeta (People\'s Leader)', sub: 'Known for Philanthropy & Service' },
      te: { label: 'జననేత (ప్రజల నాయకుడు)', sub: 'దాతృత్వం & సేవకు ప్రసిద్ధి' },
    },
  ],

  faqTitle: { en: 'Frequently Asked Questions', te: 'తరచుగా అడిగే ప్రశ్నలు' },
  faqs: [
    {
      en: {
        q: 'Who is M.C. Vijayanandha Reddy (VNR)?',
        a: 'M. C. Vijayanandha Reddy (born July 24, 1969), popularly known as VNR, is an Indian politician from Andhra Pradesh. He is currently serving as the in-charge of the Chittoor Assembly constituency in Andhra Pradesh and is a close political ally of Y. S. Jagan Mohan Reddy. He is noted for his various philanthropic acts and community service. The YSRCP nominated him as its candidate for Chittoor in the 2024 AP elections.',
      },
      te: {
        q: 'ఎం.సి. విజయానంధ రెడ్డి (VNR) ఎవరు?',
        a: 'ఎం. సి. విజయానంధ రెడ్డి (జననం: జూలై 24, 1969), VNR అనే పేరుతో ప్రసిద్ధి, ఆంధ్రప్రదేశ్‌కు చెందిన భారతీయ రాజకీయ నాయకుడు. ప్రస్తుతం చిత్తూరు అసెంబ్లీ నియోజకవర్గ ఇన్‌చార్జ్‌గా పని చేస్తున్నారు. వైఎస్ జగన్ మోహన్ రెడ్డి సన్నిహిత రాజకీయ మిత్రుడు. దాతృత్వం మరియు సామాజిక సేవకు ప్రసిద్ధి.',
      },
    },
    {
      en: {
        q: 'What constituency does VNR represent?',
        a: 'M.C. Vijayanandha Reddy is the in-charge of Chittoor Assembly Constituency in Chittoor District, Andhra Pradesh, and was the YSRCP candidate for Chittoor in the 2024 elections.',
      },
      te: {
        q: 'VNR ఏ నియోజకవర్గానికి ప్రతినిధిగా ఉన్నారు?',
        a: 'ఎం.సి. విజయానంధ రెడ్డి ఆంధ్రప్రదేశ్‌లోని చిత్తూరు జిల్లా, చిత్తూరు అసెంబ్లీ నియోజకవర్గ ఇన్‌చార్జ్ మరియు 2024 ఎన్నికలలో వైఎస్సార్సీపీ అభ్యర్థి.',
      },
    },
    {
      en: {
        q: 'What are VNR\'s notable philanthropic activities?',
        a: 'VNR is known for running Jagananna Canteens (600 free meals daily for over a year), providing COVID-19 relief (3,000 meals/day), paying Crores from his own pocket to waive market gate fees for 3 years, distributing 100 push carts (₹60 lakh), providing uniforms to 3,500 drivers, establishing 15 free mineral water plants, and offering free funeral services (Maha Prasthanam).',
      },
      te: {
        q: 'VNR యొక్క ప్రముఖ దాతృత్వ కార్యక్రమాలు ఏమిటి?',
        a: 'జగనన్న క్యాంటీన్లు (రోజుకు 600 ఉచిత భోజనాలు, ఏడాదిపైగా), కోవిడ్-19 సహాయం (రోజుకు 3,000 భోజనాలు), మార్కెట్ గేట్ ఫీజు మాఫీ కోసం 3 సంవత్సరాలు స్వంత నిధులతో కోట్ల రూపాయలు చెల్లించడం, 100 పుష్ కార్ట్‌లు (₹60 లక్షలు), 3,500 డ్రైవర్లకు యూనిఫాంలు, 15 ఉచిత మినరల్ వాటర్ ప్లాంట్లు, ఉచిత అంత్యక్రియల సేవలు (మహా ప్రస్థానం) వంటి కార్యక్రమాలకు ప్రసిద్ధి.',
      },
    },
    {
      en: {
        q: 'What is APSRTC and what was VNR\'s role?',
        a: 'APSRTC is the Andhra Pradesh State Road Transport Corporation, the state-owned public bus service. M.C. Vijayanandha Reddy served as its Vice Chairman from October 2021 to 2024, succeeding P.S. Munirathnam, under Chief Minister Y. S. Jagan Mohan Reddy.',
      },
      te: {
        q: 'ఎపిఎస్ఆర్టిసిలో VNR పాత్ర ఏమిటి?',
        a: 'ఎపిఎస్ఆర్టిసి ఆంధ్రప్రదేశ్ స్టేట్ రోడ్ ట్రాన్స్‌పోర్ట్ కార్పొరేషన్. ఎం.సి. విజయానంధ రెడ్డి ముఖ్యమంత్రి వై.ఎస్. జగన్ మోహన్ రెడ్డి ఆధ్వర్యంలో అక్టోబర్ 2021 నుండి 2024 వరకు వైస్ చైర్మన్‌గా సేవ చేశారు, పి.ఎస్. మునిరత్నం తరువాత ఈ పదవిని చేపట్టారు.',
      },
    },
    {
      en: {
        q: 'What is Smart DV Technologies?',
        a: 'Smart DV Technologies is a software company that M.C. Vijayanandha Reddy played a crucial role in establishing. It is known for being among the first IT companies to establish operations in a rural area of India, with the aim of providing employment opportunities for unemployed graduates in rural regions.',
      },
      te: {
        q: 'స్మార్ట్ DV టెక్నాలజీస్ అంటే ఏమిటి?',
        a: 'స్మార్ట్ DV టెక్నాలజీస్ ఎం.సి. విజయానంధ రెడ్డి స్థాపనలో కీలక పాత్ర పోషించిన సాఫ్ట్‌వేర్ కంపెనీ. భారతదేశంలో గ్రామీణ ప్రాంతంలో కార్యకలాపాలు ప్రారంభించిన మొదటి ఐటీ కంపెనీలలో ఒకటిగా ప్రసిద్ధి, గ్రామీణ ప్రాంతాల్లో నిరుద్యోగ గ్రాడ్యుయేట్లకు ఉద్యోగ అవకాశాలు కల్పించడం దీని లక్ష్యం.',
      },
    },
  ],
};

// ── PHILANTHROPY SECTION DATA (EN + TE) ──────────────────────────────────────
const PHILANTHROPY = {
  sectionTitle: {
    en: 'Philanthropic & Charity Activities',
    te: 'దాతృత్వ & సేవా కార్యక్రమాలు',
  },
  sectionTag: { en: 'Community Service', te: 'సామాజిక సేవ' },
  items: [
    {
      icon: '🍽️',
      en: {
        title: 'Jagananna Canteens',
        desc: 'With the resolve to provide a full meal to every poor person, he started Jagananna Canteens in the constituency, providing free meal facility to 600 people every day for more than a year.',
      },
      te: {
        title: 'జగనన్న క్యాంటీన్లు',
        desc: 'ప్రతి పేద వ్యక్తికి పూర్తి భోజనం అందించాలనే సంకల్పంతో, నియోజకవర్గంలో జగనన్న క్యాంటీన్లను ప్రారంభించి, ఏడాదికి పైగా రోజూ 600 మందికి ఉచిత భోజన సదుపాయం కల్పించారు.',
      },
    },
    {
      icon: '🏥',
      en: {
        title: 'COVID-19 Crisis Relief',
        desc: 'During the COVID-19 pandemic, he provided meals for 3,000 people every day and distributed essential groceries free of cost to families who were struggling. He also provided fans and beds free of cost to the quarantine ward in Chittoor Government Hospital.',
      },
      te: {
        title: 'కోవిడ్-19 సంక్షోభ సహాయం',
        desc: 'కోవిడ్-19 మహమ్మారి సమయంలో, రోజుకు 3,000 మందికి భోజనం అందించారు మరియు ఇబ్బంది పడుతున్న కుటుంబాలకు అవసరమైన కిరాణ సామగ్రిని ఉచితంగా పంపిణీ చేశారు. చిత్తూరు ప్రభుత్వ ఆసుపత్రిలో క్వారంటైన్ వార్డుకు ఫ్యాన్‌లు మరియు మంచాలు ఉచితంగా అందించారు.',
      },
    },
    {
      icon: '🏪',
      en: {
        title: 'Municipal Market Gate Fee Waiver',
        desc: 'As a farmer\'s son who understands the hardship of laborers, he paid Crores of rupees from his own funds for a period of three years to stop the collection of the market gate fee from street vendors, market traders, and transport vehicles in Chittoor constituency.',
      },
      te: {
        title: 'మున్సిపల్ మార్కెట్ గేట్ ఫీజు మాఫీ',
        desc: 'కూలీల కష్టాలను అర్థం చేసుకున్న రైతు కుమారుడిగా, చిత్తూరు నియోజకవర్గంలో వీధి వ్యాపారులు, మార్కెట్ వ్యాపారులు మరియు రవాణా వాహనాల నుండి మార్కెట్ గేట్ ఫీజు వసూలును ఆపడానికి మూడు సంవత్సరాల పాటు తన స్వంత నిధుల నుండి కోట్ల రూపాయలు చెల్లించారు.',
      },
    },
    {
      icon: '🛒',
      en: {
        title: 'Push Carts for Vendors',
        desc: 'Seeing the hardship of small traders, he spent nearly ₹60 lakh and distributed 100 push carts to vendors who were currently unable to buy new carts.',
      },
      te: {
        title: 'వ్యాపారులకు పుష్ కార్ట్‌లు',
        desc: 'చిన్న వ్యాపారుల కష్టాలను చూసి, సుమారు ₹60 లక్షలు ఖర్చు చేసి, కొత్త బండ్లు కొనలేని 100 మంది వ్యాపారులకు పుష్ కార్ట్‌లను పంపిణీ చేశారు.',
      },
    },
    {
      icon: '👔',
      en: {
        title: 'Uniforms for Drivers',
        desc: 'Being someone who started his life as a driver and understands the hardship of that profession, he provided 4 sets of uniforms along with a tailoring allowance of ₹1,000 for stitching costs, using his own funds, to nearly 3,500 auto drivers and lorry drivers in the Chittoor constituency.',
      },
      te: {
        title: 'డ్రైవర్లకు యూనిఫాంలు',
        desc: 'డ్రైవర్‌గా జీవితాన్ని ప్రారంభించి ఆ వృత్తి కష్టాలను అర్థం చేసుకున్న వ్యక్తిగా, చిత్తూరు నియోజకవర్గంలోని సుమారు 3,500 ఆటో డ్రైవర్లు మరియు లారీ డ్రైవర్లకు తన స్వంత నిధులతో 4 జతల యూనిఫాంలతో పాటు కుట్టు ఖర్చుల కోసం ₹1,000 భత్యం అందించారు.',
      },
    },
    {
      icon: '💧',
      en: {
        title: 'Free Mineral Water Plants',
        desc: 'With the resolve to provide safe drinking water to the people, a total of 15 mineral water plants have been established in the municipality of the Chittoor constituency.',
      },
      te: {
        title: 'ఉచిత మినరల్ వాటర్ ప్లాంట్లు',
        desc: 'ప్రజలకు సురక్షితమైన తాగునీరు అందించాలనే సంకల్పంతో, చిత్తూరు నియోజకవర్గ మున్సిపాలిటీలో మొత్తం 15 మినరల్ వాటర్ ప్లాంట్లు ఏర్పాటు చేయబడ్డాయి.',
      },
    },
    {
      icon: '🕊️',
      en: {
        title: 'Free Funeral Services (Maha Prasthanam)',
        desc: 'With the intention that every person\'s final journey should be conducted with dignity, "Maha Prasthanam" vehicles (Hearse/Mortuary Van) have been made available for free. Two vehicles were provided in Chittoor Rural and Gudipala Mandals, and two vehicles plus four freezer boxes were set up in Chittoor city — all offered free of cost.',
      },
      te: {
        title: 'ఉచిత అంత్యక్రియల సేవలు (మహా ప్రస్థానం)',
        desc: 'ప్రతి వ్యక్తి చివరి ప్రయాణం గౌరవంగా జరగాలనే ఉద్దేశ్యంతో, "మహా ప్రస్థానం" వాహనాలు (శవ వాహనం) ఉచితంగా అందుబాటులో ఉంచారు. చిత్తూరు రూరల్ మరియు గుడిపాల మండలాల్లో రెండు వాహనాలు, చిత్తూరు నగరంలో రెండు వాహనాలు మరియు నాలుగు ఫ్రీజర్ బాక్సులు — అన్నీ ఉచితంగా అందించబడ్డాయి.',
      },
    },
  ],
};

interface CenterColumnProps {
  activeTab: string;
}

export const CenterColumn: React.FC<CenterColumnProps> = ({ activeTab }) => {
  const { lang } = useLang();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedNewsIdx, setSelectedNewsIdx] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const selectedNews = selectedNewsIdx !== null ? t.news.items[selectedNewsIdx] : null;

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-3.5 w-full">

      {/* ─── ABOUT / BIOGRAPHY TAB ─── */}
      {activeTab === 'aboutLeader' && (
        <article id="about" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          {/* Section header */}
          <header className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
            <h2 className="m-0">{BIO.sectionTitle[lang]}</h2>
            <span className="text-[10px] bg-white/20 text-white font-normal px-2 py-0.5 rounded-xs">
              {BIO.sectionTag[lang]}
            </span>
          </header>

          <div className="p-3.5 sm:p-4">
            {/* Intro paragraph */}
            <p className="text-xs sm:text-[13px] leading-relaxed text-[#444] mb-4 font-medium border-l-4 border-[#0B8F45] pl-3 italic">
              {BIO.intro[lang]}
            </p>

            {/* Structured sub-sections */}
            {BIO.sections.map((section, si) => (
              <section key={si} className="mb-4">
                <h3 className="text-[12px] sm:text-[13px] font-extrabold text-[#0E4FAE] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span className="w-3 h-0.5 bg-[#0B8F45] inline-block rounded-full" />
                  {section.heading[lang]}
                </h3>
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-xs sm:text-[13px] leading-relaxed text-[#333] mb-2 last:mb-0">
                    {p[lang]}
                  </p>
                ))}
              </section>
            ))}

            {/* Key Highlights strip */}
            <div className="mt-4 border-t border-[#E3E3E3] pt-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                {lang === 'en' ? 'Key Highlights' : 'ముఖ్య విశేషాలు'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {BIO.highlights.map((h, i) => (
                  <div key={i} className="bg-[#f8f9fa] border border-[#E3E3E3] p-2.5 flex items-start gap-2">
                    <span className="text-xl leading-none">{h.icon}</span>
                    <div>
                      <div className="text-[12px] font-extrabold text-[#0E4FAE] leading-tight">{h[lang].label}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{h[lang].sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="mt-4 border-t border-[#E3E3E3] pt-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                {BIO.faqTitle[lang]}
              </div>
              <div className="border border-[#E3E3E3] divide-y divide-[#E3E3E3]">
                {BIO.faqs.map((faq, fi) => (
                  <div key={fi}>
                    <button
                      onClick={() => setOpenFaq(openFaq === fi ? null : fi)}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-[#111] flex items-center justify-between hover:bg-blue-50/40 transition-colors"
                      aria-expanded={openFaq === fi}
                    >
                      <span>{faq[lang].q}</span>
                      <span className="text-[#0E4FAE] ml-2 flex-shrink-0 text-base leading-none">
                        {openFaq === fi ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === fi && (
                      <div className="px-3 pb-3 pt-1 text-xs text-[#555] leading-relaxed bg-blue-50/30">
                        {faq[lang].a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ─── POLITICAL CAREER TIMELINE TAB ─── */}
      {activeTab === 'politicalCareer' && (
        <div id="career" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          <header className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide">
            {tx(t.career.sectionTitle, lang)}
          </header>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.career.items.map((item, index) => {
              const years = ['2024', '2021–2024', '2014 & 2019', '2012', '2011', '2010', lang === 'en' ? 'Legacy' : 'వారసత్వం'];
              
              // Map images for visual representation
              const milestoneImages = [vijya2, vijya3, vijya1, vijya2, vijya3, vijya2, vijya1];
              const milestoneImage = milestoneImages[index];

              return (
                <div
                  key={index}
                  className="timeline-card bg-[#fcfcfc] border border-[#E3E3E3] transition-all duration-200 hover:shadow-md hover:border-[#0E4FAE] flex flex-col overflow-hidden"
                >
                  {/* Top Image (Big & Premium) */}
                  <div className="h-44 bg-slate-900 overflow-hidden relative flex-shrink-0">
                    <img 
                      src={milestoneImage} 
                      alt={item[lang].title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/vijya2.jpeg'; }}
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#0E4FAE] text-white text-[10px] font-extrabold px-2.5 py-1 shadow-md uppercase tracking-wider">
                      {years[index]}
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[9px] bg-emerald-50 text-[#0B8F45] border border-emerald-200 px-2 py-0.5 font-bold uppercase tracking-wider">
                          {lang === 'en' ? 'Political Milestone' : 'రాజకీయ మైలురాయి'}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-xs sm:text-[13px] text-[#111111] mb-2 leading-snug hover:text-[#0E4FAE] transition-colors">
                        {item[lang].title}
                      </h3>
                      <p className="text-[11px] text-[#555555] leading-relaxed">
                        {item[lang].desc}
                      </p>
                    </div>
                    <div className="text-[9px] text-gray-400 text-right border-t border-gray-100 pt-2 mt-3">
                      YSRCP Chittoor
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── PHILANTHROPIC ACTIVITIES TAB ─── */}
      {activeTab === 'philanthropy' && (
        <div id="philanthropy" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          <header className="section-title bg-[#0B8F45] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
            <span>{PHILANTHROPY.sectionTitle[lang]}</span>
            <span className="text-[10px] bg-white/20 text-white font-normal px-2 py-0.5 rounded-xs">
              {PHILANTHROPY.sectionTag[lang]}
            </span>
          </header>
          <div className="p-3.5 space-y-3">
            {PHILANTHROPY.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9f9] border border-[#E3E3E3] border-l-4 border-l-[#0B8F45] p-3 transition-colors hover:bg-emerald-50/40 flex items-start gap-3"
              >
                <span className="text-2xl leading-none flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#111] mb-1">{item[lang].title}</h4>
                  <p className="text-xs text-[#555] leading-relaxed">{item[lang].desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── CHITTOOR CONSTITUENCY PORTAL TAB ─── */}
      {activeTab === 'constituency' && (
        <div id="constituency-portal" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          <header className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide">
            {lang === 'en' ? 'Chittoor Assembly Constituency Portal' : 'చిత్తూరు అసెంబ్లీ నియోజకవర్గ సమాచారం'}
          </header>
          <div className="p-4 space-y-4">
            <div className="bg-[#f4f7fc] border border-[#d1e0f7] p-3.5 border-l-4 border-l-[#0E4FAE]">
              <h3 className="font-bold text-sm text-[#0E4FAE] mb-1">
                {lang === 'en' ? 'Constituency Overview' : 'నియోజకవర్గ అవలోకనం'}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                {lang === 'en'
                  ? 'Chittoor Assembly Constituency is one of the most prominent constituencies in Andhra Pradesh, located in the southern-most district of Chittoor. The constituency encompasses a rich agricultural base as well as expanding industrial & commercial zones.'
                  : 'చిత్తూరు అసెంబ్లీ నియోజకవర్గం ఆంధ్రప్రదేశ్‌లో అత్యంత ప్రముఖమైన స్థానాలలో ఒకటి. ఈ నియోజకవర్గం సుసంపన్నమైన వ్యవసాయ రంగంతో పాటు శీఘ్రంగా విస్తరిస్తున్న పారిశ్రామిక మరియు వాణిజ్య రంగాన్ని కలిగి ఉంది.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: { en: 'Chittoor Town', te: 'చిత్తూరు టౌన్' }, desc: { en: 'The municipal headquarters and economic core of the district.', te: 'మున్సిపల్ ప్రధాన కార్యాలయం మరియు వాణిజ్య కేంద్రం.' } },
                { title: { en: 'Chittoor Rural', te: 'చిత్తూరు రూరల్' }, desc: { en: 'Farming belts focused on mango pulp, milk production, and crops.', te: 'మామిడి గుజ్జు, పాల ఉత్పత్తి మరియు పంటల సాగు ప్రాధాన్యం.' } },
                { title: { en: 'Gudipala Mandal', te: 'గుడిపాల మండలం' }, desc: { en: 'Border mandal bridging trade routes and rural livelihoods.', te: 'వ్యాపార మార్గాలు మరియు గ్రామీణ జీవనోపాధిని కలిపే సరిహద్దు మండలం.' } },
              ].map((mandal, idx) => (
                <div key={idx} className="border border-[#E3E3E3] p-3 bg-[#fafafa]">
                  <h4 className="font-bold text-xs text-[#0B8F45] mb-1">📍 {mandal.title[lang]}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{mandal.desc[lang]}</p>
                </div>
              ))}
            </div>

            {/* Smart DV Technologies Showcase */}
            <div className="border border-[#E3E3E3] p-3.5 bg-[#fcfcfc] rounded-xs">
              <h3 className="font-bold text-xs sm:text-sm text-[#0B8F45] mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <span>💻</span>
                <span>{lang === 'en' ? 'Rural IT Empowerment (Smart DV Technologies)' : 'గ్రామీణ ఐటీ ఉపాధి (స్మార్ట్ DV టెక్నాలజీస్)'}</span>
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                {lang === 'en'
                  ? 'VNR played a key role in bringing Smart DV Technologies to the rural sector, making it one of the first software firms to operate in a rural environment in India. This initiative provides local employment, ensuring that young rural graduates do not have to migrate to Tier-1 cities for quality software careers.'
                  : 'గ్రామీణ నిరుద్యోగ గ్రాడ్యుయేట్లకు ఉపాధి కల్పించడమే ధ్యేయంగా, భారతదేశంలోనే మొట్టమొదటి సారిగా ఒక సాఫ్ట్‌వేర్ సంస్థను గ్రామీణ ప్రాంతంలో స్థాపించడంలో VNR కీలక పాత్ర పోషించారు.'}
              </p>
              <div className="inline-block bg-emerald-50 text-[#0B8F45] text-[10px] font-extrabold px-2 py-0.5 border border-emerald-200">
                {lang === 'en' ? 'Rural Employment Initiative' : 'గ్రామీణ ఉపాధి పథకం'}
              </div>
            </div>

            {/* Development Priorities */}
            <div>
              <h3 className="font-bold text-xs sm:text-sm text-[#0E4FAE] mb-2 uppercase tracking-wider">
                {lang === 'en' ? 'Development Priorities' : 'అభివృద్ధి ప్రాధాన్యతలు'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <li className="p-2 border border-gray-100 bg-[#f9f9f9] flex items-center gap-2">
                  <span className="text-[#0E4FAE] font-bold">✓</span>
                  <span>{lang === 'en' ? 'Infrastructure & Road Connectivity' : 'మౌలిక వసతులు & రహదారుల అనుసంధానం'}</span>
                </li>
                <li className="p-2 border border-gray-100 bg-[#f9f9f9] flex items-center gap-2">
                  <span className="text-[#0E4FAE] font-bold">✓</span>
                  <span>{lang === 'en' ? '100% Welfare Scheme Penetration' : '100% సంక్షేమ పథకాల లబ్ధి చేకూర్చడం'}</span>
                </li>
                <li className="p-2 border border-gray-100 bg-[#f9f9f9] flex items-center gap-2">
                  <span className="text-[#0E4FAE] font-bold">✓</span>
                  <span>{lang === 'en' ? 'Safe Drinking Water Access' : 'రక్షిత తాగునీటి సరఫరా'}</span>
                </li>
                <li className="p-2 border border-gray-100 bg-[#f9f9f9] flex items-center gap-2">
                  <span className="text-[#0E4FAE] font-bold">✓</span>
                  <span>{lang === 'en' ? 'Agro-Industrial Mango Processing Parks' : 'మామిడి రైతుల కోసం ప్రత్యేక పరిశ్రమల పార్కులు'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ─── YSR WELFARE SCHEMES TAB ─── */}
      {activeTab === 'ysrSchemes' && (
        <div id="welfare-schemes" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          <header className="section-title bg-[#0B8F45] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide">
            {tx(t.schemes.header, lang)}
          </header>
          <div className="p-4 space-y-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              {lang === 'en'
                ? 'Under the leadership of Chief Minister Y.S. Jagan Mohan Reddy and the active grassroots coordination of VNR, the YSR Congress Party government has delivered historic welfare support. Here are the core schemes:'
                : 'ముఖ్యమంత్రి వై.ఎస్. జగన్ మోహన్ రెడ్డి గారి నాయకత్వంలో మరియు VNR గారి ఆద్వర్యంలో నియోజకవర్గంలో విజయవంతంగా అమలవుతున్న వైఎస్ సంక్షేమ పథకాలు:'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.schemes.items.map((scheme, idx) => {
                // Alternating banner images for schemes to create premium view
                const schemeImages = [GALLERY_PHOTOS[0].imageUrl, GALLERY_PHOTOS[1].imageUrl, GALLERY_PHOTOS[2].imageUrl, GALLERY_PHOTOS[3].imageUrl];
                const bannerImage = schemeImages[idx % schemeImages.length];

                return (
                  <div key={idx} className="border border-[#E3E3E3] bg-[#fafafa] flex flex-col hover:border-[#0B8F45] transition-all duration-200">
                    <div className="h-32 bg-slate-900 overflow-hidden relative">
                      <img src={bannerImage} alt={scheme[lang].label} className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-2.5">
                        <span className="text-white text-lg leading-none mr-2 bg-white/20 p-1 rounded-sm">{scheme.icon}</span>
                        <h3 className="font-extrabold text-sm text-white drop-shadow-md">
                          {scheme[lang].label}
                        </h3>
                      </div>
                    </div>
                    <div className="p-3 flex-1 flex flex-col justify-between">
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">
                        {scheme[lang].desc}
                      </p>
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-emerald-700 font-extrabold uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {lang === 'en' ? 'Active Scheme' : 'అమలులో ఉంది'}
                        </span>
                        <span className="text-gray-400">YSRCP Chittoor</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── PHOTO GALLERY TAB ─── */}
      {activeTab === 'photoGallery' && (
        <div id="gallery" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          <header className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
            <span>{tx(t.gallery.sectionTitle, lang)}</span>
            <span className="text-[10px] text-white/80 font-normal">{tx(t.gallery.clickHint, lang)}</span>
          </header>
          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group border border-[#E3E3E3] bg-[#f9f9f9] overflow-hidden cursor-pointer hover:border-[#0E4FAE] transition-all rounded-xs flex flex-col"
              >
                <div className="relative h-56 sm:h-64 bg-slate-900 overflow-hidden flex items-center justify-center p-1.5">
                  <img
                    src={photo.imageUrl}
                    alt={t.gallery.photos[idx]?.[lang] ?? photo.label}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-103"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/vijya2.jpeg'; }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#0E4FAE] text-xs font-bold px-3 py-1.5 rounded-xs shadow-lg flex items-center gap-1.5">
                      <span>🔍</span>
                      <span>{lang === 'en' ? 'View Full Photo' : 'పూర్తి ఫోటో చూడండి'}</span>
                    </span>
                  </div>
                </div>
                <div className="p-2.5 bg-[#f8f9fa] text-xs text-[#333] font-bold border-t border-[#E3E3E3] flex justify-between items-center">
                  <span className="truncate">{t.gallery.photos[idx]?.[lang] ?? photo.label}</span>
                  <span className="text-[10px] text-[#0B8F45] font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 flex-shrink-0 ml-2">
                    {photo.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── VIDEOS (YOUTUBE) TAB ─── */}
      {activeTab === 'videosMedia' && (
        <div id="videos" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          <header className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-extrabold text-sm">▶</span>
              <span>{tx(t.videos.sectionTitle, lang)}</span>
            </div>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] bg-red-600 hover:bg-red-700 text-white font-bold px-2 py-0.5 rounded-xs tracking-wider transition-colors"
            >
              {tx(t.videos.subscribeBtn, lang)}
            </a>
          </header>

          <div className="p-3 space-y-3">
            {/* Featured Video (Top / Main) */}
            {YOUTUBE_VIDEOS[0] && (
              <div className="border border-[#E3E3E3] bg-[#f9f9f9] overflow-hidden group hover:border-[#0E4FAE] transition-all">
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={YOUTUBE_VIDEOS[0].embedUrl}
                    title={YOUTUBE_VIDEOS[0].title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#E3E3E3]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-xs uppercase">
                        Featured Interview
                      </span>
                      <span className="text-[11px] text-gray-500 font-semibold">{YOUTUBE_VIDEOS[0].date}</span>
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#111] leading-snug">
                      {lang === 'en' ? YOUTUBE_VIDEOS[0].title : YOUTUBE_VIDEOS[0].titleTe}
                    </h3>
                  </div>
                  <a
                    href={YOUTUBE_VIDEOS[0].videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 bg-[#0E4FAE] hover:bg-[#0a3d8a] text-white text-xs font-bold px-3 py-1.5 rounded-xs transition-colors text-center"
                  >
                    Watch on YouTube ↗
                  </a>
                </div>
              </div>
            )}

            {/* Secondary Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {YOUTUBE_VIDEOS.slice(1).map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group border border-[#E3E3E3] bg-[#f9f9f9] overflow-hidden cursor-pointer hover:border-[#0E4FAE] transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={video.thumbnailUrl}
                      alt={lang === 'en' ? video.title : video.titleTe}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/vijya2.jpeg'; }}
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                      <div className="w-9 h-9 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <span className="text-xs ml-0.5">▶</span>
                      </div>
                    </div>
                    <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-2.5 flex-1 flex flex-col justify-between bg-white">
                    <h4 className="font-bold text-xs text-[#222] leading-snug line-clamp-2 group-hover:text-[#0E4FAE] transition-colors mb-1.5">
                      {lang === 'en' ? video.title : video.titleTe}
                    </h4>
                    <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium">
                      <span>{video.date}</span>
                      <span className="text-[#0B8F45] font-bold">👁 {video.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── RECENT NEWS TAB ─── */}
      {activeTab === 'inTheNews' && (
        <div id="news" className="widget-box bg-white border border-[#E3E3E3] shadow-xs">
          <header className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
            <span>{tx(t.news.sectionTitle, lang)}</span>
            <span className="text-[10px] text-white/80 font-normal">{tx(t.news.sectionTag, lang)}</span>
          </header>
          <div className="divide-y divide-[#E3E3E3]">
            {t.news.items.map((item, idx) => (
              <div key={idx} className="news-list-item news-item p-3 flex gap-3 items-start hover:bg-blue-50/30 transition-colors">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-900 overflow-hidden flex items-center justify-center flex-shrink-0 border border-[#E3E3E3] rounded-xs p-0.5">
                  <img
                    src={GALLERY_PHOTOS[idx % GALLERY_PHOTOS.length].imageUrl}
                    alt={item[lang].headline}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/vijya2.jpeg'; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="news-title font-bold text-xs sm:text-[13px] text-[#222222] leading-snug mb-1 hover:text-[#0E4FAE]">
                    {item[lang].headline}
                  </h4>
                  <div className="text-[11px] text-[#888888] mb-1">
                    <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-xs text-[10px] font-semibold border border-gray-200">
                      {item[lang].category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedNewsIdx(idx)}
                    className="read-more text-[#0E4FAE] text-[11px] font-bold hover:underline cursor-pointer"
                  >
                    {tx(t.news.readMore, lang)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── YOUTUBE VIDEO PLAYER MODAL ─── */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-xs max-w-2xl w-full overflow-hidden border-2 border-[#0E4FAE] shadow-2xl">
            <div className="bg-[#0E4FAE] text-white p-3 flex items-center justify-between font-bold text-xs">
              <span className="truncate pr-2">{lang === 'en' ? selectedVideo.title : selectedVideo.titleTe}</span>
              <button onClick={() => setSelectedVideo(null)} className="text-white hover:text-red-200 text-base font-black px-2 flex-shrink-0" aria-label="Close">✕</button>
            </div>
            <div className="p-2 bg-black aspect-video flex items-center justify-center">
              <iframe
                src={`${selectedVideo.embedUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-3 bg-gray-100 text-xs text-gray-700 flex justify-between items-center border-t border-gray-200">
              <div>
                <span className="font-bold text-gray-900">{selectedVideo.views}</span>
                <span className="mx-1 text-gray-400">•</span>
                <span>{selectedVideo.date}</span>
              </div>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-xs transition-colors"
              >
                {tx(t.videos.subscribeBtn, lang)}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ─── PHOTO LIGHTBOX MODAL ─── */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-xs max-w-2xl w-full overflow-hidden border-2 border-[#0E4FAE] shadow-2xl">
            <div className="bg-[#0E4FAE] text-white p-3 flex items-center justify-between font-bold text-xs">
              <span>{selectedPhoto.label}</span>
              <button onClick={() => setSelectedPhoto(null)} className="text-white hover:text-red-200 text-base font-black px-2" aria-label="Close">✕</button>
            </div>
            <div className="p-3 bg-slate-950 flex items-center justify-center max-h-[75vh]">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.label}
                className="max-h-[70vh] w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).src = '/vijya2.jpeg'; }}
              />
            </div>
            <div className="p-3 bg-gray-100 text-xs text-gray-700 flex justify-between items-center border-t border-gray-200">
              <span className="font-semibold">{selectedPhoto.label} ({selectedPhoto.date})</span>
              <button onClick={() => setSelectedPhoto(null)} className="bg-[#0E4FAE] text-white text-xs font-bold px-3 py-1 rounded-xs">
                {lang === 'en' ? 'Close' : 'మూసిвеయి'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── NEWS STORY MODAL ─── */}
      {selectedNews && selectedNewsIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-white rounded-xs max-w-lg w-full overflow-hidden border-2 border-[#0E4FAE] shadow-2xl">
            <div className="bg-[#0E4FAE] text-white p-3 flex items-center justify-between font-bold text-xs">
              <span>{lang === 'en' ? 'YSRCP News Story' : 'వైఎస్సార్సీపీ వార్త'}</span>
              <button onClick={() => setSelectedNewsIdx(null)} className="text-white hover:text-red-200 text-base font-black px-2" aria-label="Close">✕</button>
            </div>
            <div className="p-4 space-y-3">
              <span className="bg-[#0B8F45] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase">
                {selectedNews[lang].category}
              </span>
              <h3 className="text-sm font-bold text-gray-900 leading-snug">{selectedNews[lang].headline}</h3>
              <div className="h-56 bg-slate-900 overflow-hidden flex items-center justify-center p-1.5 border border-gray-300 rounded-xs">
                <img
                  src={GALLERY_PHOTOS[selectedNewsIdx % GALLERY_PHOTOS.length].imageUrl}
                  alt={selectedNews[lang].headline}
                  className="w-full h-full object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/vijya2.jpeg'; }}
                />
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">{selectedNews[lang].summary}</p>
            </div>
            <div className="p-3 bg-gray-100 text-right border-t border-gray-200">
              <button onClick={() => setSelectedNewsIdx(null)} className="bg-[#0E4FAE] text-white text-xs font-bold px-4 py-1.5 rounded-xs">
                {lang === 'en' ? 'Close' : 'మూసివేయి'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
