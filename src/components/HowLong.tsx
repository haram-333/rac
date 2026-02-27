import React from 'react';

export default function HowLong() {
  return (
    <section className="py-12 px-4 bg-gray-50 text-gray-700">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 border-l-8 border-rac-orange pl-6">
          How long can you have temporary car insurance for?
        </h2>
        
        <p className="text-lg lg:text-xl leading-relaxed mb-6">
          You can get short-term cover for anything from 1 hour to 30 days. It's really flexible, so you can choose the exact amount of time that suits you.
        </p>
        
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          Best of all, you can get a quote in minutes. Just give us a few details about yourself and the car you'll be driving, and we'll show you how much your cover will cost.
        </p>

        <a href="https://www.dayinsure.com/quote/?referrer=rac" 
           className="bg-rac-orange text-white px-8 py-4 rounded font-bold text-xl inline-block no-underline hover:bg-orange-600 transition-colors">
          Get a quick quote
        </a>
      </div>
    </section>
  );
}
