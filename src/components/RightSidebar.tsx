import React from 'react';
import { LEADER_INFO, SOCIAL_LINKS } from '../data/profileData';
import { useLang } from '../context/LanguageContext';
import { t, tx } from '../data/translations';

interface RightSidebarProps {
  onContactClick?: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ onContactClick }) => {
  const { lang } = useLang();
  const s = t.sidebar;

  return (
    <aside className="w-full lg:w-[240px] flex-shrink-0 flex flex-col gap-3.5">

      {/* ─── WIDGET 1: LEADER INFORMATION ─── */}
      <div className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs font-bold px-3 py-2 uppercase tracking-wide">
          {tx(s.leaderInfo, lang)}
        </div>
        <div className="divide-y divide-[#f0f0f0] text-xs">
          {[
            { label: s.moniker,    value: LEADER_INFO.moniker, bold: true, blue: true },
            { label: s.dob,        value: LEADER_INFO.dob,     bold: false },
            { label: s.fatherName, value: LEADER_INFO.fatherName, bold: false },
            { label: s.motherName, value: LEADER_INFO.motherName, bold: false },
            { label: s.spouseName, value: LEADER_INFO.spouseName, bold: false },
            { label: s.age,        value: `${LEADER_INFO.age}`,   bold: false },
            { label: s.party,      value: tx(s.partyEmblem, lang), bold: true, green: true },
            { label: s.profession, value: tx(s.professionValue, lang), bold: false },
            { label: s.constituency, value: lang === 'en' ? LEADER_INFO.constituency : 'చిత్తూరు', bold: true },
            { label: s.village,    value: LEADER_INFO.village, bold: false },
            { label: s.education,  value: lang === 'en' ? 'B.Com (OUS) – Viswa Bharathi Univ.' : 'బి.కాం (OUS) – విశ్వ భారతి విశ్వవిద్యాలయం', bold: false },
            { label: { en: 'Election', te: 'ఎన్నిక' }, value: tx(s.electionValue, lang), bold: true, blue: true },
          ].map((row, i) => (
            <div key={i} className="p-2 px-3 flex justify-between">
              <span className="text-gray-500 font-semibold min-w-[95px]">
                {typeof row.label === 'string' ? row.label : tx(row.label as {en:string;te:string}, lang)}
              </span>
              <span className={`font-${row.bold ? 'bold' : 'medium'} text-right ${
                (row as any).green ? 'text-[#0B8F45]' : (row as any).blue ? 'text-[#0E4FAE]' : 'text-gray-900'
              }`}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── WIDGET 2: ELECTION INFORMATION ─── */}
      <div id="constituency" className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs font-bold px-3 py-2 uppercase tracking-wide">
          {tx(s.electionInfo, lang)}
        </div>
        <table className="w-full text-xs border-collapse">
          <tbody>
            <tr className="border-b border-[#E3E3E3]">
              <td className="p-2 px-3 text-gray-600 font-semibold w-1/2">{tx(s.constituency, lang)}</td>
              <td className="p-2 px-3 text-gray-900 font-bold">{lang === 'en' ? LEADER_INFO.constituency : 'చిత్తూరు'}</td>
            </tr>
            <tr className="border-b border-[#E3E3E3]">
              <td className="p-2 px-3 text-gray-600 font-semibold">{tx(s.partNumber, lang)}</td>
              <td className="p-2 px-3 text-gray-900 font-bold">{LEADER_INFO.partNumber}</td>
            </tr>
            <tr className="border-b border-[#E3E3E3]">
              <td className="p-2 px-3 text-gray-600 font-semibold">{tx(s.serialNumber, lang)}</td>
              <td className="p-2 px-3 text-gray-900 font-bold">{LEADER_INFO.serialNumber}</td>
            </tr>
            <tr>
              <td className="p-2 px-3 text-gray-600 font-semibold">{tx(s.voterStatus, lang)}</td>
              <td className="p-2 px-3 text-[#0B8F45] font-bold">✓ {tx(s.voterStatusValue, lang)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ─── WIDGET 3: OFFICIAL SOCIAL MEDIA HANDLES ─── */}
      <div className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs font-bold px-3 py-2 uppercase tracking-wide flex items-center justify-between">
          <span>{lang === 'en' ? 'Official Social Media' : 'అధికారిక సోషల్ మీడియా'}</span>
          <span className="text-[10px] bg-white/20 text-white font-normal px-1.5 py-0.5 rounded-xs">
            Connect
          </span>
        </div>
        <div className="p-3 space-y-2 text-xs">
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-bold transition-colors group"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">▶</span>
              <span>YouTube Channel</span>
            </div>
            <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-extrabold group-hover:bg-red-700">
              Subscribe
            </span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded bg-pink-50 hover:bg-pink-100 border border-pink-200 text-pink-700 font-bold transition-colors group"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">📷</span>
              <span>Instagram</span>
            </div>
            <span className="text-[10px] bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded font-extrabold">
              Follow
            </span>
          </a>

          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 font-bold transition-colors group"
          >
            <div className="flex items-center gap-2">
              <span className="text-base font-black">𝕏</span>
              <span>X (Twitter)</span>
            </div>
            <span className="text-[10px] bg-sky-600 text-white px-2 py-0.5 rounded font-extrabold group-hover:bg-sky-700">
              Follow
            </span>
          </a>

          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-bold transition-colors group"
          >
            <div className="flex items-center gap-2">
              <span className="text-base font-black">f</span>
              <span>Facebook Page</span>
            </div>
            <span className="text-[10px] bg-blue-700 text-white px-2 py-0.5 rounded font-extrabold group-hover:bg-blue-800">
              Like Page
            </span>
          </a>
        </div>
      </div>

      {/* ─── WIDGET 4: POLITICAL POSITIONS ─── */}
      <div className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs font-bold px-3 py-2 uppercase tracking-wide">
          {tx(s.politicalPositions, lang)}
        </div>
        <div className="p-3 space-y-2">
          {s.positions.map((pos, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 text-xs text-gray-800 ${
                index < s.positions.length - 1 ? 'pb-2 border-b border-[#E3E3E3]' : ''
              }`}
            >
              <span className="text-[#0B8F45] font-bold text-sm leading-none">•</span>
              <span className="leading-tight font-medium">{pos[lang]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── WIDGET 5: CONSTITUENCY OFFICE CONTACT ─── */}
      <div id="contact" className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs font-bold px-3 py-2 uppercase tracking-wide">
          {tx(s.contactTitle, lang)}
        </div>
        <div className="p-3 text-xs text-gray-700 space-y-2.5">
          <p className="text-gray-600 leading-relaxed">
            {lang === 'en'
              ? 'For party-related queries, constituency development suggestions, or to visit the office:'
              : 'పార్టీ సంబంధిత విచారణలు, నియోజకవర్గ అభివృద్ధి సూచనలు లేదా కార్యాలయాన్ని సందర్శించడానికి:'}
          </p>
          <div className="space-y-1.5 font-medium">
            <div className="flex items-center gap-2 text-gray-900">
              <span className="text-[#0B8F45]">📞</span>
              <span>{LEADER_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-900">
              <span className="text-[#0B8F45]">✉</span>
              <span className="truncate">{LEADER_INFO.email}</span>
            </div>
            <div className="flex items-start gap-2 text-gray-900">
              <span className="text-[#0B8F45]">📍</span>
              <span className="leading-tight">{tx(s.contactAddress, lang)}</span>
            </div>
          </div>
          <button
            onClick={onContactClick}
            className="btn-green w-full py-1.5 px-3 text-xs font-bold rounded-xs shadow-2xs mt-1"
          >
            {tx(s.contactBtn, lang)}
          </button>
        </div>
      </div>

      {/* ─── WIDGET 6: YSR CONGRESS PARTY EMBLEM ─── */}
      <div className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs">
        <div className="section-title bg-[#0E4FAE] text-white text-xs font-bold px-3 py-2 uppercase tracking-wide text-center">
          {tx(s.partyEmblem, lang)}
        </div>
        <div className="p-3.5 text-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0E4FAE] to-[#0B8F45] mx-auto mb-2 flex items-center justify-center shadow-md">
            <span className="text-white text-2xl">🌀</span>
          </div>
          <div className="font-extrabold text-xs text-[#0E4FAE] mb-1">{tx(s.partyEmblem, lang)}</div>
          <div className="text-[11px] text-gray-500 leading-tight mb-2.5">
            {tx(s.partyFounder, lang)}
          </div>
          <a href="https://ysrcp.com" target="_blank" rel="noreferrer" className="inline-block text-xs text-[#0E4FAE] font-bold hover:underline">
            {tx(s.partyOfficial, lang)} »
          </a>
        </div>
      </div>

    </aside>
  );
};
