'use client';
import React, { useRef } from 'react';

const RacArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1.33333L15.1756 16L6 30.6667H16.8691L26 16L16.8691 1.33333H6Z" fill="currentColor" />
  </svg>
);

const guides = [
  {
    img: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt1d99054ddf6333c9/697cbe6755beff4dc73196e2/bank-holiday-traffic-13m.webp',
    alt: 'bank-holiday-traffic-13m.webp',
    title: 'Temporary car insurance for non-UK residents',
    desc: "Here's all you need to know about driving in the UK if you're not a resident.",
    href: 'https://www.rac.co.uk/drive/advice/insurance/temporary-car-insurance-for-non-UK-residents/',
  },
  {
    img: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blta99caa9342cd765d/697cbe675925eb3218702b6f/Car_insurance_myths_(1).webp',
    alt: 'Car_insurance_myths_(1).webp',
    title: 'Seven car insurance myths debunked',
    desc: 'Did you believe any of these 7 myths? Separate fact from fiction here.',
    href: 'https://www.rac.co.uk/drive/advice/buying-and-selling-guides/car-insurance-myths/',
  },
  {
    img: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltb900826e3582ab1d/697cbe67a4aa1e57b4ff1a0a/how_to_pack_for_university.webp',
    alt: 'how_to_pack_for_university.webp',
    title: 'Driving to university?',
    desc: 'Find out everything you need to know before you make the big first trip to uni.',
    href: 'https://www.rac.co.uk/drive/advice/driving-advice/a-complete-guide-to-driving-to-university/',
  },
  {
    img: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt543705b1cec0a771/697cbe670988beae6546f5b7/how-to-pack-for-a-road-trip-temporary-insurance.webp',
    alt: 'how-to-pack-for-a-road-trip-temporary-insurance.webp',
    title: 'Heading on a road trip?',
    desc: "From what to pack to the insurance you need, here's everything you need to know before you set off.",
    href: 'https://www.rac.co.uk/drive/travel/driving-in-europe/how-to-prepare-for-a-road-trip/',
  },
  {
    img: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/bltb95b509e389e785b/697cbe67a648eeb101539d94/1_0x0_790x520_0x520_how_to_get_car_insurance_abroad.webp',
    alt: '1_0x0_790x520_0x520_how_to_get_car_insurance_abroad.webp',
    title: 'Can I get car insurance abroad?',
    desc: "Find out whether your insurance covers you for driving abroad, and important things to think about before your trip.",
    href: 'https://www.rac.co.uk/drive/travel/driving-in-europe/car-insurance-for-driving-abroad',
  },
  {
    img: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt4b8a1d4a343bec01/6819ec0937907f9b8d5fc803/1_0x0_790x520_0x520_not-be-covered-car-insurance.jpg',
    alt: '1_0x0_790x520_0x520_not-be-covered-car-insurance.jpg',
    title: 'Does my insurance cover this?',
    desc: 'Here are 8 situations where your standard car insurance might not cover you.',
    href: 'https://www.rac.co.uk/drive/advice/buying-and-selling-guides/8-things-you-might-do-and-not-be-covered-by-your-car-insurance/',
  },
  {
    img: 'https://images.contentstack.io/v3/assets/bltf298597f74081431/blt1536afb1ea1993d7/697cbe674bd0199fb3c48a5c/moving-house-yourself-own-car.webp',
    alt: 'moving-house-yourself-own-car.webp',
    title: 'Moving house?',
    desc: "Here's what you need to do about your car and driving licence when you change address.",
    href: 'https://www.rac.co.uk/drive/advice/driving-advice/a-guide-to-moving-home-yourself-and-with-your-own-car/',
  },
];

const GuidesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 280;

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * CARD_WIDTH, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 12px' }}>
        <h2 style={{ fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '28px', fontWeight: 700, color: '#47474a', marginBottom: '24px' }}>
          Temporary car insurance guides
        </h2>
        <div style={{ position: 'relative' }}>
          <div
            ref={scrollRef}
            style={{ display: 'flex', gap: '24px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '8px' }}
          >
            {guides.map((g, i) => (
              <div key={i} style={{ flex: '0 0 260px', scrollSnapAlign: 'start', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.alt} style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '16px' }}>
                  <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#47474a', marginBottom: '8px', lineHeight: '1.3' }}>{g.title}</h2>
                  <p style={{ fontSize: '14px', color: '#47474a', lineHeight: '20px', marginBottom: '16px' }}>{g.desc}</p>
                  <a href={g.href} target="_self" style={{ textDecoration: 'none' }}>
                    <button style={{ backgroundColor: '#f95108', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px 16px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      Find out more
                      <RacArrowIcon />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          <button
            onClick={() => scrollBy(-1)}
            style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" style={{ transform: 'rotate(180deg)' }}>
              <path stroke="#386C87" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.833 8.105 27.5 20.68 15.833 33.105" />
            </svg>
          </button>
          <button
            onClick={() => scrollBy(1)}
            style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none">
              <path stroke="#386C87" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.833 8.105 27.5 20.68 15.833 33.105" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidesCarousel;
