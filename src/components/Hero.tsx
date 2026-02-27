import React from 'react';

const CAR_SRC = 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltdb5d49466a9be50f/65eefc4096251b695271d37b/CDRSD-683_SEOBanner_TempCar_450hx440w.webp';

const CheckIcon = () => (
  <div style={{ boxSizing: 'border-box', marginRight: 8, marginTop: 4, flexShrink: 0 }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" style={{ fill: 'rgb(71, 71, 74)', verticalAlign: 'middle' }}>
      <path d="M15.636.77c-.152.076-.304.227-.455.38L6.83 9.497c-.075.076-.151.228-.303.304l-.304-.304L2.81 6.083l-.304-.304a1.6 1.6 0 0 0-1.821 0c-.835.683-.835 1.746 0 2.505 1.594 1.594 3.188 3.112 4.706 4.705.151.152.227.228.38.304.682.38 1.29.228 1.897-.38 3.263-3.187 6.451-6.45 9.715-9.639l.227-.227c.456-.532.456-1.518-.076-2.05-.455-.53-1.29-.683-1.897-.227Z"></path>
    </svg>
  </div>
);

const ChevronIcon = () => (
  <span style={{ boxSizing: 'border-box', paddingLeft: 16, display: 'flex' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" style={{ verticalAlign: 'middle' }}>
      <path fill="#fff" d="M6 1.333 15.176 16 6 30.667h10.87L26 16 16.87 1.333H6Z"></path>
    </svg>
  </span>
);

export default function Hero() {
  return (
    <div style={{ backgroundColor: 'white', boxSizing: 'border-box' }}>
      <div className="relative overflow-hidden" style={{
        background: 'linear-gradient(78deg, rgb(255, 255, 255) 65.85%, rgb(97, 181, 156) 66.1%)',
        boxSizing: 'border-box'
      }}>
        <div className="max-w-[1320px] mx-auto px-4 py-8 lg:py-0 flex flex-col lg:flex-row items-center w-full min-h-[450px]">
          <div className="flex flex-wrap w-full m-0">
            {/* Left Content */}
            <div className="w-full lg:w-2/3 px-3 color-[#47474a] order-1">
              <div style={{ marginTop: 32 }}>
                <h1 className="text-3xl lg:text-[44px] leading-tight lg:line-height-[52px] font-bold mb-2 mt-0 text-gray-700">
                  Temporary car insurance
                </h1>
                <p className="text-xl lg:text-2xl leading-snug lg:line-height-[26px] mt-0 mb-4">
                  Need short-term car insurance? Get cover from 1 hour to 30 days.
                </p>
                
                <div className="mt-4 w-full">
                  <ul className="list-none p-0 m-0 mb-4 text-left">
                    {[
                      'Flexible \u2013 add extra days online',
                      'Quick \u2013 get short-term car insurance within minutes',
                      'Fully comprehensive cover for leisure or business use\u00B9',
                      "Protects the vehicle owner's No Claims Discount"
                    ].map((text, i) => (
                      <li key={i} className="flex items-start mb-1 text-base lg:text-lg">
                        <CheckIcon />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 overflow-x-hidden">
                  <div className="flex flex-col sm:flex-row gap-4 text-center">
                    <a href="https://www.dayinsure.com/quote/?referrer=rac" target="_blank" rel="noreferrer" className="no-underline">
                      <span className="bg-rac-orange text-white min-w-full sm:min-w-[220px] min-h-[50px] p-4 rounded bg-orange-600 font-semibold text-lg inline-flex items-center justify-center cursor-pointer">
                        <span className="flex items-center">
                          <span className="text-white-force text-xl lg:text-2xl font-bold">Get a quick quote</span>
                          <ChevronIcon />
                        </span>
                      </span>
                    </a>
                    <a href="https://www.dayinsure.com/myaccount?referrer=RAC" target="_self" rel="noreferrer" className="no-underline">
                      <span className="bg-gray-700 text-white min-w-full sm:min-w-[220px] min-h-[50px] p-4 rounded font-semibold text-lg inline-flex items-center justify-center cursor-pointer">
                        <span className="flex items-center">
                          <span className="text-white-force text-xl lg:text-2xl font-bold">I’m already a customer</span>
                          <ChevronIcon />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/3 min-h-[250px] lg:min-h-[450px] flex items-center justify-center lg:items-end lg:justify-end order-2">
              <img 
                src={CAR_SRC} 
                alt="Orange car" 
                className="max-h-[300px] lg:max-h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark blue bar */}
      <div style={{ backgroundColor: '#386b87', color: '#fff', textAlign: 'center', padding: '12px 16px', fontSize: 16, fontWeight: 500 }}>
        <strong>Existing customer?</strong>{' '}
        <a href="https://www.dayinsure.com/myaccount?referrer=RAC" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Log in</a>{' '}
        to manage your account 24/7
      </div>
    </div>
  );
}
