import React, { useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { LEADER_INFO } from '../data/profileData';

interface PageProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicy: React.FC<PageProps> = ({ onNavigateHome }) => {
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex-1 px-3 py-4 max-w-[1200px] mx-auto w-full">
      {/* Top Banner / Breadcrumb Strip */}
      <div className="bg-white border border-[#E3E3E3] p-4 mb-4 shadow-xs flex flex-wrap items-center justify-between gap-3 border-l-4 border-l-[#0E4FAE]">
        <div>
          <div className="text-[11px] font-bold text-[#0B8F45] uppercase tracking-wider">
            {lang === 'en' ? 'Official Policy Statement' : 'అధికారిక గోప్యతా విధానం'}
          </div>
          <h1 className="text-lg sm:text-xl font-extrabold text-[#111111] uppercase tracking-wide">
            {lang === 'en' ? 'Privacy Policy' : 'గోప్యతా విధానం'}
          </h1>
          <p className="text-xs text-gray-600 mt-0.5">
            {lang === 'en'
              ? `Official Website of Sri ${LEADER_INFO.name} – YSRCP Leader, Chittoor`
              : `శ్రీ ${LEADER_INFO.name} వారి అధికారిక వెబ్‌సైట్ – వైఎస్సార్సీపీ నాయకుడు, చిత్తూరు`}
          </p>
        </div>
        <button
          onClick={onNavigateHome}
          className="btn-primary text-xs font-bold px-4 py-2 flex items-center gap-1.5 rounded-xs shadow-2xs"
        >
          <span>←</span>
          <span>{lang === 'en' ? 'Back to Profile' : 'ప్రొఫైల్‌కు తిరిగి వెళ్లండి'}</span>
        </button>
      </div>

      {/* Main Policy Content Box */}
      <div className="bg-white border border-[#E3E3E3] p-5 sm:p-7 shadow-xs space-y-6 text-xs text-[#333333] leading-relaxed">
        <div className="border-b border-[#E3E3E3] pb-3">
          <p className="text-gray-600 italic">
            {lang === 'en'
              ? 'Last updated: August 2026 | Applies to all visitors, citizens, and supporters accessing this official public portal.'
              : 'చివరి నవీకరణ: ఆగస్టు 2026 | ఈ అధికారిక ప్రజల పోర్టల్‌ను సందర్శించే పౌరులు మరియు మద్దతుదారులందరికీ వర్తిస్తుంది.'}
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '1. Information We Collect' : '1. మేము సేకరించే సమాచారం'}
          </h2>
          <p>
            {lang === 'en'
              ? `This website serves as the public information portal for Sri ${LEADER_INFO.name}, YSRCP leader and Assembly In-Charge for Chittoor Constituency. We respect the privacy of every citizen, voter, and visitor.`
              : `ఈ వెబ్‌సైట్ చిత్తూరు నియోజకవర్గ వైఎస్సార్సీపీ సమన్వయకర్త శ్రీ ${LEADER_INFO.name} వారి అధికారిక సమాచార పోర్టల్. ప్రతీ పౌరుడు మరియు ఓటరు గోప్యతను మేము గౌరవిస్తాము.`}
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              <strong>{lang === 'en' ? 'Voluntary Submissions:' : 'స్వేచ్ఛగా అందించే వివరాలు:'}</strong>{' '}
              {lang === 'en'
                ? 'When submitting a representation, grievance, or appointment request via the Contact form, we collect your name, phone number, email address, mandal, and message details.'
                : 'సంప్రదింపు ఫారం ద్వారా వినతిపత్రం లేదా అపాయింట్‌మెంట్ కోరినప్పుడు పేరు, ఫోన్ నంబర్, ఇమెయిల్ మరియు సందేశ వివరాలు సేకరిస్తాము.'}
            </li>
            <li>
              <strong>{lang === 'en' ? 'Technical Usage Data:' : 'సాంకేతిక వినియోగ వివరాలు:'}</strong>{' '}
              {lang === 'en'
                ? 'Standard non-personal data such as browser type, operating system, IP address, and pages visited to ensure website performance and security.'
                : 'వెబ్‌సైట్ పనితీరు మరియు భద్రత కొరకు బ్రౌజర్ వివరాలు, ఐపీ చిరునామా మరియు సందర్శించిన పేజీల వివరాలు.'}
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '2. Purpose & Utilization of Data' : '2. డేటా వినియోగం మరియు ఉద్దేశం'}
          </h2>
          <p>
            {lang === 'en'
              ? 'Information provided by citizens is strictly utilized for public service and administrative constituency coordination:'
              : 'పౌరులు అందించిన సమాచారం కేవలం ప్రజా సేవ మరియు నియోజకవర్గ పరిపాలనా సమన్వయం కొరకు ఉపయోగించబడుతుంది:'}
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>{lang === 'en' ? 'Processing constituency grievances and welfare representation requests.' : 'నియోజకవర్గ సమస్యలు మరియు సంక్షేమ వినతుల పరిశీలన.'}</li>
            <li>{lang === 'en' ? 'Scheduling appointments with Sri M.C. Vijayanandha Reddy at the Chittoor Office.' : 'చిత్తూరు కార్యాలయంలో శ్రీ విజయానంద రెడ్డి గారి అపాయింట్‌మెంట్లు ఖరారు చేయడం.'}</li>
            <li>{lang === 'en' ? 'Providing official announcements regarding YSRCP welfare initiatives and public rallies.' : 'వైఎస్సార్సీపీ సంక్షేమ పథకాలు మరియు బహిరంగ సమావేశాల అధికారిక సమాచారం అందించడం.'}</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '3. Strict Non-Commercial & Anti-Spam Guarantee' : '3. వాణిజ్యేతర & స్పామ్ రహిత హామీ'}
          </h2>
          <p className="font-semibold text-gray-800">
            {lang === 'en'
              ? 'WE DO NOT SELL, RENT, SHARE, OR TRADE YOUR PERSONAL INFORMATION WITH ANY COMMERCIAL THIRD PARTIES OR ADVERTISERS.'
              : 'మీ వ్యక్తిగత వివరాలను ఎలాంటి వాణిజ్య సంస్థలకు లేదా ప్రకటనదారులకు విక్రయించబోము మరియు పంచుకోబోము.'}
          </p>
          <p>
            {lang === 'en'
              ? 'All data remains confidential within the authorized YSRCP Chittoor Constituency Office administrative team.'
              : 'అన్ని వివరాలు చిత్తూరు వైఎస్సార్సీపీ నియోజకవర్గ కార్యాలయ పరిపాలనా బృందం వద్ద అత్యంత భద్రంగా ఉంటాయి.'}
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '4. Data Security & Storage' : '4. డేటా భద్రత'}
          </h2>
          <p>
            {lang === 'en'
              ? 'We deploy industry-standard technical safeguards, HTTPS encryption, and access controls to prevent unauthorized access, disclosure, or modification of citizen representations.'
              : 'పౌరుల వినతులను సురక్షితంగా ఉంచడానికి హెచ్‌టీటీపీఎస్ ఎన్‌క్రిప్షన్ మరియు అధునాతన డిజిటల్ భద్రతా ప్రమాణాలను ఉపయోగిస్తాము.'}
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '5. External Links & Official Channels' : '5. బాహ్య లింకులు & సోషల్ మీడియా'}
          </h2>
          <p>
            {lang === 'en'
              ? 'This site contains links to official media channels (YouTube, Facebook, X/Twitter, Instagram). When navigating to external platforms, their respective privacy policies will apply.'
              : 'ఈ సైట్‌లో యూట్యూబ్, ఫేస్‌బుక్, ట్విట్టర్, ఇన్‌స్టాగ్రామ్ వంటి అధికారిక సోషల్ మీడియా లింక్‌లు ఉన్నాయి. బాహ్య ప్లాట్‌ఫారమ్‌లకు వెళ్లినప్పుడు ఆయా సంస్థల నిబంధనలు వర్తిస్తాయి.'}
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-2 bg-[#f8f9fa] border border-[#E3E3E3] p-4 rounded-xs">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase mb-1">
            {lang === 'en' ? '6. Contact Privacy Office' : '6. కార్యాలయ చిరునామా'}
          </h2>
          <p className="text-gray-700">
            {lang === 'en'
              ? 'For questions regarding this privacy policy or to update your submitted representations, contact:'
              : 'గోప్యతా విధానం మరియు వినతుల కొరకు కార్యాలయాన్ని సంప్రదించండి:'}
          </p>
          <div className="font-bold text-gray-900 mt-2 space-y-0.5">
            <div>Sri M.C. Vijayanandha Reddy Constituency Office</div>
            <div>{LEADER_INFO.officeAddress}</div>
            <div>Email: <a href={`mailto:${LEADER_INFO.email}`} className="text-[#0E4FAE] hover:underline">{LEADER_INFO.email}</a></div>
            <div>Phone: <a href={`tel:${LEADER_INFO.phone}`} className="text-[#0E4FAE] hover:underline">{LEADER_INFO.phone}</a></div>
          </div>
        </section>
      </div>
    </div>
  );
};
