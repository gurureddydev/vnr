import React, { useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { LEADER_INFO } from '../data/profileData';

interface PageProps {
  onNavigateHome: () => void;
}

export const TermsOfUse: React.FC<PageProps> = ({ onNavigateHome }) => {
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
            {lang === 'en' ? 'Official Terms & Guidelines' : 'అధికారిక ఉపయోగ నిబంధనలు'}
          </div>
          <h1 className="text-lg sm:text-xl font-extrabold text-[#111111] uppercase tracking-wide">
            {lang === 'en' ? 'Terms of Use' : 'ఉపయోగ నిబంధనలు'}
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

      {/* Main Terms Box */}
      <div className="bg-white border border-[#E3E3E3] p-5 sm:p-7 shadow-xs space-y-6 text-xs text-[#333333] leading-relaxed">
        <div className="border-b border-[#E3E3E3] pb-3">
          <p className="text-gray-600 italic">
            {lang === 'en'
              ? 'Effective Date: August 2026. Please read these terms carefully before utilizing the website resources or submitting representations.'
              : 'అమలు తేది: ఆగస్టు 2026. పోర్టల్ సమాచారాన్ని ఉపయోగించే ముందు ఈ నిబంధనలను చదవండి.'}
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '1. Acceptance of Terms' : '1. నిబంధనల ఆమోదం'}
          </h2>
          <p>
            {lang === 'en'
              ? `By accessing, browsing, or utilizing this website, you agree to comply with and be bound by these Terms of Use. This website is owned and operated by the official office of Sri M.C. Vijayananda Reddy for non-commercial public information, constituency updates, and welfare coordination.`
              : `ఈ వెబ్‌సైట్‌ను ఉపయోగించడం ద్వారా మీరు ఈ ఉపయోగ నిబంధనలకు కట్టుబడి ఉండటానికి అంగీకరిస్తున్నారు. శ్రీ ఎం.సి. విజయానంద రెడ్డి గారి కార్యాలయం ప్రజల సమాచారం మరియు సంక్షేమ సమన్వయం కొరకు దీనిని నిర్వహిస్తుంది.`}
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '2. Permitted Use of Content & Media' : '2. కంటెంట్ మరియు ఫోటోల వినియోగం'}
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
            <li>
              <strong>{lang === 'en' ? 'Public & News Fair Use:' : 'సమాచార వినియోగం:'}</strong>{' '}
              {lang === 'en'
                ? 'Photographs, press releases, speech excerpts, and YSRCP welfare scheme summaries published on this portal may be shared for journalistic, educational, or non-commercial public awareness purposes with appropriate attribution to Sri M.C. Vijayananda Reddy.'
                : 'పోర్టల్‌లోని వార్తలు, ప్రసంగాలు మరియు ఫోటోలను పత్రికా అవసరాలు లేదా ప్రజా అవగాహన కొరకు తగిన క్రెడిట్‌తో ఉపయోగించవచ్చు.'}
            </li>
            <li>
              <strong>{lang === 'en' ? 'Commercial Prohibition:' : 'వాణిజ్య నిషేధం:'}</strong>{' '}
              {lang === 'en'
                ? 'Unauthorized commercial exploitation, misleading endorsements, AI deepfake generation, or fraudulent impersonation of Sri M.C. Vijayananda Reddy or YSR Congress Party is strictly prohibited.'
                : 'నాయకుని పేరును లేదా ఫోటోలను వాణిజ్యపరంగా దుర్వినియోగం చేయడం, తప్పుడు వ్యాపార ప్రకటనలకు ఉపయోగించడం ఖచ్చితంగా నిషేధించబడింది.'}
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '3. Representation & Grievance Guidelines' : '3. వినతిపత్రాల సమర్పణ మార్గదర్శకాలు'}
          </h2>
          <p>
            {lang === 'en'
              ? 'When submitting queries, appointment requests, or community issues via the Contact portal, users agree to:'
              : 'సంప్రదింపు ఫారం ద్వారా సమస్యలు లేదా వినతులు పంపేటప్పుడు పౌరులు ఈ క్రింది మార్గదర్శకాలు పాటించాలి:'}
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>{lang === 'en' ? 'Provide accurate contact details (Full Name, Phone Number, Mandal).' : 'సరైన పేరు, ఫోన్ నంబర్ మరియు ప్రాంత వివరాలు ఇవ్వడం.'}</li>
            <li>{lang === 'en' ? 'Refrain from submitting abusive, defamatory, or unlawful content.' : 'గౌరవప్రదమైన భాషను మాత్రమే ఉపయోగించడం.'}</li>
            <li>{lang === 'en' ? 'Understand that representations are reviewed based on public administrative priority.' : 'అర్హత మరియు ప్రాధాన్యత ఆధారంగా కార్యాలయం పరిశీలిస్తుందని గమనించడం.'}</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '4. Public Information Disclaimer' : '4. సమాచార బాధ్యత మినహాయింపు'}
          </h2>
          <p>
            {lang === 'en'
              ? 'While every effort is made to maintain accurate, up-to-date information regarding YSRCP welfare schemes (Navaratnalu), constituency developments, and press events, official government gazettes and departmental circulars remain the primary legal source for state scheme eligibility criteria.'
              : 'వైఎస్సార్సీపీ సంక్షేమ పథకాలు మరియు అభివృద్ధి వివరాలు ఖచ్చితంగా అందించడానికి ప్రయత్నించినప్పటికీ, ప్రభుత్వ అధికారిక జీవోలు మరియు ఉత్తర్వులే ప్రామాణికం.'}
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase flex items-center gap-2 border-b border-blue-100 pb-1">
            <span className="w-2 h-2 rounded-full bg-[#0B8F45]" />
            {lang === 'en' ? '5. Applicable Jurisdiction' : '5. న్యాయ పరిధి'}
          </h2>
          <p>
            {lang === 'en'
              ? 'These terms are governed by and construed in accordance with the laws of India. Any legal matters or disputes shall be subject to the exclusive jurisdiction of the competent courts in Chittoor District, Andhra Pradesh.'
              : 'ఈ నిబంధనలు భారతీయ చట్టాలకు లోబడి ఉంటాయి. ఎలాంటి న్యాయపరమైన అంశాలైనా చిత్తూరు జిల్లా, ఆంధ్రప్రదేశ్ న్యాయస్థానాల పరిధికి లోబడి ఉంటాయి.'}
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-2 bg-[#f8f9fa] border border-[#E3E3E3] p-4 rounded-xs">
          <h2 className="text-sm font-bold text-[#0E4FAE] uppercase mb-1">
            {lang === 'en' ? '6. Official Inquiries & Secretariat Contact' : '6. కార్యాలయ సంప్రదింపులు'}
          </h2>
          <div className="font-bold text-gray-900 space-y-0.5">
            <div>Sri M.C. Vijayananda Reddy Office</div>
            <div>{LEADER_INFO.officeAddress}</div>
            <div>Email: <a href={`mailto:${LEADER_INFO.email}`} className="text-[#0E4FAE] hover:underline">{LEADER_INFO.email}</a></div>
            <div>Phone: <a href={`tel:${LEADER_INFO.phone}`} className="text-[#0E4FAE] hover:underline">{LEADER_INFO.phone}</a></div>
          </div>
        </section>
      </div>
    </div>
  );
};
