import React from 'react';

export default function IntroSection() {
  return (
    <section className="py-8 lg:py-12 px-4 bg-white text-gray-700">
      <div className="max-w-[1320px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-6 lg:mb-8 text-sm flex flex-wrap items-center">
          <span className="text-gray-600">Home</span>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-gray-600">Insurance</span>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-gray-800 font-bold">Temporary car insurance</span>
        </nav>

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 border-l-8 border-rac-orange pl-6">
          What is temporary car insurance?
        </h2>
        
        {/* Description */}
        <p className="text-lg lg:text-xl leading-relaxed mb-6">
          Temporary car insurance is short-term cover that lasts from 1 hour up to 30 days. It gives you the same level of cover as a standard annual policy, but for a much shorter period of time.
        </p>
        <p className="text-lg lg:text-xl leading-relaxed">
          Short-term cover is perfect if you only need car insurance for a short period. For example, if you're borrowing a car from a friend or family member, or if you're test driving a car you want to buy.
        </p>
      </div>
    </section>
  );
}
