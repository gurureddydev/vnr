import React from 'react';
import { TICKER_NEWS } from '../data/profileData';

export const NewsTicker: React.FC = () => {
  return (
    <div className="bg-[#f4f4f4] border-y border-[#E3E3E3] h-8 flex items-center overflow-hidden select-none px-3">
      <div className="w-full flex items-center overflow-hidden">
        {/* Ticker marquee container */}
        <div className="overflow-hidden flex-1 relative">
          <div className="ticker-inner text-[11px] text-[#222222] font-extrabold py-0.5 tracking-tight">
            {/* Duplicate array for seamless infinite scroll */}
            {[...TICKER_NEWS, ...TICKER_NEWS].map((item, index) => (
              <span key={index} className="inline-flex items-center">
                <span className="hover:text-[#0E4FAE] cursor-pointer transition-colors">
                  *{item}*
                </span>
                {/* ysrcongress.com Globe / Flag Separator */}
                <span className="inline-flex items-center justify-center mx-4 text-xs">
                  🌐
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
