import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  return (
    <nav className="bg-white py-4 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-[13px] text-[#47474a] font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
          <li className="flex items-center">
            <Link href="/" className="hover:text-rac-teal transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link href="/insurance" className="hover:text-rac-teal transition-colors">
              Insurance
            </Link>
          </li>
          <li className="flex items-center space-x-2 text-gray-400">
            <ChevronRight className="w-3 h-3" />
            <span>Temporary car insurance</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
