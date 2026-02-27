"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, X, ShieldCheck, User, Car, Calendar, CreditCard, ChevronDown } from 'lucide-react';

const FormSection = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
      <div className="p-2 rounded-lg bg-white border border-gray-100 text-rac-orange">
        <Icon size={20} />
      </div>
      <h2 className="text-lg font-black text-gray-900 uppercase">{title}</h2>
    </div>
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  </div>
);

const InputField = ({ label, name, type = "text", required = false, placeholder, value, onChange }: { label: string, name: string, type?: string, required?: boolean, placeholder?: string, value?: any, onChange?: (e: any) => void }) => (
  <div>
    <label htmlFor={name} className="block text-base font-bold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rac-orange focus:border-rac-orange transition-all outline-none text-gray-800"
      onChange={onChange}
      value={value}
    />
  </div>
);

export default function CreatePolicy() {
  const router = useRouter();
  const [useAlternativeEmail, setUseAlternativeEmail] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1320px] mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => router.push('/admin/dashboard')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-black text-gray-900 uppercase">Create New Policy</h1>
              <p className="text-sm font-bold text-gray-400">ADMIN / POLICIES / NEW</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => router.push('/admin/dashboard')}
              className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <X size={20} />
              <span>Cancel</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-rac-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-md">
              <ShieldCheck size={20} />
              <span>Create Policy</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1320px] mx-auto px-4 py-8">
        
        {/* Toggle Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${useAlternativeEmail ? 'bg-rac-orange' : 'bg-gray-300'}`}
                 onClick={() => setUseAlternativeEmail(!useAlternativeEmail)}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${useAlternativeEmail ? 'translate-x-6' : ''}`}></div>
            </div>
            <span className="font-bold text-gray-700">Use alternative email template</span>
          </div>
          <p className="text-sm text-gray-400">Select to override the default system communication for this policy</p>
        </div>

        {/* Personal Info */}
        <FormSection title="Personal Information" icon={User}>
          <InputField label="First Name" name="firstName" required placeholder="John" />
          <InputField label="Last Name" name="lastName" required placeholder="Doe" />
          <InputField label="Date of Birth" name="dob" type="date" required />
          <InputField label="Driving License Number" name="license" required placeholder="ABCDE123456FGH" />
          <InputField label="Occupation" name="occupation" placeholder="Software Engineer" />
          <InputField label="Address Line 1" name="address1" required placeholder="123 High Street" />
          <InputField label="Address Line 2 (Optional)" name="address2" placeholder="Suite 404" />
          <InputField label="City" name="city" required placeholder="London" />
          <InputField label="Post Code" name="postcode" required placeholder="SW1A 1AA" />
          <InputField label="Mobile" name="mobile" required placeholder="07123 456 789" />
          <InputField label="Email" name="email" type="email" required placeholder="john.doe@example.com" />
        </FormSection>

        {/* Vehicle Info */}
        <FormSection title="Vehicle Information" icon={Car}>
          <InputField label="Vehicle Registration" name="reg" required placeholder="LX20 ABC" />
          <InputField label="Make" name="make" required placeholder="Tesla" />
          <InputField label="Model" name="model" required placeholder="Model 3" />
          <InputField label="Manufacturing Year" name="year" type="number" required placeholder="2020" />
        </FormSection>

        {/* Policy Info */}
        <FormSection title="Policy Details" icon={CreditCard}>
          <InputField label="Amount (£)" name="amount" type="number" required placeholder="250.00" />
          <InputField label="Insurance Start" name="start" type="datetime-local" required />
          <InputField label="Insurance End" name="end" type="datetime-local" required />
        </FormSection>

        {/* Footer Actions */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:border-rac-orange hover:text-rac-orange transition-all">
            <Save size={20} />
            <span>Save Draft</span>
          </button>
          <button className="flex items-center gap-2 px-10 py-3 bg-rac-orange text-white font-black rounded-xl hover:bg-orange-600 shadow-xl transform transition-all hover:-translate-y-1">
            <ShieldCheck size={24} />
            <span className="text-lg">Create Policy</span>
          </button>
        </div>
      </main>
    </div>
  );
}
