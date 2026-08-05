import React, { useState } from 'react';
import { LEADER_INFO } from '../data/profileData';
import vijya1 from '../imports/vijya1.jpeg';
import vijya2 from '../imports/vijya2.jpeg';
import vijya3 from '../imports/vijya3.jpeg';

interface ProfileCardProps {
  onContactClick?: () => void;
}

const PROFILE_PHOTOS = [
  { src: vijya2, label: 'Official Campaign (Namaste)', badge: 'YSRCP OFFICIAL' },
  { src: vijya1, label: 'Leader Portrait', badge: 'PORTRAIT' },
  { src: vijya3, label: 'Constituency Visit', badge: 'IN FIELD' },
];

export const ProfileCard: React.FC<ProfileCardProps> = ({ onContactClick }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const activePhoto = PROFILE_PHOTOS[activePhotoIdx];

  const handleDownload = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="widget-box card-hover bg-white border border-[#E3E3E3] shadow-xs mb-3.5 overflow-hidden">
      {/* Circular Leader Portrait Container (Premium YSRCP Design) */}
      <div className="p-4 text-center border-b border-[#E3E3E3] bg-gradient-to-b from-[#f4f7fc] to-[#fafafa]">
        {/* Photo Carousel Container with Side Arrows */}
        <div className="relative flex items-center justify-center gap-3 mb-2.5">
          <button
            onClick={() => setActivePhotoIdx((prev) => (prev === 0 ? PROFILE_PHOTOS.length - 1 : prev - 1))}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#0E4FAE] text-[#0E4FAE] hover:text-white border border-[#d1d5db] shadow-md hover:shadow-lg transition-all flex items-center justify-center text-sm font-black cursor-pointer flex-shrink-0"
            title="Previous Photo"
            aria-label="Previous Photo"
          >
            ‹
          </button>
          
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-[3px] bg-gradient-to-tr from-[#0E4FAE] via-[#0B8F45] to-[#0E4FAE] shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-slate-900">
              <img
                src={activePhoto.src}
                alt={LEADER_INFO.name}
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { (e.target as HTMLImageElement).src = '/vijya2.jpeg'; }}
              />
            </div>
          </div>

          <button
            onClick={() => setActivePhotoIdx((prev) => (prev === PROFILE_PHOTOS.length - 1 ? 0 : prev + 1))}
            className="w-8 h-8 rounded-full bg-white hover:bg-[#0E4FAE] text-[#0E4FAE] hover:text-white border border-[#d1d5db] shadow-md hover:shadow-lg transition-all flex items-center justify-center text-sm font-black cursor-pointer flex-shrink-0"
            title="Next Photo"
            aria-label="Next Photo"
          >
            ›
          </button>
        </div>

        {/* Carousel Indicators & Active Badge */}
        <div className="flex items-center justify-center gap-1.5 mb-3">
          {PROFILE_PHOTOS.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhotoIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activePhotoIdx ? 'w-5 bg-[#0E4FAE]' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              title={photo.label}
              aria-label={photo.label}
            />
          ))}
          <span className="ml-2 text-[10px] font-extrabold text-[#0B8F45] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wider">
            {activePhoto.badge}
          </span>
        </div>

        {/* Leader Name */}
        <h2 className="font-extrabold text-base sm:text-lg text-[#111111] leading-tight mb-1">
          Sri {LEADER_INFO.name}
        </h2>
        <div className="text-xs font-bold text-[#0E4FAE] mb-2">
          {LEADER_INFO.status} ({LEADER_INFO.constituency})
        </div>
        <p className="text-[11px] text-gray-600 leading-snug mb-3 px-2">
          Senior YSRCP Leader & Assembly In-Charge for Chittoor Constituency. Committed to public welfare, rural empowerment, and sustainable development.
        </p>

        {/* Badges */}
        <div className="flex justify-center flex-wrap gap-1.5">
          <span className="bg-[#0B8F45] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-xs tracking-wider uppercase shadow-xs">
            {LEADER_INFO.party}
          </span>
          <span className="bg-[#0E4FAE] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-xs tracking-wider uppercase shadow-xs">
            CHITTOOR MLA CANDIDATE
          </span>
        </div>
      </div>

      {/* Highlight Constituency Info Row & Action Buttons */}
      <div className="p-3">
        <div className="bg-[#f9f9f9] border border-[#E3E3E3] p-2 text-xs mb-3 flex items-center justify-between">
          <span className="text-gray-600 font-medium">Constituency:</span>
          <span className="font-bold text-gray-900">{LEADER_INFO.constituency}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleDownload}
            className="btn-primary w-full text-center py-2 px-3 text-xs font-bold flex items-center justify-center gap-1.5 rounded-xs shadow-2xs"
            title="Download PDF Profile"
          >
            <span>⬇</span>
            <span>Download Profile</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => setShowShareModal(true)}
              className="btn-secondary flex-1 text-center py-1.5 px-2 text-xs font-semibold flex items-center justify-center gap-1 rounded-xs"
              title="Share Profile"
            >
              <span>↗</span>
              <span>Share</span>
            </button>

            <button
              onClick={onContactClick}
              className="btn-green flex-1 text-center py-1.5 px-2 text-xs font-semibold flex items-center justify-center gap-1 rounded-xs"
              title="Contact Office"
            >
              <span>📞</span>
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>

      {/* Share Modal Dialog */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xs border-2 border-[#0E4FAE] max-w-sm w-full p-4 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg font-bold w-6 h-6 flex items-center justify-center"
            >
              ✕
            </button>
            <h3 className="text-sm font-bold text-[#0E4FAE] uppercase border-b border-gray-200 pb-2 mb-3">
              Share Leader Profile
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Share M.C. Vijayananda Reddy's official political profile with supporters and voters:
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                readOnly
                value={window.location.href}
                className="bg-gray-100 border border-gray-300 text-xs px-2 py-1.5 rounded flex-1 text-gray-700 select-all"
              />
              <button
                onClick={handleCopyLink}
                className="bg-[#0E4FAE] hover:bg-[#0a3d8a] text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="flex justify-center gap-3 pt-2 border-t border-gray-100">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out M.C. Vijayananda Reddy profile: ' + window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1 hover:opacity-90"
              >
                <span>💬 WhatsApp</span>
              </a>
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1877F2] text-white text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1 hover:opacity-90"
              >
                <span>f Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
