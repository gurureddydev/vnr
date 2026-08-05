import React from 'react';
import { SOCIAL_LINKS } from '../data/profileData';
import { useLang } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang } = useLang();

  return (
    <footer className="bg-[#0E4FAE] text-white mt-6 border-t-4 border-[#0B8F45]">
      {/* Main Footer Links Container */}
      <div className="max-w-[1200px] mx-auto px-3 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Col 1: About YSRCP */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 mb-3">
              YSR Congress Party
            </h4>
            <p className="text-xs text-blue-100 leading-relaxed mb-3">
              YSR Congress Party is committed to welfare governance, agricultural revival, rural empowerment, and equal development for all sections of society in Andhra Pradesh.
            </p>
            <div className="text-[11px] text-emerald-300 font-bold">
              M.C. Vijayananda Reddy – Chittoor
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
                  <a href="#" className="hover:text-white hover:underline flex items-center gap-1">
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
              <div className="font-bold text-white">M.C. Vijayananda Reddy Office</div>
              <div>YSR Congress Party Office, High Road</div>
              <div>Chittoor Town, Andhra Pradesh</div>
              <div className="pt-1 text-white font-semibold">📞 +91 94400 12345</div>
              <div className="text-white font-semibold">✉ office@ysrcp-chittoor.in</div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black/30 border-t border-white/15 py-3 px-3">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200">
          <div>
            © 2024 M.C. Vijayananda Reddy – YSRCP Chittoor Assembly. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-white hover:underline">Terms of Use</a>
            <a href="#" className="hover:text-white hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
