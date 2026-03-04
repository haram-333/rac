"use client";
import React, { useState } from 'react';
import { ChevronRight, Info, ShieldCheck, AlertCircle, FileText, Car, Calendar, CreditCard } from 'lucide-react';

interface Policy {
  policy_number: string;
  first_name: string;
  last_name: string;
  dob: string;
  vehicle: string;
  vehicle_reg: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: number;
  amount: string;
  amount_display: string;
  insurance_start: string;
  insurance_end: string;
  start_display: string;
  end_display: string;
  duration: string;
  city: string;
  postcode: string;
  address1: string;
  address2?: string;
  mobile: string;
  email: string;
}

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between py-3 border-b border-gray-100 last:border-0">
    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</span>
    <span className="text-sm font-bold text-gray-900 text-right max-w-[60%]">{value}</span>
  </div>
);

export default function RetrieveInfo() {
  const [surname,  setSurname]  = useState('');
  const [dobDay,   setDobDay]   = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear,  setDobYear]  = useState('');
  const [postcode, setPostcode] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');
  const [policy,   setPolicy]   = useState<Policy | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setPolicy(null);
    setLoading(true);

    const day   = dobDay.padStart(2, '0');
    const month = dobMonth.padStart(2, '0');
    const dob   = `${dobYear}-${month}-${day}`;

    try {
      const res = await fetch('/api/retrieve/index.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ surname, dob, postcode }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'No policy found matching the details provided.');
      } else {
        setPolicy(data.policy);
        setTimeout(() => document.getElementById('policy-result')?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } catch {
      setError('Could not connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[800px] mx-auto px-4 flex items-center justify-between">
          <span className="text-3xl font-black text-rac-orange tracking-tighter">RAC</span>
          <div className="flex items-center gap-2 text-gray-500 font-bold text-base">
            <ShieldCheck size={18} className="text-rac-orange" />
            <span>Secure Retrieval Portal</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center p-4 py-12">
        {/* Form card */}
        <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-rac-orange p-8 text-white text-center">
            <h1 className="text-4xl font-black mb-2 tracking-tight">Retrieve Your Info</h1>
            <p className="text-orange-100 font-medium opacity-90">Please enter your details exactly as they appear on your policy</p>
          </div>

          <form className="p-8 lg:p-12 space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="surname" className="block text-base font-black text-gray-700 uppercase tracking-widest mb-2">Surname</label>
                <input
                  type="text" id="surname" value={surname} onChange={e => setSurname(e.target.value)} required
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange focus:border-rac-orange outline-none transition-all font-bold text-gray-800 text-lg"
                  placeholder="e.g. Smith"
                />
              </div>

              <div>
                <label className="block text-base font-black text-gray-700 uppercase tracking-widest mb-2">Date of Birth</label>
                <div className="grid grid-cols-3 gap-4">
                  <input type="number" placeholder="DD" min="1" max="31" value={dobDay} onChange={e => setDobDay(e.target.value)} required
                    className="px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange outline-none text-center font-bold text-lg" />
                  <input type="number" placeholder="MM" min="1" max="12" value={dobMonth} onChange={e => setDobMonth(e.target.value)} required
                    className="px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange outline-none text-center font-bold text-lg" />
                  <input type="number" placeholder="YYYY" min="1900" max="2099" value={dobYear} onChange={e => setDobYear(e.target.value)} required
                    className="px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange outline-none text-center font-bold text-lg" />
                </div>
              </div>

              <div>
                <label htmlFor="postcode" className="block text-base font-black text-gray-700 uppercase tracking-widest mb-2">Home Post Code</label>
                <input
                  type="text" id="postcode" value={postcode} onChange={e => setPostcode(e.target.value)} required
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange focus:border-rac-orange outline-none transition-all font-bold text-gray-800 text-lg uppercase"
                  placeholder="e.g. SW1A 1AA"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                <AlertCircle size={20} className="flex-shrink-0" />
                <p className="font-semibold">{error}</p>
              </div>
            )}

            <button
              type="submit" disabled={loading}
              className="w-full bg-rac-orange text-white py-5 rounded-2xl font-black text-2xl tracking-tight shadow-lg shadow-orange-200 hover:bg-orange-600 hover:shadow-orange-300 transform active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>{loading ? 'Searching…' : 'Retrieve Info'}</span>
              {!loading && <ChevronRight size={28} />}
            </button>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <Info className="text-blue-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-base text-blue-700 leading-relaxed">
                If you're having trouble, ensure details match your policy exactly or call <span className="font-bold underline">0330 159 1111</span>.
              </p>
            </div>
          </form>
        </div>

        {/* Policy Result Card */}
        {policy && (
          <div id="policy-result" className="max-w-[700px] w-full mt-10 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Result header */}
            <div className="bg-rac-orange p-6 text-white">
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Policy Found</p>
              <h2 className="text-3xl font-black tracking-tight">{policy.policy_number}</h2>
              <p className="mt-1 opacity-90 font-medium">{policy.first_name} {policy.last_name}</p>
            </div>

            <div className="p-8 space-y-8">
              {/* Policy info */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={18} className="text-rac-orange" />
                  <h3 className="font-black text-gray-900 uppercase text-sm tracking-wider">Policy Details</h3>
                </div>
                <DetailRow label="Policy Start" value={policy.start_display} />
                <DetailRow label="Policy End"   value={policy.end_display} />
                <DetailRow label="Duration"     value={policy.duration} />
                <DetailRow label="Amount"       value={policy.amount_display} />
              </section>

              {/* Vehicle info */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Car size={18} className="text-rac-orange" />
                  <h3 className="font-black text-gray-900 uppercase text-sm tracking-wider">Vehicle</h3>
                </div>
                <DetailRow label="Registration"  value={policy.vehicle_reg} />
                <DetailRow label="Make & Model"  value={`${policy.vehicle_make} ${policy.vehicle_model}`} />
                <DetailRow label="Year"          value={String(policy.vehicle_year)} />
              </section>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <a href="/" className="text-gray-500 font-bold hover:text-rac-orange transition-colors flex items-center justify-center gap-2">
            <span>&larr; Return to RAC Home</span>
          </a>
        </div>
      </main>

      <footer className="py-8 text-center text-gray-400 text-sm font-bold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} RAC Motoring Services. All rights reserved.
      </footer>
    </div>
  );
}
