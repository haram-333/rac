"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, X, ShieldCheck, User, Car, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

// ── Reusable components ────────────────────────────────────
const FormSection = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
      <div className="p-2 rounded-lg bg-white border border-gray-100 text-rac-orange"><Icon size={20} /></div>
      <h2 className="text-lg font-black text-gray-900 uppercase">{title}</h2>
    </div>
    <div className="p-6"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div></div>
  </div>
);

const InputField = ({
  label, name, type = 'text', required = false, placeholder, value, onChange, colSpan,
}: {
  label: string; name: string; type?: string; required?: boolean;
  placeholder?: string; value: string; onChange: (e: any) => void; colSpan?: string;
}) => (
  <div className={colSpan}>
    <label htmlFor={name} className="block text-base font-bold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rac-orange focus:border-rac-orange transition-all outline-none text-gray-800"
    />
  </div>
);

// ── Initial form state ─────────────────────────────────────
const INIT = {
  firstName: '', lastName: '', dob: '', licenseNumber: '', occupation: '',
  address1: '', address2: '', city: '', postcode: '', mobile: '', email: '',
  vehicleReg: '', vehicleMake: '', vehicleModel: '', vehicleYear: '',
  amount: '', insuranceStart: '', insuranceEnd: '',
};

export default function CreatePolicy() {
  const router = useRouter();
  const [form, setForm]                   = useState(INIT);
  const [useAlternativeEmail, setAlt]     = useState(false);
  const [loading, setLoading]             = useState(false);
  const [success, setSuccess]             = useState<{ policyNumber: string; emailSent: boolean } | null>(null);
  const [error, setError]                 = useState('');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(null);
    setLoading(true);

    try {
      const res = await fetch('/api/policies/create.php', {
        method:      'POST',
        headers:     { 'Content-Type': 'application/json' },
        credentials: 'include',
        body:        JSON.stringify({ ...form, useAlternativeEmail }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Failed to create policy. Please try again.');
      } else {
        setSuccess({ policyNumber: data.policy_number, emailSent: data.email_sent });
        setForm(INIT);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      setError('Could not connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1320px] mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => router.push('/admin/dashboard/')} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-black text-gray-900 uppercase">Create New Policy</h1>
              <p className="text-sm font-bold text-gray-400">ADMIN / POLICIES / NEW</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => router.push('/admin/dashboard/')} className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors">
              <X size={20} /><span>Cancel</span>
            </button>
            <button
              form="policyForm" type="submit" disabled={loading}
              className="flex items-center gap-2 px-6 py-2.5 bg-rac-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <ShieldCheck size={20} /><span>{loading ? 'Creating…' : 'Create Policy'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1320px] mx-auto px-4 py-8">

        {/* Success banner */}
        {success && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-start gap-4">
            <CheckCircle size={28} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-green-800 text-lg">Policy Created Successfully!</h3>
              <p className="text-green-700 mt-1">
                Policy number: <strong className="text-xl">{success.policyNumber}</strong>
              </p>
              <p className="text-green-600 text-sm mt-1">
                {success.emailSent ? '✅ Confirmation email sent to customer.' : '⚠️ Policy saved but email could not be sent — check your email config.'}
              </p>
            </div>
          </div>
        )}

        {/* Error banner */}
        {error && (
          <div className="mb-8 p-5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
            <AlertCircle size={22} className="flex-shrink-0" />
            <p className="font-semibold">{error}</p>
          </div>
        )}

        <form id="policyForm" onSubmit={handleSubmit}>

          {/* Alternative email toggle */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${useAlternativeEmail ? 'bg-rac-orange' : 'bg-gray-300'}`}
                onClick={() => setAlt(!useAlternativeEmail)}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${useAlternativeEmail ? 'translate-x-6' : ''}`} />
              </div>
              <span className="font-bold text-gray-700">Use alternative email template</span>
            </div>
            <p className="text-sm text-gray-400">Select to override the default system communication for this policy</p>
          </div>

          {/* Personal Info */}
          <FormSection title="Personal Information" icon={User}>
            <InputField label="First Name"              name="firstName"      required value={form.firstName}      onChange={set('firstName')}      placeholder="John" />
            <InputField label="Last Name"               name="lastName"       required value={form.lastName}       onChange={set('lastName')}       placeholder="Doe" />
            <InputField label="Date of Birth"           name="dob"            required value={form.dob}            onChange={set('dob')}            type="date" />
            <InputField label="Driving Licence Number"  name="licenseNumber"  required value={form.licenseNumber}  onChange={set('licenseNumber')}  placeholder="ABCDE123456FGH" />
            <InputField label="Occupation"              name="occupation"              value={form.occupation}      onChange={set('occupation')}     placeholder="Software Engineer" />
            <InputField label="Address Line 1"          name="address1"       required value={form.address1}       onChange={set('address1')}       placeholder="123 High Street" />
            <InputField label="Address Line 2 (Optional)" name="address2"             value={form.address2}       onChange={set('address2')}       placeholder="Suite 404" />
            <InputField label="City"                    name="city"           required value={form.city}           onChange={set('city')}           placeholder="London" />
            <InputField label="Post Code"               name="postcode"       required value={form.postcode}       onChange={set('postcode')}       placeholder="SW1A 1AA" />
            <InputField label="Mobile"                  name="mobile"         required value={form.mobile}         onChange={set('mobile')}         placeholder="07123 456 789" />
            <InputField label="Email"                   name="email"          required value={form.email}          onChange={set('email')}          type="email" placeholder="john.doe@example.com" />
          </FormSection>

          {/* Vehicle Info */}
          <FormSection title="Vehicle Information" icon={Car}>
            <InputField label="Vehicle Registration" name="vehicleReg"   required value={form.vehicleReg}   onChange={set('vehicleReg')}   placeholder="LX20 ABC" />
            <InputField label="Make"                 name="vehicleMake"  required value={form.vehicleMake}  onChange={set('vehicleMake')}  placeholder="Tesla" />
            <InputField label="Model"                name="vehicleModel" required value={form.vehicleModel} onChange={set('vehicleModel')} placeholder="Model 3" />
            <InputField label="Manufacturing Year"   name="vehicleYear"  required value={form.vehicleYear}  onChange={set('vehicleYear')}  type="number" placeholder="2020" />
          </FormSection>

          {/* Policy Details */}
          <FormSection title="Policy Details" icon={CreditCard}>
            <InputField label="Amount (£)"       name="amount"          required value={form.amount}         onChange={set('amount')}         type="number" placeholder="250.00" />
            <InputField label="Insurance Start"  name="insuranceStart"  required value={form.insuranceStart} onChange={set('insuranceStart')} type="datetime-local" />
            <InputField label="Insurance End"    name="insuranceEnd"    required value={form.insuranceEnd}   onChange={set('insuranceEnd')}   type="datetime-local" />
          </FormSection>

          {/* Footer buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button type="button" onClick={() => setForm(INIT)} className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:border-rac-orange hover:text-rac-orange transition-all">
              <Save size={20} /><span>Clear Form</span>
            </button>
            <button type="submit" disabled={loading} className="flex items-center gap-2 px-10 py-3 bg-rac-orange text-white font-black rounded-xl hover:bg-orange-600 shadow-xl transform transition-all hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0">
              <ShieldCheck size={24} /><span className="text-lg">{loading ? 'Creating…' : 'Create Policy'}</span>
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}
