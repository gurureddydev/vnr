import React from 'react';
import { TICKER_NEWS } from '../data/profileData';

export const NewsTicker: React.FC = () => {
  return (
    <div className="bg-white border-y border-[#E3E3E3] h-9 flex items-center overflow-hidden select-none">
      <div className="max-w-[1200px] mx-auto w-full flex items-center overflow-hidden px-3">
        {/* Ticker marquee container */}
        <div className="overflow-hidden flex-1 relative">
          <div className="ticker-inner text-xs text-[#222] font-semibold py-1">
            {/* Duplicate array for seamless infinite scroll */}
            {[...TICKER_NEWS, ...TICKER_NEWS].map((item, index) => (
              <span key={index} className="inline-flex items-center">
                <span className="hover:text-[#0E4FAE] cursor-pointer transition-colors">
                  {item}
                </span>
                {/* YSRCP Party Circular Flag Emblem Separator */}
                <span className="inline-flex items-center justify-center mx-4">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0B8F45] border border-white shadow-sm flex items-center justify-center text-[7px] text-white font-bold">
                    ⚡
                  </span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
