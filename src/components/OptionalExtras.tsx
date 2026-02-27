import React from 'react';

const RacArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1.33333L15.1756 16L6 30.6667H16.8691L26 16L16.8691 1.33333H6Z" fill="currentColor" />
  </svg>
);

const extras = [
  {
    imgUrl: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltfb2d69ec2a7b4176/6819dd39b7c4fc424f699e3e/PartsandTools_RGB.svg',
    alt: 'PartsandTools_RGB.svg',
    title: 'RAC Breakdown Cover',
    description: <>Give yourself peace of mind when on the road with our 5-Star Defaqo{' '}<a href="https://www.rac.co.uk/breakdown-cover" style={{ color: '#f95108' }}>breakdown cover</a>. We&apos;ll come out to you if you run into any complications on your short-term trip.</>,
  },
  {
    imgUrl: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blte8a685e6010274e6/6819dd3a37907f15f85fc73d/Travel_RGB.svg',
    alt: 'Travel_RGB.svg',
    title: 'European car insurance cover',
    description: <>Planning a short{' '}<a href="https://www.rac.co.uk/drive/travel/advice/checklist/" style={{ color: '#f95108' }}> road trip in Europe?</a> You can get{' '}<a href="https://www.rac.co.uk/insurance/car-insurance" style={{ color: '#f95108' }}>car insurance</a> that covers travel in the EU, EEA, and Switzerland. This means you&apos;re protected if you have an accident.</>,
  },
  {
    imgUrl: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltb8445cd352be88c4/6819dd3c0bf88dfee6d3bd4e/ThumbsUp_RGB.svg',
    alt: 'ThumbsUp_RGB.svg',
    title: 'Excess protection',
    description: 'Reimbursement for any excess charges, if you need to make a claim during your short-term trip with our excess protection.',
  },
];

const OptionalExtras = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 12px' }}>
        <h2 style={{ fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '28px', fontWeight: 700, color: '#47474a', marginBottom: '8px' }}>
          Optional extras for temporary car insurance
        </h2>
        <p style={{ color: '#47474a', fontSize: '16px', lineHeight: '24px', marginBottom: '32px' }}>
          We want your cover to be tailored to exactly what you need so there are a few optional extras that you can add to make sure it&apos;s perfect:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>
          {extras.map((extra, i) => (
            <div key={i} style={{ flex: '1 1 240px', backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ width: '80px', height: '80px', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={extra.imgUrl} alt={extra.alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#47474a', margin: 0 }}>{extra.title}</h3>
              <p style={{ color: '#47474a', fontSize: '15px', lineHeight: '22px', margin: 0 }}>{extra.description}</p>
            </div>
          ))}
        </div>

        {/* Trustpilot section */}
        <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#47474a', marginBottom: '8px' }}>
            What customers are saying about our partner Dayinsure on Trustpilot
          </h3>
          <p style={{ color: '#47474a', fontSize: '15px', marginBottom: '16px' }}>
            Our partners Dayinsure have a 4.7 rating with over 60,000 reviews on Trustpilot (09/01/2026).
          </p>
          <div
            data-locale="en-GB"
            data-template-id="53aa8912dec7e10d38f59f36"
            data-businessunit-id="4d088cd900006400050e43e5"
            data-style-height="140px"
            data-style-width="100%"
            data-theme="light"
            data-stars="4,5"
            data-review-languages="en"
            data-text-color="#47474a"
            style={{ minHeight: '140px', backgroundColor: '#f9f9f9', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '14px' }}
          >
            [Trustpilot widget]
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <a href="https://www.dayinsure.com/quote/?referrer=rac&_ga=2.235382597.510826191.1733737464-2132109221.1723111554" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#f95108', color: '#fff', border: 'none', borderRadius: '6px', padding: '16px 24px', fontSize: '20px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Protect your vehicle
              <RacArrowIcon />
            </button>
          </a>
          <a href="https://www.dayinsure.com/myaccount?referrer=RAC&_ga=2.192097581.644700040.1699885036-850060300.1699885035" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#fff', color: '#47474a', border: '0.8px solid #47474a', borderRadius: '6px', padding: '16px 24px', fontSize: '20px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Extend your cover online
              <RacArrowIcon />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OptionalExtras;
