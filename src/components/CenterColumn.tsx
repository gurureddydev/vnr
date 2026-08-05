import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto, YOUTUBE_VIDEOS, YouTubeVideo, SOCIAL_LINKS } from '../data/profileData';
import { useLang } from '../context/LanguageContext';
import { t, tx } from '../data/translations';

// ── FULL BIOGRAPHY DATA (EN + TE) ────────────────────────────────────────────
const BIO = {
  sectionTitle: {
    en: 'About M.C. Vijayananda Reddy',
    te: 'ఎం.సి. విజయానంద రెడ్డి గురించి',
  },
  sectionTag: { en: 'Official Biography', te: 'అధికారిక జీవిత చరిత్ర' },

  intro: {
    en: 'M.C. Vijayananda Reddy is a senior public servant, political leader, and community organiser from Chittoor district, Andhra Pradesh. Over more than two decades of dedicated service, he has earned a reputation as a grounded, people-first leader — one who brings genuine concern for citizen welfare together with practical administrative experience.',
    te: 'ఎం.సి. విజయానంద రెడ్డి ఆంధ్రప్రదేశ్‌లోని చిత్తూరు జిల్లాకు చెందిన సీనియర్ ప్రజా సేవకుడు, రాజకీయ నాయకుడు మరియు సమాజ నిర్వాహకుడు. రెండు దశాబ్దాలకు పైగా సేవతో, ప్రజలకు నిజమైన చింత మరియు ఆచరణాత్మక పరిపాలనా అనుభవాన్ని కలిపే నాయకుడిగా గుర్తింపు పొందారు.',
  },

  sections: [
    {
      heading: { en: 'Early Life & Roots', te: 'పూర్వ జీవితం & మూలాలు' },
      paragraphs: [
        {
          en: 'Born in the village of Kothapallemitta in Chittoor district, M.C. Vijayananda Reddy grew up in a family deeply rooted in agriculture and local community life. From an early age, he witnessed the everyday challenges faced by farming families, agricultural labourers, and small-town residents — and those early experiences shaped his abiding sense of public responsibility.',
          te: 'చిత్తూరు జిల్లాలోని కొత్తపల్లెమిట్ట గ్రామంలో జన్మించిన ఎం.సి. విజయానంద రెడ్డి, వ్యవసాయం మరియు స్థానిక సమాజ జీవనంలో లోతుగా మూలాలు నాటిన కుటుంబంలో పెరిగారు. చిన్నతనం నుండే వ్యవసాయ కుటుంబాలు, వ్యవసాయ కూలీలు మరియు చిన్న పట్టణ నివాసుల సవాళ్ళను చూశారు — ఆ ప్రారంభ అనుభవాలు ప్రజా బాధ్యత పట్ల స్థిరమైన భావాన్ని రూపొందించాయి.',
        },
        {
          en: 'His family background instilled the values of hard work, integrity, and service to others — not as abstract principles, but as lived realities drawn from the land and the people of Chittoor district, values that would define his public life for decades to come.',
          te: 'అతని కుటుంబ నేపథ్యం కఠినంగా పని చేయడం, నిజాయితీ మరియు ఇతరులకు సేవ చేయడం వంటి విలువలను నేర్పింది — అమూర్త సూత్రాలు కాదు, చిత్తూరు జిల్లా భూమి మరియు ప్రజల నుండి తీసుకున్న జీవిత వాస్తవాలు.',
        },
      ],
    },
    {
      heading: { en: 'Professional Background', te: 'వృత్తిపరమైన నేపథ్యం' },
      paragraphs: [
        {
          en: 'Before entering full-time public life, Vijayananda Reddy built a successful business career in the Chittoor region. This gave him a direct understanding of local economic conditions, the challenges of self-employment, and the real needs of small traders, entrepreneurs, and the working population across the district.',
          te: 'పూర్తికాల ప్రజా జీవితంలోకి ప్రవేశించే ముందు, విజయానంద రెడ్డి చిత్తూరు ప్రాంతంలో విజయవంతమైన వ్యాపార వృత్తిని నిర్మించారు. ఇది స్థానిక ఆర్థిక పరిస్థితులు, స్వయం ఉపాధి సవాళ్ళు మరియు జిల్లా అంతటా చిన్న వ్యాపారులు, వ్యవస్థాపకులు మరియు శ్రామిక జనాభా అసలు అవసరాలను నేరుగా అర్థం చేసుకోవడానికి సహాయపడింది.',
        },
        {
          en: 'This professional grounding gave him a perspective rarely found in political life — the ability to evaluate policy through its actual impact on ordinary families. It formed the practical foundation for everything he would later accomplish in public administration and constituency governance.',
          te: 'ఈ వృత్తిపరమైన అనుభవం అతనికి రాజకీయ జీవితంలో అరుదుగా కనిపించే దృక్పథాన్ని ఇచ్చింది — సాధారణ కుటుంబాలపై నిజమైన ప్రభావం ద్వారా విధానాన్ని మూల్యాంకనం చేయగల సామర్థ్యం.',
        },
      ],
    },
    {
      heading: { en: 'Political Journey', te: 'రాజకీయ ప్రయాణం' },
      paragraphs: [
        {
          en: "Inspired by the people-centric governance model of the late Dr. Y.S. Rajasekhara Reddy and the welfare-focused leadership of Hon'ble Sri Y.S. Jagan Mohan Reddy, Vijayananda Reddy formally joined the YSR Congress Party. He quickly established himself as a reliable organiser and a trusted voice for Chittoor district, earning recognition from senior party leadership for consistent, ground-level work.",
          te: 'దివంగత డా. వైఎస్ రాజశేఖర రెడ్డి ప్రజాకేంద్రీకృత పాలనా నమూనా మరియు గౌరవనీయ శ్రీ వైఎస్ జగన్ మోహన్ రెడ్డి సంక్షేమ నాయకత్వంచే ప్రేరణ పొంది, విజయానంద రెడ్డి వైఎస్ కాంగ్రెస్ పార్టీలో చేరారు. చిత్తూరు జిల్లాకు విశ్వసనీయ సంఘటనాపరుడిగా మరియు నమ్మకమైన గళంగా వేగంగా స్థిరపడ్డారు.',
        },
        {
          en: 'As YSRCP Coordinator for Chittoor Assembly Constituency from 2021 to 2024, he oversaw party organisation across all mandals, drove grassroots implementation of the Navaratnalu welfare schemes, and built the party\'s local presence into one of the strongest in the district. His door-to-door outreach and responsive approach to public grievances set a clear benchmark of constituent service.',
          te: '2021 నుండి 2024 వరకు చిత్తూరు అసెంబ్లీ నియోజకవర్గ వైఎస్సార్సీపీ సమన్వయకర్తగా, అన్ని మండలాల్లో పార్టీ సంఘటనను పర్యవేక్షించారు, నవరత్నాలు సంక్షేమ పథకాల తృణమూల అమలుకు నేతృత్వం వహించారు మరియు జిల్లాలో పార్టీ స్థానిక ఉనికిని అత్యంత బలమైనదిగా నిర్మించారు.',
        },
      ],
    },
    {
      heading: { en: 'Administrative Leadership', te: 'పరిపాలనా నాయకత్వం' },
      paragraphs: [
        {
          en: 'In recognition of his commitment to public service, Vijayananda Reddy was appointed Vice Chairman of the Andhra Pradesh State Road Transport Corporation (APSRTC). In this capacity, he contributed to policy decisions affecting public transport across the state, with a particular focus on improving bus connectivity for rural and semi-urban communities in Chittoor and surrounding districts.',
          te: 'ప్రజా సేవకు నిబద్ధతకు గుర్తింపుగా, విజయానంద రెడ్డి ఆంధ్రప్రదేశ్ స్టేట్ రోడ్ ట్రాన్స్‌పోర్ట్ కార్పొరేషన్ (ఎపిఎస్ఆర్టిసి) వైస్ చైర్మన్‌గా నియమించబడ్డారు. ఈ హోదాలో, రాష్ట్రమంతటా ప్రజా రవాణాను ప్రభావితం చేసే విధాన నిర్ణయాలకు సహకరించారు.',
        },
        {
          en: 'In that role, he championed worker welfare, efficient operations, and equitable service delivery across the corporation. His administrative experience demonstrated an ability to navigate institutional processes while remaining accountable to the public interest — setting a standard for the kind of governance Chittoor constituency deserves.',
          te: 'ఆ పాత్రలో, అతను కార్మిక సంక్షేమం, సమర్థవంతమైన కార్యకలాపాలు మరియు కార్పొరేషన్ అంతటా న్యాయమైన సేవా వితరణకు మద్దతు ఇచ్చారు. అతని పరిపాలనా అనుభవం ప్రజా ప్రయోజనానికి జవాబుదారీగా ఉంటూ సంస్థాగత ప్రక్రియలను నావిగేట్ చేయగల సామర్థ్యాన్ని ప్రదర్శించింది.',
        },
      ],
    },
    {
      heading: { en: 'Vision for Chittoor Constituency', te: 'చిత్తూరు నియోజకవర్గంపై దృక్పథం' },
      paragraphs: [
        {
          en: 'As the official YSRCP candidate for Chittoor Assembly Constituency in the 2024 Andhra Pradesh elections, M.C. Vijayananda Reddy has articulated a clear and practical vision: sustainable local employment, improved drinking water access, quality healthcare at the constituency level, and the complete implementation of welfare schemes for every eligible family.',
          te: '2024 ఆంధ్రప్రదేశ్ ఎన్నికలలో చిత్తూరు అసెంబ్లీ నియోజకవర్గ అధికారిక వైఎస్సార్సీపీ అభ్యర్థిగా, ఎం.సి. విజయానంద రెడ్డి స్పష్టమైన మరియు ఆచరణాత్మక దృక్పథాన్ని వ్యక్తం చేశారు: స్థిరమైన స్థానిక ఉపాధి, మెరుగైన తాగునీటి అందుబాటు, నియోజకవర్గ స్థాయిలో నాణ్యమైన వైద్యం మరియు ప్రతి అర్హ కుటుంబానికి సంక్షేమ పథకాల పూర్తి అమలు.',
        },
        {
          en: 'He is committed to closing the infrastructure gap between Chittoor town and its surrounding mandals, attracting investment in the agro-industrial corridor, and creating viable employment pathways for the youth of Chittoor — within the district and beyond.',
          te: 'చిత్తూరు పట్టణం మరియు దాని చుట్టూ ఉన్న మండలాల మధ్య మాలిన్య వ్యవధానాన్ని తగ్గించడం, వ్యవసాయ-పారిశ్రామిక సరిహద్దులో పెట్టుబడులు ఆకర్షించడం మరియు చిత్తూరు యువతకు ఉపాధి అవకాశాలు కల్పించడానికి అతను కట్టుబడి ఉన్నారు.',
        },
      ],
    },
    {
      heading: { en: 'Commitment to People', te: 'ప్రజలకు నిబద్ధత' },
      paragraphs: [
        {
          en: 'Throughout his career, M.C. Vijayananda Reddy has been guided by a straightforward principle: good governance is measured not in announcements, but in the lives it actually improves. He has consistently prioritised welfare scheme delivery, public grievance redressal, and direct engagement with voters across every village, ward, and mandal in the constituency.',
          te: 'తన వృత్తి జీవితమంతటా, ఎం.సి. విజయానంద రెడ్డి ఒక సరళమైన సూత్రంతో మార్గనిర్దేశం పొందారు: మంచి పాలన ప్రకటనలలో కాదు, నిజంగా మెరుగుపడిన జీవితాలలో కొలవబడుతుంది. సంక్షేమ పథకాల వితరణ, ప్రజా ఫిర్యాదుల పరిష్కారం మరియు నియోజకవర్గంలోని ప్రతి గ్రామం, వార్డు మరియు మండలంలో ఓటర్లతో నేరుగా నిమగ్నత కోసం నిరంతరం ప్రాధాన్యత ఇచ్చారు.',
        },
        {
          en: 'His leadership philosophy is built on listening first and then acting with purpose. Whether distributing relief to flood-affected families, ensuring welfare coverage reaches the last mile, or holding ward-level review meetings with party workers — Vijayananda Reddy has demonstrated the kind of consistent, ground-up service that builds lasting public trust.',
          te: 'అతని నాయకత్వ తత్వశాస్త్రం మొదట వినడం మరియు తరువాత ఉద్దేశ్యంతో వ్యవహరించడంపై నిర్మించబడింది. వరద బాధిత కుటుంబాలకు సహాయం పంచడం, సంక్షేమ కవరేజ్ చివరి మైలు వరకు చేరేలా నిర్ధారించడం లేదా వార్డు స్థాయి సమీక్షా సమావేశాలు నిర్వహించడం — విజయానంద రెడ్డి శాశ్వత ప్రజా విశ్వాసాన్ని నిర్మించే సేవను ప్రదర్శించారు.',
        },
      ],
    },
  ],

  highlights: [
    {
      icon: '🏛️',
      en: { label: 'APSRTC Vice Chairman', sub: 'Appointed by YSRCP Government' },
      te: { label: 'ఎపిఎస్ఆర్టిసి వైస్ చైర్మన్', sub: 'వైఎస్సార్సీపీ ప్రభుత్వం నియమించింది' },
    },
    {
      icon: '🌱',
      en: { label: '20+ Years Public Service', sub: 'Chittoor District, Andhra Pradesh' },
      te: { label: '20+ సంవత్సరాల సేవ', sub: 'చిత్తూరు జిల్లా, ఆంధ్రప్రదేశ్' },
    },
    {
      icon: '🗳️',
      en: { label: 'MLA Candidate 2024', sub: 'Chittoor Assembly Constituency' },
      te: { label: 'ఎమ్మెల్యే అభ్యర్థి 2024', sub: 'చిత్తూరు అసెంబ్లీ నియోజకవర్గం' },
    },
  ],

  faqTitle: { en: 'Frequently Asked Questions', te: 'తరచుగా అడిగే ప్రశ్నలు' },
  faqs: [
    {
      en: {
        q: 'Who is M.C. Vijayananda Reddy?',
        a: 'M.C. Vijayananda Reddy is a senior YSRCP leader, former Vice Chairman of APSRTC, and the official YSR Congress Party candidate for Chittoor Assembly Constituency in the 2024 Andhra Pradesh Assembly elections.',
      },
      te: {
        q: 'ఎం.సి. విజయానంద రెడ్డి ఎవరు?',
        a: 'ఎం.సి. విజయానంద రెడ్డి సీనియర్ వైఎస్సార్సీపీ నాయకుడు, ఎపిఎస్ఆర్టిసి మాజీ వైస్ చైర్మన్ మరియు 2024 ఆంధ్రప్రదేశ్ అసెంబ్లీ ఎన్నికలలో చిత్తూరు అసెంబ్లీ నియోజకవర్గ అధికారిక వైఎస్ కాంగ్రెస్ పార్టీ అభ్యర్థి.',
      },
    },
    {
      en: {
        q: 'What constituency does MC Vijayananda Reddy represent?',
        a: 'He is the YSRCP candidate for Chittoor Assembly Constituency in Chittoor District, Andhra Pradesh.',
      },
      te: {
        q: 'అతను ఏ నియోజకవర్గానికి ప్రతినిధిగా ఉన్నారు?',
        a: 'ఆంధ్రప్రదేశ్‌లోని చిత్తూరు జిల్లా, చిత్తూరు అసెంబ్లీ నియోజకవర్గానికి అతను వైఎస్సార్సీపీ అభ్యర్థి.',
      },
    },
    {
      en: {
        q: "What is MC Vijayananda Reddy's vision for Chittoor?",
        a: 'He is committed to sustainable local employment, clean drinking water, quality healthcare, infrastructure improvement, and the complete implementation of YSRCP welfare schemes for every eligible Chittoor family.',
      },
      te: {
        q: 'చిత్తూరుకు అతని దృక్పథం ఏమిటి?',
        a: 'స్థిరమైన స్థానిక ఉపాధి, స్వచ్ఛమైన తాగునీరు, నాణ్యమైన వైద్యం, మౌలిక సదుపాయాల మెరుగుదల మరియు ప్రతి అర్హ చిత్తూరు కుటుంబానికి వైఎస్సార్సీపీ సంక్షేమ పథకాల పూర్తి అమలుకు అతను కట్టుబడి ఉన్నారు.',
      },
    },
    {
      en: {
        q: 'What is APSRTC and what was his role there?',
        a: 'APSRTC is the Andhra Pradesh State Road Transport Corporation, the state-owned public bus service. M.C. Vijayananda Reddy served as its Vice Chairman, overseeing public transport policy, worker welfare, and regional connectivity.',
      },
      te: {
        q: 'ఎపిఎస్ఆర్టిసిలో అతని పాత్ర ఏమిటి?',
        a: 'ఎపిఎస్ఆర్టిసి ఆంధ్రప్రదేశ్ స్టేట్ రోడ్ ట్రాన్స్‌పోర్ట్ కార్పొరేషన్. ఎం.సి. విజయానంద రెడ్డి దాని వైస్ చైర్మన్‌గా సేవ చేశారు, ప్రజా రవాణా విధానం, కార్మిక సంక్షేమం మరియు ప్రాంతీయ కనెక్టివిటీని పర్యవేక్షించారు.',
      },
    },
  ],
};

export const CenterColumn: React.FC = () => {
  const { lang } = useLang();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedNewsIdx, setSelectedNewsIdx] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const selectedNews = selectedNewsIdx !== null ? t.news.items[selectedNewsIdx] : null;

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-3.5">

      {/* ─── ABOUT / BIOGRAPHY ─── */}
      <article id="about" className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
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

      {/* ─── POLITICAL CAREER TIMELINE ─── */}
      <div id="career" className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide">
          {tx(t.career.sectionTitle, lang)}
        </div>
        <div className="p-3.5 space-y-2.5">
          {t.career.items.map((item, index) => {
            const years = ['2024', '2021–2024', '2019–2022', '2014–2019', lang === 'en' ? 'Pre-2014' : '2014కి ముందు'];
            return (
              <div
                key={index}
                className="timeline-item bg-[#f9f9f9] border border-[#E3E3E3] border-l-4 border-l-[#0E4FAE] p-3 transition-colors hover:bg-blue-50/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <div className="min-w-[85px] bg-[#0E4FAE] text-white text-[11px] font-bold px-2 py-0.5 text-center rounded-xs flex-shrink-0 self-start">
                    {years[index]}
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#111111] mb-1">{item[lang].title}</h3>
                    <p className="text-xs text-[#555555] leading-relaxed">{item[lang].desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── PHOTO GALLERY ─── */}
      <div id="gallery" className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
          <span>{tx(t.gallery.sectionTitle, lang)}</span>
          <span className="text-[10px] text-white/80 font-normal">{tx(t.gallery.clickHint, lang)}</span>
        </div>
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
        <div className="text-right px-3 py-2 border-t border-[#E3E3E3] bg-[#fafafa]">
          <a href="#" className="more-link text-[#cc0000] text-xs font-bold hover:underline">
            {lang === 'en' ? 'More Photos »' : 'మరిన్ని ఫోటోలు »'}
          </a>
        </div>
      </div>

      {/* ─── VIDEOS (YOUTUBE) ─── */}
      <div id="videos" className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
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
        </div>

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

        <div className="text-right px-3 py-2 border-t border-[#E3E3E3] bg-[#fafafa]">
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noreferrer"
            className="more-link text-[#cc0000] text-xs font-bold hover:underline"
          >
            {tx(t.videos.moreVideos, lang)}
          </a>
        </div>
      </div>

      {/* ─── RECENT NEWS ─── */}
      <div id="news" className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs sm:text-sm font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
          <span>{tx(t.news.sectionTitle, lang)}</span>
          <span className="text-[10px] text-white/80 font-normal">{tx(t.news.sectionTag, lang)}</span>
        </div>
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
        <div className="text-right px-3 py-2 border-t border-[#E3E3E3] bg-[#fafafa]">
          <a href="#" className="more-link text-[#cc0000] text-xs font-bold hover:underline">
            {tx(t.news.viewAll, lang)}
          </a>
        </div>
      </div>

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
                {lang === 'en' ? 'Close' : 'మూసివేయి'}
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
