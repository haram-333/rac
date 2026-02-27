import React from 'react';

const benefitIconUrls = {
  calloutTime: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt1b26e8852566ce82/654b9561d57b58040a59747a/Callout_time.svg',
  vehicle: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt4441c634fccda4e6/654b95bbecbd1c040a7ee52a/Vehicle.svg',
  quick: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltb8e7ca9de42177b9/654b956252ab7e040a3d350c/Quick.svg',
  care: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltf836febf4e4ab89a/654b949c2e735d040a9fb620/Care.svg',
};

const benefits = [
  {
    icon: benefitIconUrls.calloutTime,
    alt: 'RAC recovery rate icon',
    title: 'Super flexible',
    description: <>Temp cover for 1 hour to 30 days. And add extra hours online if you need to.<a href="#terms-5" className="text-[#47474a] hover:underline ml-1"><sup>5</sup></a></>,
  },
  {
    icon: benefitIconUrls.vehicle,
    alt: 'Vehicle icon',
    title: 'Comprehensive',
    description: <>You&apos;re fully covered with a temporary car insurance policy – for leisure or&nbsp;<a href="/insurance/temporary-car-insurance/business-use" className="text-[#f95108] hover:underline hover:text-[#e04806]">business use</a><a href="#terms-1" className="text-[#47474a] ml-1"><sup>1</sup></a>.</>,
  },
  {
    icon: benefitIconUrls.quick,
    alt: 'Hourly insurance clock',
    title: 'Quick and easy',
    description: 'Get covered within 15 minutes. Or buy up to 28 days in advance.',
  },
  {
    icon: benefitIconUrls.care,
    alt: 'Hand in hand icon',
    title: 'Claim confidently',
    description: "Making a claim on your temporary cover won't affect the vehicle owner's No Claims Discount.*",
  },
];

const BenefitGrid = () => {
  return (
    <section className="bg-[#f2f4f5] py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <h2 className="text-[#47474a] text-[2.5rem] font-bold text-center mb-12 tracking-tight">
          Why choose RAC short-term car insurance?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group cursor-pointer"
            >
              <div className="mb-6 h-16 w-16 bg-[#eef1f2] rounded-full flex items-center justify-center group-hover:bg-[#f95108]/10 transition-colors">
                <img 
                  src={benefit.icon} 
                  alt={benefit.alt} 
                  className="w-8 h-8 object-contain"
                />
              </div>
              
              <h3 className="text-[#47474a] text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-[#47474a] text-base leading-relaxed text-balance">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitGrid;
