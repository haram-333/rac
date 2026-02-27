"use client";
import React from 'react';
import { Search, ChevronRight, Info, ShieldCheck } from 'lucide-react';

export default function RetrieveInfo() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-[800px] mx-auto px-4 flex items-center justify-between font-outfit">
           <span className="text-3xl font-black text-rac-orange tracking-tighter">RAC</span>
           <div className="flex items-center gap-2 text-gray-500 font-bold text-base">
             <ShieldCheck size={18} className="text-rac-orange" />
             <span>Secure Retrieval Portal</span>
           </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-rac-orange p-8 text-white text-center">
            <h1 className="text-4xl font-black mb-2 tracking-tight">Retrieve Your Info</h1>
            <p className="text-orange-100 font-medium opacity-90">Please enter your details exactly as they appear on your policy</p>
          </div>

          <form className="p-8 lg:p-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div>
                <label htmlFor="surname" className="block text-base font-black text-gray-700 uppercase tracking-widest mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange focus:border-rac-orange outline-none transition-all font-bold text-gray-800 text-lg"
                  placeholder="e.g. Smith"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-base font-black text-gray-700 uppercase tracking-widest mb-2">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <input type="number" placeholder="DD" className="px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange outline-none text-center font-bold" />
                  <input type="number" placeholder="MM" className="px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange outline-none text-center font-bold" />
                  <input type="number" placeholder="YYYY" className="px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange outline-none text-center font-bold" />
                </div>
              </div>

              <div>
                <label htmlFor="postcode" className="block text-base font-black text-gray-700 uppercase tracking-widest mb-2">
                  Home Post Code
                </label>
                <input
                  type="text"
                  id="postcode"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rac-orange focus:border-rac-orange outline-none transition-all font-bold text-gray-800 text-lg uppercase"
                  placeholder="e.g. SW1A 1AA"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-rac-orange text-white py-5 rounded-2xl font-black text-2xl tracking-tight shadow-lg shadow-orange-200 hover:bg-orange-600 hover:shadow-orange-300 transform active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>Retrieve Info</span>
                <ChevronRight size={28} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 mt-8">
              <Info className="text-blue-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-base text-blue-700 leading-relaxed">
                If you're having trouble retrieving your information, please ensure the details match the ones provided during your registration or contact our support team at <span className="font-bold underline">0330 159 1111</span>.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-gray-500 font-bold hover:text-rac-orange transition-colors flex items-center gap-2">
            <span>&larr; Return to RAC Home</span>
          </a>
        </div>
      </main>

      {/* Basic Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm font-bold uppercase tracking-widest">
         &copy; {new Date().getFullYear()} RAC Motoring Services. All rights reserved.
      </footer>
    </div>
  );
}
