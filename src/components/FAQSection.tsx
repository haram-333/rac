'use client';
import React, { useState } from 'react';

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 8.5L11.955 15.5L4.5 8.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface FAQItem {
  question: string;
  answerHtml: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

const FAQSection = ({ title = "Still not sure? Find answers to your questions", items = [] }: Partial<FAQSectionProps>) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);

  // If no items are passed, try to prevent rendering empty list, but in our case page.tsx will pass them.
  if (!items || items.length === 0) return null;

  const toggle = (i: number) => {
    setOpenIndexes(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIndexes(new Set());
      setAllExpanded(false);
    } else {
      setOpenIndexes(new Set(items.map((_, i) => i)));
      setAllExpanded(true);
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-[#47474a] text-3xl md:text-[28px] font-bold m-0 tracking-tight">
            {title}
          </h2>
          <button
            onClick={toggleAll}
            className="bg-transparent border-none cursor-pointer text-base font-semibold text-[#47474a] underline p-0 hover:text-[#f95108] transition-colors"
          >
            {allExpanded ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        <div className="border-t border-gray-200">
          {items.map((item, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                type="button"
                aria-expanded={openIndexes.has(i)}
                onClick={() => toggle(i)}
                className="w-full bg-transparent border-none py-6 flex justify-between items-center cursor-pointer text-left hover:bg-gray-50 transition-colors px-2 rounded-md"
              >
                <h3 className="text-lg font-semibold text-[#47474a] m-0 pr-4">
                  {item.question}
                </h3>
                <span 
                  className="flex-shrink-0 text-[#f95108] transition-transform duration-300 ease-in-out"
                  style={{ transform: openIndexes.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronIcon />
                </span>
              </button>
              {openIndexes.has(i) && (
                <div 
                  className="pb-6 px-2 text-[#47474a] text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
