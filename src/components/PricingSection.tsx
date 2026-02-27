import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none">
    <path d="M15.636.77c-.152.076-.304.227-.455.38L6.83 9.497c-.075.076-.151.228-.303.304l-.304-.304L2.81 6.083l-.304-.304a1.6 1.6 0 0 0-1.821 0c-.835.683-.835 1.746 0 2.505 1.594 1.594 3.188 3.112 4.706 4.705.151.152.227.228.38.304.682.38 1.29.228 1.897-.38 3.263-3.187 6.451-6.45 9.715-9.639l.227-.227c.456-.532.456-1.518-.076-2.05-.455-.53-1.29-.683-1.897-.227Z" fill="#f95108" />
  </svg>
);

const RacArrowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1.33333L15.1756 16L6 30.6667H16.8691L26 16L16.8691 1.33333H6Z" fill="currentColor" />
  </svg>
);

const pricingData = {
  hourly: [
    { label: '1 hour', price: '£25.61' },
    { label: '2 hours', price: '£27.03' },
    { label: '3 hours', price: '£29.68' },
    { label: '4 hours', price: '£33.89' },
  ],
  daily: [
    { label: '1 day', price: '£35.85' },
    { label: '2 days', price: '£52.91' },
    { label: '3 days', price: '£64.89' },
    { label: '4 days', price: '£77.06' },
  ],
  weekly: [
    { label: '1 week', price: '£98.20' },
    { label: '2 weeks', price: '£138.15' },
    { label: '3 weeks', price: '£169.73' },
    { label: '4 weeks', price: '£208.11' },
  ],
};

const PricingSection = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '40px 0' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 12px' }}>
        <h2 style={{ fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '28px', fontWeight: 700, color: '#47474a', marginBottom: '8px' }}>
          How much is&nbsp;temporary car insurance?
        </h2>
        <p style={{ color: '#47474a', fontSize: '16px', lineHeight: '24px', marginBottom: '4px' }}>
          The cost of short-term car insurance will depend on your situation and vehicle. Things like your location and policy duration can make a difference. Also, your type of car and driving history can impact how much you pay for temporary car insurance.
        </p>
        <p style={{ color: '#47474a', fontSize: '16px', lineHeight: '24px', marginBottom: '24px' }}>
          <strong>These are average prices<a href="#terms-4" style={{ color: '#47474a' }}><sup>4</sup></a>:</strong>
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
          {/* Hourly */}
          <div style={{ flex: '1 1 220px', backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#47474a', marginBottom: '16px' }}>Hourly car insurance </h4>
            {pricingData.hourly.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <CheckIcon />
                <span style={{ color: '#47474a', fontSize: '15px' }}>{item.label} – {item.price}</span>
              </div>
            ))}
          </div>

          {/* Daily */}
          <div style={{ flex: '1 1 220px', backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#47474a', marginBottom: '16px' }}>Day car insurance </h4>
            {pricingData.daily.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                <CheckIcon />
                <span style={{ color: '#47474a', fontSize: '15px' }}>{item.label} – {item.price}</span>
              </div>
            ))}
          </div>

          {/* Weekly */}
          <div style={{ flex: '1 1 220px' }}>
            <div style={{ backgroundColor: '#f95108', padding: '12px 16px', borderRadius: '8px 8px 0 0', color: '#fff', fontSize: '14px', fontWeight: 600 }}>
              On average, save up to 61% when you choose a 7-day policy vs 7 x 1-day policies^
            </div>
            <div style={{ backgroundColor: '#f9f9f9', borderRadius: '0 0 8px 8px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#47474a', marginBottom: '16px' }}>Weekly car insurance </h4>
              {pricingData.weekly.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <CheckIcon />
                  <span style={{ color: '#47474a', fontSize: '15px' }}>{item.label} – {item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
          <p style={{ color: '#47474a', fontSize: '14px', lineHeight: '20px', margin: 0 }}>
            ^These potential savings have been calculated using the average sold price for 7 individual 1-day policies compared with an individual 7-day policy. The data was gathered for policies sold between 01/05/25 and 01/11/25. Prices for these policies will vary based on an individual&apos;s risk information, therefore, actual savings may vary.
          </p>
        </div>

        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
          <p style={{ color: '#47474a', fontSize: '14px', lineHeight: '20px', margin: 0 }}>
            Product information is based on policies underwritten by Aviva. Dayinsure also offer policies with Mulsanne, and cover may differ. Please ensure cover levels meet your needs. If you want to read more about what&apos;s covered read the{' '}
            <a href="/insurance/temporary-car-insurance/policy-requirements" style={{ color: '#f95108' }}>full insurance policy document.</a>
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <a href="https://retail.dayinsure.com/quote/registration-search?referrer=rac" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#f95108', color: '#fff', border: 'none', borderRadius: '6px',
              padding: '16px 24px', fontSize: '20px', fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}>
              Buy temporary insurance
              <RacArrowIcon />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
