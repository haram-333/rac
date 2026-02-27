"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, User, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Top Navbar */}
      <div className="border-b border-gray-200 bg-gray-50 lg:bg-white" style={{ boxSizing: 'border-box' }}>
        <div className="max-w-[1320px] mx-auto px-4 h-[55px] flex items-center justify-between">
          <div className="flex h-full">
            <div className="hidden sm:flex px-4 items-center border-t-4 border-rac-orange bg-gray-50 text-gray-700 font-bold h-full">
              <a href="https://www.rac.co.uk/breakdown-cover" className="no-underline text-inherit">Personal</a>
            </div>
            <div className="hidden sm:flex px-4 items-center border-t-4 border-transparent text-gray-700 font-bold h-full hover:bg-gray-100">
              <a href="https://www.rac.co.uk/business/breakdown/van-breakdown-cover" className="no-underline text-inherit">Van</a>
            </div>
            <div className="hidden sm:flex px-4 items-center border-t-4 border-transparent text-gray-700 font-bold h-full hover:bg-gray-100">
              <a href="https://www.rac.co.uk/business" className="no-underline text-inherit">Business</a>
            </div>
            {/* Mobile simplified top nav */}
            <div className="flex sm:hidden items-center h-full font-bold text-gray-700 text-sm">
              Personal
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center font-bold text-gray-700">
              Sales <a href="tel:0330 159 1111" className="text-rac-orange px-1 no-underline">0330 159 1111</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:0330 159 1111" className="md:hidden text-rac-orange">
                <Phone size={24} />
              </a>
              <a href="/admin/login" className="no-underline">
                <button className="flex items-center justify-center gap-2 px-4 py-1.5 border-2 border-rac-orange rounded-md bg-white font-bold text-rac-orange hover:bg-orange-50 transition-colors">
                  <span className="hidden sm:inline">Admin</span>
                  <ShieldCheck size={20} className="sm:hidden" />
                </button>
              </a>
              <a href="https://www.rac.co.uk/myrac" className="no-underline">
                <button className="flex items-center justify-center gap-2 px-4 py-1.5 border border-gray-700 rounded-md bg-white font-bold text-gray-700 hover:bg-gray-50">
                  <span className="hidden sm:inline">myRAC Login</span>
                  <User size={20} className="sm:hidden" />
                  <ChevronDown size={20} className="hidden sm:block" />
                </button>
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-[1020] bg-white border-y border-gray-200 shadow-sm">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between px-4 lg:px-0">
          <a href="https://rac.co.uk" className="py-3 lg:py-5 flex items-center">
            <svg width="100" viewBox="0 0 59 20" className="text-rac-orange fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3202 10.0137H7.72761C7.46694 10.0137 7.40742 10.1361 7.40742 10.2542C7.40742 10.345 7.46489 10.4336 7.52236 10.4652L17.8772 17.3605L16.2454 20L6.5618 13.4339C5.33852 12.5942 4.40258 11.8156 4.40258 10.1952C4.40258 8.36586 5.68744 7.10624 8.02112 7.10624H14.2915C15.2541 7.10624 15.2541 6.29813 15.2541 5.99641V3.98776C15.2541 3.68815 15.2541 2.87794 14.2915 2.87794H3.96746C3.00484 2.87794 3.00484 3.68815 3.00484 3.98776V20H0V4.13546C0 0.957907 2.27621 0 3.96746 0H14.3797C16.071 0 18.2014 0.810212 18.2014 3.98776V5.96687C18.1994 9.14653 16.0135 10.0137 14.3202 10.0137ZM34.0713 20H23.776C22.0827 20 19.8681 19.1012 19.8681 15.9215V11.094C19.8681 7.91645 22.1443 6.95643 23.8355 6.95643H34.9477V4.13546C34.9477 3.83796 34.9477 3.02775 33.9871 3.02775H21.3561V0H34.1041C35.7974 0 38.012 0.898829 38.012 4.07638V15.8899C38.012 19.0695 35.7646 20 34.0713 20ZM34.9456 9.95464H23.8047C22.8421 9.95464 22.8421 10.7627 22.8421 11.0645V15.892C22.8421 16.1916 22.8421 16.9997 23.8047 16.9997H33.9851C34.9456 16.9997 34.9456 16.1916 34.9456 15.892V9.95464ZM44.4712 20C42.78 20 40.5633 19.1012 40.5633 15.9215V4.13546C40.5633 0.960017 42.8354 0 44.5307 0H58.1818V3.02775H44.6477C43.6851 3.02775 43.6851 3.83796 43.6851 4.13546V15.8603C43.6851 16.1599 43.6851 16.9701 44.6477 16.9701H58.1818V20H44.4712Z"></path>
            </svg>
          </a>
          
          <div className="hidden lg:flex items-center">
            {[
              'Breakdown cover',
              'Insurance',
              'Service & Repair',
              'Route planner',
              'Buying a car',
              'Shop',
              'Help & advice'
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center px-4 h-[70px] text-[18px] font-bold text-gray-700 hover:text-rac-orange transition-colors"
              >
                {item} <ChevronDown size={18} className="ml-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl overflow-y-auto max-h-[calc(100vh-110px)]">
            {[
              'Breakdown cover',
              'Insurance',
              'Service & Repair',
              'Route planner',
              'Buying a car',
              'Shop',
              'Help & advice'
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                <button className="flex items-center justify-between w-full px-6 py-4 text-left font-bold text-gray-800">
                  {item}
                  <ChevronDown size={20} />
                </button>
              </div>
            ))}
            <div className="p-6 bg-gray-50 flex flex-col gap-4">
              <div className="font-bold text-gray-700">
                Sales <a href="tel:0330 159 1111" className="text-rac-orange no-underline">0330 159 1111</a>
              </div>
              <a href="/admin/login" className="w-full">
                <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-rac-orange text-rac-orange font-bold rounded-md hover:bg-orange-50 mb-2">
                  Admin Portal <ShieldCheck size={20} />
                </button>
              </a>
              <a href="https://www.rac.co.uk/myrac" className="w-full">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-rac-orange text-white font-bold rounded-md">
                  myRAC Login <ChevronDown size={20} />
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
