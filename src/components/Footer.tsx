import React from 'react';

export const Footer: React.FC = () => {
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
            <p className="text-xs text-blue-100 leading-relaxed">
              YSR Congress Party is a leading political party in Andhra Pradesh, committed to welfare governance, agricultural revival, rural empowerment, and equal development for all sections of society.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-blue-100">
              {['Home', 'News Updates', 'Party Leadership', 'MLA Candidates', 'Navaratnalu Schemes'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:underline flex items-center gap-1">
                    <span>»</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Media & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2 mb-3">
              Media & Resources
            </h4>
            <ul className="space-y-1.5 text-xs text-blue-100">
              {['Photo Gallery', 'Video Archive', 'Press Releases', 'Downloads & Manifestos', 'Live TV Stream'].map((item) => (
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
              <div>YSR Congress Party Headquarters</div>
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
            © 2024 YSR Congress Party. All Rights Reserved.
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
