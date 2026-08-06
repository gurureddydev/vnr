import React, { useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { LEADER_INFO, SOCIAL_LINKS } from '../data/profileData';
import { t } from '../data/translations';

interface PageProps {
  onNavigateHome: (anchor?: string) => void;
  onNavigatePage: (page: 'home' | 'privacy' | 'terms' | 'sitemap') => void;
  onOpenContact: () => void;
}

export const Sitemap: React.FC<PageProps> = ({ onNavigateHome, onNavigatePage, onOpenContact }) => {
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSectionClick = (anchorId: string) => {
    onNavigateHome(anchorId);
  };

  return (
    <div className="flex-1 px-3 py-4 max-w-[1200px] mx-auto w-full">
      {/* Top Banner / Breadcrumb Strip */}
      <div className="bg-white border border-[#E3E3E3] p-4 mb-4 shadow-xs flex flex-wrap items-center justify-between gap-3 border-l-4 border-l-[#0B8F45]">
        <div>
          <div className="text-[11px] font-bold text-[#0E4FAE] uppercase tracking-wider">
            {lang === 'en' ? 'Website Directory & Navigation' : 'వెబ్‌సైట్ మ్యాప్ & సూచిక'}
          </div>
          <h1 className="text-lg sm:text-xl font-extrabold text-[#111111] uppercase tracking-wide">
            {lang === 'en' ? 'Site Navigation Map' : 'సైట్‌మ్యాప్'}
          </h1>
          <p className="text-xs text-gray-600 mt-0.5">
            {lang === 'en'
              ? `Explore all sections, welfare schemes, and media resources of Sri ${LEADER_INFO.name}`
              : `శ్రీ ${LEADER_INFO.name} వారి అధికారిక వెబ్‌సైట్‌లోని అన్ని విభాగాలు మరియు సమాచారం`}
          </p>
        </div>
        <button
          onClick={() => onNavigateHome()}
          className="btn-primary text-xs font-bold px-4 py-2 flex items-center gap-1.5 rounded-xs shadow-2xs"
        >
          <span>←</span>
          <span>{lang === 'en' ? 'Back to Main Profile' : 'ప్రొఫైల్‌కు తిరిగి వెళ్లండి'}</span>
        </button>
      </div>

      {/* Main Sitemap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Card 1: Main Leader Profile Sections */}
        <div className="bg-white border border-[#E3E3E3] p-4 shadow-xs border-t-2 border-t-[#0E4FAE]">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0E4FAE] border-b border-[#E3E3E3] pb-2 mb-3 flex items-center gap-1.5">
            <span>👤</span>
            <span>{lang === 'en' ? 'Leader Profile & Biography' : 'నాయకుని ప్రొఫైల్'}</span>
          </h2>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleSectionClick('about')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> About M.C. Vijayanandha Reddy
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Early life, background & public service journey</div>
            </li>
            <li>
              <button onClick={() => handleSectionClick('career')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> Political Timeline & Key Milestones
              </button>
              <div className="text-[11px] text-gray-500 ml-3">APSRTC Vice Chairman & YSRCP leadership roles</div>
            </li>
            <li>
              <button onClick={() => handleSectionClick('constituency')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> Chittoor Assembly Constituency Overview
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Constituency mandals, demographics & vision</div>
            </li>
          </ul>
        </div>

        {/* Card 2: YSR Welfare Schemes (Navaratnalu) */}
        <div className="bg-white border border-[#E3E3E3] p-4 shadow-xs border-t-2 border-t-[#0B8F45]">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0B8F45] border-b border-[#E3E3E3] pb-2 mb-3 flex items-center gap-1.5">
            <span>🌿</span>
            <span>{lang === 'en' ? 'YSR Welfare Schemes (Navaratnalu)' : 'వైఎస్ సంక్షేమ పథకాలు'}</span>
          </h2>
          <ul className="space-y-2 text-xs">
            {t.schemes.items.map((scheme, idx) => (
              <li key={idx}>
                <div className="font-bold text-gray-800 flex items-center gap-1.5">
                  <span>{scheme.icon}</span>
                  <span>{scheme[lang].label}</span>
                </div>
                <div className="text-[11px] text-gray-500 ml-5">{scheme[lang].desc}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Media, Photo & Video Gallery */}
        <div className="bg-white border border-[#E3E3E3] p-4 shadow-xs border-t-2 border-t-[#0E4FAE]">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0E4FAE] border-b border-[#E3E3E3] pb-2 mb-3 flex items-center gap-1.5">
            <span>📹</span>
            <span>{lang === 'en' ? 'Media & Photo Gallery' : 'ఫోటోలు & వీడియోలు'}</span>
          </h2>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleSectionClick('gallery')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> Photo Gallery & Public Events
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Campaign rallies, cadre meetings & field visits</div>
            </li>
            <li>
              <button onClick={() => handleSectionClick('videos')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> Official YouTube Videos & Speeches
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Key addresses, assembly speeches & press meets</div>
            </li>
            <li>
              <button onClick={() => handleSectionClick('news')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> In The News & Press Coverage
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Latest media announcements & newspaper reports</div>
            </li>
          </ul>
        </div>

        {/* Card 4: Official Social Media Channels */}
        <div className="bg-white border border-[#E3E3E3] p-4 shadow-xs border-t-2 border-t-purple-600">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-purple-700 border-b border-[#E3E3E3] pb-2 mb-3 flex items-center gap-1.5">
            <span>🌐</span>
            <span>{lang === 'en' ? 'Official Social Channels' : 'అధికారిక సోషల్ మీడియా'}</span>
          </h2>
          <ul className="space-y-2 text-xs">
            <li>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="text-red-600 hover:underline font-bold flex items-center gap-2">
                <span>▶ YouTube:</span> @mcvijayanandareddy4187
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-pink-600 hover:underline font-bold flex items-center gap-2">
                <span>📷 Instagram:</span> @mc_vijayanandareddy
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline font-bold flex items-center gap-2">
                <span>𝕏 Twitter / X:</span> @McVNR1234
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-bold flex items-center gap-2">
                <span>f Facebook:</span> VijayanandaReddyMC
              </a>
            </li>
          </ul>
        </div>

        {/* Card 5: Legal & Information Policies */}
        <div className="bg-white border border-[#E3E3E3] p-4 shadow-xs border-t-2 border-t-[#0B8F45]">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0B8F45] border-b border-[#E3E3E3] pb-2 mb-3 flex items-center gap-1.5">
            <span>📜</span>
            <span>{lang === 'en' ? 'Policies & Terms' : 'విధానాలు & నిబంధనలు'}</span>
          </h2>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigatePage('privacy')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> Privacy Policy
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Data security, non-commercial guarantee & contact rights</div>
            </li>
            <li>
              <button onClick={() => onNavigatePage('terms')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> Terms of Use
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Website guidelines, content reuse & jurisdiction</div>
            </li>
            <li>
              <button onClick={() => onNavigatePage('sitemap')} className="text-blue-700 hover:text-[#0B8F45] hover:underline font-bold flex items-center gap-1">
                <span>»</span> Complete Sitemap
              </button>
              <div className="text-[11px] text-gray-500 ml-3">Directory map of all profile pages</div>
            </li>
          </ul>
        </div>

        {/* Card 6: Constituency Office & Direct Contact */}
        <div className="bg-white border border-[#E3E3E3] p-4 shadow-xs border-t-2 border-t-[#0E4FAE] flex flex-col justify-between">
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#0E4FAE] border-b border-[#E3E3E3] pb-2 mb-3 flex items-center gap-1.5">
              <span>📍</span>
              <span>{lang === 'en' ? 'Chittoor Office Contact' : 'కార్యాలయ వివరాలు'}</span>
            </h2>
            <div className="text-xs space-y-1 text-gray-700">
              <div className="font-bold text-gray-900">Sri M.C. Vijayanandha Reddy Office</div>
              <div>{LEADER_INFO.officeAddress}</div>
              <div>Phone: <a href={`tel:${LEADER_INFO.phone}`} className="text-[#0E4FAE] font-bold">{LEADER_INFO.phone}</a></div>
              <div>Email: <a href={`mailto:${LEADER_INFO.email}`} className="text-[#0E4FAE] font-bold">{LEADER_INFO.email}</a></div>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="btn-green w-full py-2 px-3 text-xs font-bold rounded-xs shadow-2xs mt-4"
          >
            📞 Contact Constituency Office
          </button>
        </div>

      </div>
    </div>
  );
};
