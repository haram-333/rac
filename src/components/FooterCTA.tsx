import React from 'react';

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
    <path fill="#fff" d="M6 1.333 15.176 16 6 30.667h10.87L26 16 16.87 1.333H6Z"></path>
  </svg>
);

export default function FooterCTA() {
  return (
    <div className="w-full bg-white py-16 flex flex-col items-center justify-center border-t border-gray-100">
      <h2 className="text-3xl md:text-[32px] font-bold text-[#47474a] mb-8 text-center px-4">
        What are you waiting for? Get a quote today.
      </h2>
      <a 
        href="#" 
        className="bg-[#f95108] hover:bg-[#ff6f26] text-white text-xl font-bold py-4 px-10 rounded-md flex items-center justify-center gap-3 transition-colors shadow-sm"
        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        Get a quote
        <ChevronRight />
      </a>
    </div>
  );
}
