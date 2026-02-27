import React from 'react';

const CheckIcon = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.637 0.769649C15.4852 0.845549 15.3334 0.997348 15.1816 1.14915C12.3733 3.95744 9.64093 6.68983 6.83264 9.49812C6.75674 9.57402 6.68084 9.72581 6.52904 9.80171C6.37724 9.64991 6.30134 9.57402 6.22544 9.49812C5.08695 8.35962 3.94845 7.22112 2.80996 6.08263C2.73406 6.00673 2.58226 5.85493 2.50636 5.77903C1.97506 5.39953 1.21606 5.39953 0.684766 5.77903C-0.15013 6.46213 -0.15013 7.52472 0.684766 8.28372C2.27866 9.87761 3.87255 11.3956 5.39055 12.9895C5.54235 13.1413 5.61825 13.2172 5.77005 13.2931C6.45314 13.6726 7.06034 13.5208 7.66754 12.9136C10.9312 9.72581 14.119 6.46213 17.3827 3.27434C17.4586 3.19844 17.5345 3.12254 17.6104 3.04664C18.0658 2.51534 18.0658 1.52865 17.5345 0.997349C17.0791 0.466051 16.2442 0.314251 15.637 0.769649Z" fill="currentColor" />
  </svg>
);

const driverRequirements = [
  'have a current permanent address in the UK',
  'hold a current, valid, full GB driving licence and have done so for at least 6 months (3 months if aged over 25)',
  'have a current permanent address',
  'have permission from the vehicle owner to drive it and you\'ve agreed to insure it',
  'have had no more than 1 fault claim in the last 12 months',
  'have had no more than 9 penalty points and no disqualifications in the last 12 months',
  'have had no driving offences in the last 3 years starting with the code DR, CD, DD, UT or DG',
  'have had no driving offences in the last 6 months starting with the code IN or CU80',
  'not have any unspent criminal convictions (other than driving offences)',
  'have never been refused insurance or had a policy cancelled',
];

const vehicleRequirements = [
  'be registered in Great Britain, Northern Ireland or the Isle of Man',
  'have a current market value of less than £75,000',
  'have no more than 8 seats in total',
  'not be a hire & reward or rental vehicle ',
  'not be leased under an agreement of 12 months or less',
  'not be a seized vehicle or in a police compound',
  'not have any engine modifications, body kits or alloy wheels – unless they were carried out for a disabled driver or passenger, or they were fitted at manufacture or were manufacturer optional extras',
  'not be imported from another country through channels other than the maker\'s official distribution system ',
  'not be a heavy goods vehicle (HGV)',
  'not be over 3.5 tonnes gross vehicle weight (GVW)',
];

const EligibilitySection = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 12px' }}>
        <h2 style={{ fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '28px', fontWeight: 700, color: '#47474a', marginBottom: '8px' }}>
          Am I eligible for&nbsp;temporary car insurance?
        </h2>
        <p style={{ color: '#47474a', fontSize: '16px', lineHeight: '24px', marginBottom: '32px' }}>
          Before you take out a short-term insurance policy, there are a few things you will need to check – some for you and some for your vehicle:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {/* Driver requirements */}
          <div style={{ flex: '1 1 340px', backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#47474a', marginBottom: '16px' }}>As the driver, you must</h4>
            {driverRequirements.map((req, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start', color: '#f95108' }}>
                <span style={{ flexShrink: 0, marginTop: '3px' }}>
                  <CheckIcon />
                </span>
                <p style={{ margin: 0, color: '#47474a', fontSize: '15px', lineHeight: '22px' }}>{req}</p>
              </div>
            ))}
          </div>
          {/* Vehicle requirements */}
          <div style={{ flex: '1 1 340px', backgroundColor: '#fff', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#47474a', marginBottom: '16px' }}>Your vehicle must</h4>
            {vehicleRequirements.map((req, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start', color: '#f95108' }}>
                <span style={{ flexShrink: 0, marginTop: '3px' }}>
                  <CheckIcon />
                </span>
                <p style={{ margin: 0, color: '#47474a', fontSize: '15px', lineHeight: '22px' }}>{req}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;
