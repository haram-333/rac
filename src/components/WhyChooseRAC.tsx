import React from 'react';

const IconPlaceholder = () => (
  <div style={{ width: 48, height: 48, backgroundColor: '#f9f9f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#47474a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

export default function WhyChooseRAC() {
  const points = [
    { title: 'Fully comprehensive cover', description: 'Protected as standard.' },
    { title: 'No Claims Discount protected', description: 'If you have an accident, yours or the car owners NCD won\'t be affected.' },
    { title: 'Fast and easy', description: 'Get a quote in minutes and cover starts immediately.' },
    { title: 'Flexible cover', description: 'Choose from 1 hour to 30 days.' },
    { title: 'Cover for almost everyone', description: 'If you\'re aged 17-75 and have a full UK licence.' },
    { title: 'Business cover included', description: 'Perfect for temporary work needs.' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 text-gray-700">
      <div className="max-w-[1320px] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 border-l-8 border-rac-orange pl-6">
          Why choose RAC short-term car insurance?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {points.map((point, i) => (
            <div key={i} className="flex items-start text-gray-700">
              <div className="mr-4 mt-1 flex-shrink-0 text-rac-orange">
                {/* Assuming IconPlaceholder is the intended icon, or replace with actual icon component/SVG */}
                <IconPlaceholder />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-base leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
