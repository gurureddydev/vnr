import React from 'react';
import { SOCIAL_LINKS } from '../data/profileData';
import { useLang } from '../context/LanguageContext';

interface FooterProps {
  onNavigatePage?: (page: 'home' | 'privacy' | 'terms' | 'sitemap') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const { lang } = useLang();

  const handleLink = (page: 'home' | 'privacy' | 'terms' | 'sitemap', e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigatePage) {
      onNavigatePage(page);
    }
  };

  return (
    <footer className="bg-[#0E4FAE] text-white mt-6 border-t-4 border-[#0B8F45]">
      {/* Main Footer Links Container */}
      <div className="max-w-[1200px] mx-auto px-3 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Col 1: About YSRCP */}
          <div>
            <div className="flex items-center gap-2 border-b border-white/20 pb-2 mb-3">
              <img src="/logo.png" alt="YSRCP Logo" className="h-7 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                YSR Congress Party
              </h4>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed mb-3">
              YSR Congress Party is committed to welfare governance, agricultural revival, rural empowerment, and equal development for all sections of society in Andhra Pradesh.
            </p>
            <div className="text-[11px] text-emerald-300 font-bold">
              M.C. Vijayanandha Reddy (VNR) – Chittoor
            </div>
          </div>

          {/* Col 2: Official Social Channels */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 mb-3">
              Official Social Media
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="hover:text-white hover:underline flex items-center gap-2">
                  <span className="text-red-400 font-bold">▶</span>
                  <span>YouTube: @mcvijayanandareddy4187</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-white hover:underline flex items-center gap-2">
                  <span className="text-pink-400 font-bold">📷</span>
                  <span>Instagram: @mc_vijayanandareddy</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="hover:text-white hover:underline flex items-center gap-2">
                  <span className="text-sky-300 font-extrabold">𝕏</span>
                  <span>X (Twitter): @McVNR1234</span>
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="hover:text-white hover:underline flex items-center gap-2">
                  <span className="text-blue-300 font-bold">f</span>
                  <span>Facebook: VijayanandaReddyMC</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Media & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 mb-3">
              Media & Resources
            </h4>
            <ul className="space-y-1.5 text-xs text-blue-100">
              {['Photo Gallery', 'Videos & Speeches', 'Press Releases', 'Navaratnalu Welfare', 'Contact Office'].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => { e.preventDefault(); if (onNavigatePage) onNavigatePage('home'); }} className="hover:text-white hover:underline flex items-center gap-1">
                    <span>»</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Constituency Office Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 mb-3">
              Chittoor Office
            </h4>
            <div className="text-xs text-blue-100 space-y-1.5 leading-relaxed">
              <div className="font-bold text-white">M.C. Vijayanandha Reddy (VNR) Office</div>
              <div>YSRCP Party Office Chittoor</div>
              <div>Ettiyamma Temple Street, Konga reddy palli</div>
              <div className="pt-1 text-white font-semibold">📞 +91 81250 26072</div>
              <div className="text-white font-semibold">✉ mcvreddy1234@mcvnr.com</div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright & Powered By Bar */}
      <div className="bg-black/30 border-t border-white/15 py-3 px-3">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-blue-200">
          <div className="text-center md:text-left">
            © 2024 M.C. Vijayanandha Reddy (VNR) – YSRCP Chittoor Assembly. All Rights Reserved.
          </div>

          {/* Powered by Navhigh Technologies */}
          <a
            href="https://navhigh.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-black/40 hover:bg-black/60 px-3 py-1.5 rounded-full border border-white/15 shadow-xs transition-all duration-200 group text-white"
            title="Navhigh Technologies – Digital Development Partner"
          >
            <span className="text-[11px] font-medium text-blue-200 group-hover:text-white">Powered by</span>
            <div className="flex items-center gap-1.5 font-bold tracking-wide text-xs">
              <img
                src="/navhightech.png"
                alt="Navhigh Technologies"
                className="h-5 w-auto object-contain block max-w-[120px]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span className="text-white group-hover:text-emerald-300 transition-colors">Navhigh Technologies</span>
            </div>
          </a>

          <div className="flex gap-4 items-center">
            <button onClick={(e) => handleLink('privacy', e)} className="hover:text-white hover:underline cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={(e) => handleLink('terms', e)} className="hover:text-white hover:underline cursor-pointer">
              Terms of Use
            </button>
            <button onClick={(e) => handleLink('sitemap', e)} className="hover:text-white hover:underline cursor-pointer">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
