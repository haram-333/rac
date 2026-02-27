import React from 'react';

const quickIconUrl = 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltb8e7ca9de42177b9/654b956252ab7e040a3d350c/Quick.svg';
const dailyIconUrl = 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt7ddeb12f1a11f334/654b9561e965d6040a3ddf6e/Daily.svg';
const weeklyIconUrl = 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt19cd3a848a8ffa78/654b9561b3460c040a0b0bdc/Weekly.svg';
const monthlyIconUrl = 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt1ab037a172464633/654b956167092b040a94f395/Monthly.svg';

const types = [
  {
    icon: quickIconUrl,
    alt: 'Hourly insurance clock',
    title: 'Hourly insurance',
    desc: <><strong>Test drive:&nbsp;</strong>hourly car insurance for if you&apos;re planning a test drive or driving your new car home.</>,
  },
  {
    icon: dailyIconUrl,
    alt: 'Day insurance calendar',
    title: 'Day insurance',
    desc: <><strong>Road trip:</strong>&nbsp;one day car insurance so you can share the driving for a personal or business trip.</>,
  },
  {
    icon: weeklyIconUrl,
    alt: 'Weekly insurance calendar',
    title: 'Weekly insurance',
    desc: <><strong>Occasional use:</strong> weekly insurance to borrow your parents&apos; car for a visit home or a short road trip.</>,
  },
  {
    icon: monthlyIconUrl,
    alt: 'Monthly.svg',
    title: 'Monthly insurance',
    desc: <><strong>Extended use:</strong> monthly insurance to borrow a car for a summer break, gap between cars, or long work project.</>,
  },
];

const RacArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform group-hover:translate-x-1">
    <path d="M6 1.33333L15.1756 16L6 30.6667H16.8691L26 16L16.8691 1.33333H6Z" fill="currentColor" />
  </svg>
);

const InsuranceTypes = () => {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#47474a] text-4xl md:text-[2.5rem] font-bold mb-6 tracking-tight">
            How long can you have <span className="text-[#f95108]">temporary car insurance</span> for?
          </h2>
          <p className="text-[#47474a] text-lg md:text-xl text-balance">
            Short-term car insurance offers you complete flexibility available for an hour, a week or a month.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {types.map((t, i) => (
            <div 
              key={i} 
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-6 relative group-hover:scale-110 transition-transform duration-300 ease-in-out p-4 bg-[#f9f9f9] rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.icon} alt={t.alt} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[#47474a] text-xl font-bold mb-4">{t.title}</h3>
              <p className="text-[#47474a] text-base leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://www.dayinsure.com/quote/"
            target="_blank"
            rel="noreferrer"
            className="group inline-block"
          >
            <button className="bg-[#f95108] hover:bg-[#e04806] text-white rounded-lg px-8 py-4 text-xl font-bold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-3">
              Buy short-term car insurance
              <RacArrowIcon />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;
