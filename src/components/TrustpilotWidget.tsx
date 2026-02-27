import React from 'react';
import { Star } from 'lucide-react';

const TrustpilotWidget = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-[#202020] mb-4">
          What customers are saying about our partner Dayinsure on Trustpilot
        </h3>
        <p className="text-[#47474a] mb-8 max-w-2xl mx-auto">
          Our partners Dayinsure have a 4.7 rating with over 60,000 reviews on Trustpilot (09/01/2026).
        </p>
        
        {/* Mock Trustpilot Widget */}
        <div className="bg-[#f8f8f8] p-8 rounded-xl max-w-4xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-8 h-8 flex items-center justify-center mr-1 ${i <= 4 ? 'bg-[#00b67a]' : 'bg-[#e0e0e0]'} text-white`}>
                    <Star className="fill-current w-5 h-5" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#47474a] font-semibold">TrustScore 4.7 | 60,000+ reviews</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-black">Trustpilot</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                name: "Sarah J.",
                text: "Easy to use and quick turn around for the policy.",
                stars: 5
              },
              {
                name: "Mark T.",
                text: "Great value and clear information provided.",
                stars: 5
              },
              {
                name: "Emily R.",
                text: "Saved me in a pinch when I needed to borrow a car.",
                stars: 4
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm text-left">
                <div className="flex border-b border-gray-100 pb-2 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`w-3 h-3 ${i <= review.stars ? 'text-[#00b67a] fill-[#00b67a]' : 'text-gray-200 fill-gray-200'}`} />
                  ))}
                </div>
                <p className="text-xs text-[#47474a] mb-2 uppercase">"{review.text}"</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotWidget;
