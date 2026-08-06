import React, { useState, useRef, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { t, tx } from '../data/translations';
import { SOCIAL_LINKS } from '../data/profileData';

function scrollToSection(anchor: string) {
  if (anchor === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  if (anchor === 'download') { window.print(); return; }
  const el = document.getElementById(anchor);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

// Nav definition — label keys map to translations
const NAV_LINKS = [
  { key: 'aboutLeader',     anchor: 'about' },
  { key: 'politicalCareer', anchor: 'career' },
  { key: 'constituency',    anchor: 'constituency' },
  { key: 'ysrSchemes',      anchor: null,       hasDropdown: true },
  { key: 'photoGallery',    anchor: 'gallery' },
  { key: 'videosMedia',     anchor: 'videos' },
  { key: 'inTheNews',       anchor: 'news' },
  { key: 'contactOffice',   anchor: 'contact' },
] as const;

export const NavBar: React.FC = () => {
  const { lang, toggleLang } = useLang();
  const [activeKey, setActiveKey]   = useState<string>('aboutLeader');
  const [schemesOpen, setSchemesOpen] = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const schemesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (schemesRef.current && !schemesRef.current.contains(e.target as Node))
        setSchemesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className="bg-[#0E4FAE] border-b border-[#0a3d8a] text-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">

        {/* Home icon & party logo */}
        <div className="flex items-center">
          <button
            onClick={() => { scrollToSection('top'); setActiveKey('home'); setSchemesOpen(false); }}
            className="bg-[#111] hover:bg-black px-3 py-2 flex items-center justify-center transition-colors border-r border-white/10 flex-shrink-0 gap-2"
            title={lang === 'en' ? 'Back to top' : 'పైకి వెళ్ళండి'}
          >
            <img src="/logo.png" alt="YSRCP Logo" className="h-5 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="text-base">🏠</span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center">
            {NAV_LINKS.map(({ key, anchor, hasDropdown }) => {
              const label = tx(t.nav[key as keyof typeof t.nav], lang);
              const isActive = activeKey === key;
              const isContact = key === 'contactOffice';
              const isDownload = key === 'downloadProfile';

              if (hasDropdown) {
                return (
                  <div key={key} ref={schemesRef} className="relative">
                    <button
                      onClick={() => { setSchemesOpen(!schemesOpen); setActiveKey(key); }}
                      className={`px-3 py-2.5 text-[13px] font-bold tracking-wide transition-colors whitespace-nowrap flex items-center gap-1 border-r border-white/10 ${
                        isActive || schemesOpen ? 'bg-[#0B8F45] text-white' : 'hover:bg-white/15 text-white/95'
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-[9px] opacity-80">{schemesOpen ? '▲' : '▼'}</span>
                    </button>

                    {schemesOpen && (
                      <div className="absolute top-full left-0 bg-white border border-[#E3E3E3] shadow-xl z-50 min-w-[275px] border-t-2 border-t-[#0B8F45]">
                        <div className="bg-[#0B8F45] px-3 py-2 text-white text-[11px] font-bold uppercase tracking-wider">
                          {tx(t.schemes.header, lang)}
                        </div>
                        {t.schemes.items.map((scheme, idx) => (
                          <a
                            key={idx}
                            href="#"
                            onClick={(e) => { e.preventDefault(); setSchemesOpen(false); }}
                            className="flex items-start gap-3 px-3 py-2.5 hover:bg-blue-50 border-b border-[#f0f0f0] last:border-b-0 group transition-colors"
                          >
                            <span className="text-lg flex-shrink-0 mt-0.5">{scheme.icon}</span>
                            <div>
                              <div className="text-[13px] font-bold text-[#0E4FAE] group-hover:text-[#0B8F45] transition-colors leading-tight">
                                {scheme[lang].label}
                              </div>
                              <div className="text-[11px] text-gray-500 mt-0.5">
                                {scheme[lang].desc}
                              </div>
                            </div>
                          </a>
                        ))}
                        <div className="bg-[#f9f9f9] px-3 py-2 border-t border-[#E3E3E3] text-right">
                          <a href="#" onClick={(e) => { e.preventDefault(); setSchemesOpen(false); }}
                            className="text-[11px] font-bold text-[#cc0000] hover:underline">
                            {tx(t.schemes.viewAll, lang)}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveKey(key);
                    setSchemesOpen(false);
                    if (anchor) scrollToSection(anchor);
                  }}
                  className={`px-3 py-2.5 text-[13px] font-bold tracking-wide transition-colors whitespace-nowrap flex items-center gap-1 border-r border-white/10 ${
                    isContact
                      ? 'bg-[#0B8F45] hover:bg-[#086a33] text-white'
                      : isActive
                      ? 'bg-[#0B8F45] text-white'
                      : 'hover:bg-white/15 text-white/95'
                  }`}
                >
                  {isDownload && <span className="text-[11px]">⬇</span>}
                  {isContact  && <span className="text-[11px]">📞</span>}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Telugu toggle + official social icons */}
        <div className="hidden sm:flex items-center gap-1 pr-2 flex-shrink-0">
          {/* ── TELUGU / ENGLISH TOGGLE BUTTON ── */}
          <button
            onClick={toggleLang}
            title={lang === 'en' ? 'Switch to Telugu' : 'Switch to English'}
            className={`px-3 py-1.5 text-[12px] font-extrabold tracking-wider rounded border-2 transition-all duration-200 ${
              lang === 'te'
                ? 'bg-white text-[#0E4FAE] border-white shadow-inner'
                : 'bg-transparent text-white border-white/60 hover:border-white hover:bg-white/10'
            }`}
          >
            {lang === 'en' ? 'తెలుగు' : 'English'}
          </button>

          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" title="Facebook Profile"
            className="w-8 h-8 flex items-center justify-center bg-[#1877F2] hover:opacity-90 rounded text-xs font-bold ml-1">
            f
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" title="Instagram Profile"
            className="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 rounded text-xs font-bold">
            📷
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" title="X (Twitter) Profile"
            className="w-8 h-8 flex items-center justify-center bg-[#1DA1F2] hover:opacity-90 rounded text-xs font-bold">
            𝕏
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" title="YouTube Channel"
            className="w-8 h-8 flex items-center justify-center bg-[#FF0000] hover:opacity-90 rounded text-xs">
            ▶
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden px-3 py-2 text-white hover:bg-white/10 flex items-center gap-2 font-bold text-xs"
        >
          <span>MENU</span>
          <span className="text-base">{mobileOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A3D8A] border-t border-white/20 px-4 py-3 flex flex-col gap-1">
          {/* Language toggle in mobile */}
          <button
            onClick={toggleLang}
            className={`px-3 py-2 text-sm font-bold rounded border-2 mb-2 transition-all ${
              lang === 'te'
                ? 'bg-white text-[#0E4FAE] border-white'
                : 'border-white/50 text-white hover:bg-white/10'
            }`}
          >
            {lang === 'en' ? '🔤 తెలుగులో చూడండి' : '🔤 View in English'}
          </button>

          {NAV_LINKS.map(({ key, anchor, hasDropdown }) => {
            const label = tx(t.nav[key as keyof typeof t.nav], lang);
            return (
              <React.Fragment key={key}>
                <button
                  onClick={() => {
                    setActiveKey(key);
                    if (hasDropdown) { setSchemesOpen(!schemesOpen); return; }
                    setMobileOpen(false);
                    if (anchor) scrollToSection(anchor);
                  }}
                  className={`px-3 py-2 text-sm font-semibold rounded flex items-center justify-between w-full text-left ${
                    activeKey === key ? 'bg-[#0B8F45] text-white' : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <span>{label}</span>
                  {hasDropdown && <span className="text-[10px]">{schemesOpen ? '▲' : '▼'}</span>}
                </button>
                {hasDropdown && schemesOpen && (
                  <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-[#0B8F45] pl-3">
                    {t.schemes.items.map((scheme, idx) => (
                      <a key={idx} href="#"
                        onClick={(e) => { e.preventDefault(); setSchemesOpen(false); setMobileOpen(false); }}
                        className="py-1.5 text-xs text-white/90 hover:text-white flex items-center gap-2">
                        <span>{scheme.icon}</span>
                        <span>{scheme[lang].label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </nav>
  );
};
