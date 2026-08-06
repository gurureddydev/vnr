import React from 'react';

export const Breadcrumb: React.FC = () => {
  return (
    <div className="w-full bg-[#f8f9fa] border-b border-[#E3E3E3]">
      <div className="max-w-[1200px] mx-auto px-3 py-2 text-xs text-[#666] flex items-center flex-wrap gap-1">
        <a href="#" className="text-[#0E4FAE] hover:underline font-semibold">
          Home
        </a>
        <span className="text-gray-400">»</span>
        <a href="#" className="text-[#0E4FAE] hover:underline font-semibold">
          Party Members
        </a>
        <span className="text-gray-400">»</span>
        <a href="#" className="text-[#0E4FAE] hover:underline font-semibold">
          MLAs Candidate
        </a>
        <span className="text-gray-400">»</span>
        <span className="text-gray-900 font-bold">M.C. Vijayananda Reddy</span>
      </div>
    </div>
  );
};

export const PageHeaderStrip: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-[#E3E3E3] shadow-2xs">
      <div className="max-w-[1200px] mx-auto px-3 py-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-6 bg-[#0B8F45] rounded-xs" />
          <h1 className="text-base sm:text-lg font-extrabold text-[#111111] uppercase tracking-wide">
            Leader Profile – M.C. Vijayananda Reddy
          </h1>
        </div>
      </div>
    </div>
  );
};
