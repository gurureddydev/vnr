import React from 'react';
import headerBanner from '../imports/ysrcongress.jpg';
import vijya2 from '../imports/vijya2.jpeg';
import { useLang } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { lang } = useLang();

  return (
    <header className="w-full select-none bg-gradient-to-r from-[#0E4FAE] via-[#0952a5] to-[#0B8F45] text-white overflow-hidden shadow-md">
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
        {/* Main YSRCP Party Banner */}
        <div className="flex-1 w-full min-w-0">
          <img
            src={headerBanner}
            alt="YSR Congress Party"
            className="w-full h-auto object-cover block max-h-[140px] md:max-h-[160px]"
            onError={(e) => { (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}ysrcongress.jpg`; }}
          />
        </div>

        {/* Leader Header Profile Banner Badge */}
        <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-black/25 backdrop-blur-md border-l border-white/20 self-stretch flex-shrink-0 min-w-[320px] lg:min-w-[360px]">
          <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white overflow-hidden shadow-lg flex-shrink-0 bg-white">
            <img
              src={vijya2}
              alt="M.C. Vijayanandha Reddy (VNR)"
              className="w-full h-full object-cover object-top"
              onError={(e) => { (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}vijya2.jpeg`; }}
            />
          </div>
          <div>
            <div className="text-[11px] font-extrabold text-[#75f5a7] uppercase tracking-wider">
              {lang === 'en' ? 'Official Leader Profile' : 'అధికారిక నాయకుని పేజీ'}
            </div>
            <h1 className="text-sm lg:text-base font-black text-white uppercase tracking-tight leading-tight">
              M.C. VIJAYANANDHA REDDY
            </h1>
            <div className="text-[11px] font-bold text-white/90 mt-0.5 flex items-center gap-1.5">
              <span className="bg-[#0B8F45] text-white text-[9px] px-1.5 py-0.5 rounded font-extrabold uppercase">
                YSRCP
              </span>
              <span>{lang === 'en' ? 'Chittoor MLA Candidate' : 'చిత్తూరు ఎమ్మెల్యే అభ్యర్థి'}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
