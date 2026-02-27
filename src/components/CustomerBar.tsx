import React from 'react';
import { ChevronRight } from 'lucide-react';

const CustomerBar = () => {
  return (
    <section className="bg-rac-lightGrey py-6 border-b border-rac-borderGrey">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <span className="text-lg font-black text-rac-black">
          Already have a RAC temporary insurance policy?
        </span>
        <button className="flex items-center text-rac-orange font-black hover:underline underline-offset-4 group">
          Manage your policy 
          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CustomerBar;
