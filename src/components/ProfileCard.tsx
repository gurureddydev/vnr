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
      {/* Large Leader Portrait Container */}
      <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden border-b border-[#E3E3E3] group">
        <img
          src={activePhoto.src}
          alt={LEADER_INFO.name}
          className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-102"
        />
        {/* Subtle Watermark Badge */}
        <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-xs backdrop-blur-xs">
          {activePhoto.badge}
        </div>

        {/* Image switcher thumbnail bar overlaid at bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full shadow-lg border border-white/20">
          {PROFILE_PHOTOS.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhotoIdx(idx)}
              className={`w-6 h-6 rounded-full overflow-hidden border-2 transition-all ${
                activePhotoIdx === idx
                  ? 'border-[#0B8F45] scale-110 shadow-sm'
                  : 'border-white/50 opacity-70 hover:opacity-100'
              }`}
              title={photo.label}
            >
              <img src={photo.src} alt={photo.label} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      </div>

      {/* Leader Name & Details Block */}
      <div className="p-3">
        <h2 className="font-extrabold text-sm sm:text-base text-[#111111] uppercase tracking-wide leading-tight mb-1">
          {LEADER_INFO.name}
        </h2>
        <div className="text-xs font-semibold text-[#555555] mb-2.5">
          {LEADER_INFO.constituency.toUpperCase()} (CHITTOOR)
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="bg-[#0B8F45] text-white text-[11px] font-bold px-2 py-0.5 rounded-xs tracking-wide">
            {LEADER_INFO.party}
          </span>
          <span className="bg-[#0E4FAE] text-white text-[11px] font-bold px-2 py-0.5 rounded-xs tracking-wide">
            {LEADER_INFO.status}
          </span>
        </div>

        {/* Highlight Constituency Info Row */}
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
