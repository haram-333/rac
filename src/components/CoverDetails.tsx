import React from 'react';

const CheckIcon = ({ color = '#f95108' }: { color?: string }) => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.637 0.769649C15.4852 0.845549 15.3334 0.997348 15.1816 1.14915C12.3733 3.95744 9.64093 6.68983 6.83264 9.49812C6.75674 9.57402 6.68084 9.72581 6.52904 9.80171C6.37724 9.64991 6.30134 9.57402 6.22544 9.49812C5.08695 8.35962 3.94845 7.22112 2.80996 6.08263C2.73406 6.00673 2.58226 5.85493 2.50636 5.77903C1.97506 5.39953 1.21606 5.39953 0.684766 5.77903C-0.15013 6.46213 -0.15013 7.52472 0.684766 8.28372C2.27866 9.87761 3.87255 11.3956 5.39055 12.9895C5.54235 13.1413 5.61825 13.2172 5.77005 13.2931C6.45314 13.6726 7.06034 13.5208 7.66754 12.9136C10.9312 9.72581 14.119 6.46213 17.3827 3.27434C17.4586 3.19844 17.5345 3.12254 17.6104 3.04664C18.0658 2.51534 18.0658 1.52865 17.5345 0.997349C17.0791 0.466051 16.2442 0.314251 15.637 0.769649Z" fill={color} />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 25 25">
    <path fill="#e53e3e" fillRule="evenodd" d="M18.314 20.468a1.695 1.695 0 0 0 1.599-.158 1.707 1.707 0 0 0 .723-1.753 1.71 1.71 0 0 0-.466-.874l-5.053-5.066L20.17 7.55a1.708 1.708 0 0 0-1.854-2.808 1.704 1.704 0 0 0-.553.393l-5.055 5.067-5.054-5.067a1.704 1.704 0 0 0-2.447-.038 1.708 1.708 0 0 0 .04 2.453l5.053 5.066-5.054 5.066a1.71 1.71 0 0 0 1.205 2.914 1.692 1.692 0 0 0 1.203-.5l5.054-5.066 5.053 5.066c.159.159.346.285.553.37Z" clipRule="evenodd" />
  </svg>
);

const covered = [
  'Loss, theft, fire or vandalism',
  'Child seat replacement',
  'Replacement locks',
  <>New car replacement - Of the same make, model and specification<a href="#terms-2" style={{ color: '#47474a' }}><sup>2</sup></a></>,
  <>Accident recovery - And an approved repair service<a href="#terms-3" style={{ color: '#47474a' }}><sup>3</sup></a></>,
  'Legal liability - If another person is injured or dies, or their property\'s damaged',
  'Personal accident - Up to £2,500 per claim (or £5,000 per insurance year)',
  'Personal belongings - Cover up to £150',
  <>Protects the owner&apos;s No Claims Discount<sup>*</sup></>,
];

const notCovered = [
  'Unattended / keys in ignition - Loss or damage if the vehicle was left unattended with the engine running or the keys in the ignition',
  'Wear and tear - Electrical and mechanical breakdown or gradual deterioration',
  'Loss of value following a repair',
  'Confiscation, requisition, or destruction - By or under order of any government, public or local authority',
  'Courtesy car',
  'Damage to tyres by braking or by punctures, cuts or bursts',
  'Driving the car without a valid, full GB driving licence',
];

const CoverDetails = () => {
  return (
    <div style={{ backgroundColor: '#fff', padding: '40px 0' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 12px' }}>
        <h2 style={{ fontFamily: "FrederickSimms, 'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '28px', fontWeight: 700, color: '#47474a', marginBottom: '8px' }}>
          What&apos;s covered in RAC temporary car insurance?
        </h2>
        <p style={{ color: '#47474a', fontSize: '16px', lineHeight: '24px', marginBottom: '32px' }}>
          RAC short term insurance provides{' '}
          <a href="https://www.rac.co.uk/drive/advice/insurance/what-is-comprehensive-car-insurance/" style={{ color: '#f95108' }}>fully comprehensive</a>{' '}
          cover for the vehicle you&apos;re driving, meaning all you need to do is pick your duration and you can be on the road within 15 minutes. There are certain things that are and aren&apos;t covered regardless of duration – check these out below:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {/* Covered */}
          <div style={{ flex: '1 1 340px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#47474a', marginBottom: '16px' }}>What&apos;s covered</h4>
            {covered.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px', color: '#f95108', display: 'flex', flexShrink: 0, marginTop: '2px' }}>
                  <CheckIcon />
                </span>
                <p style={{ margin: 0, color: '#47474a', fontSize: '15px', lineHeight: '22px' }}>{item}</p>
              </div>
            ))}
          </div>
          {/* Not covered */}
          <div style={{ flex: '1 1 340px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#47474a', marginBottom: '16px' }}>What&apos;s not covered</h4>
            {notCovered.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, marginTop: '2px' }}>
                  <XIcon />
                </span>
                <p style={{ margin: 0, color: '#47474a', fontSize: '15px', lineHeight: '22px' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '16px', marginTop: '24px' }}>
          <p style={{ color: '#47474a', fontSize: '14px', lineHeight: '20px', margin: 0 }}>
            Product information is based on policies underwritten by Aviva. DayInsure also offer policies with Mulsanne, and cover may differ. Please ensure cover levels meet your needs – read the{' '}
            <a href="/insurance/temporary-car-insurance/policy-requirements" style={{ color: '#f95108' }}>full policy requirements</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverDetails;
