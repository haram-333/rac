import React from 'react';

export default function UseCases() {
  const cases = [
    { title: 'Borrowing a car', description: 'To get from A to B while yours is in the garage.' },
    { title: 'Lending a car', description: 'So a friend or family member can share the driving.' },
    { title: 'Test driving a car', description: 'To make sure it\'s the right one for you.' },
    { title: 'Buying a car', description: 'To drive it home from the dealership or a private seller.' },
  ];

  return (
    <section className="py-12 px-4 bg-white text-gray-700">
      <div className="max-w-[1320px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 border-l-8 border-rac-orange pl-6">
          When could you use short-term car insurance?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
