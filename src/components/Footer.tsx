import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: "Products",
    links: ["Breakdown cover", "Car insurance", "Temporary car insurance", "Van insurance", "Motorbike insurance", "Home insurance", "Travel insurance"]
  },
  {
    title: "Services",
    links: ["Route planner", "Mileage calculator", "Car battery replacement", "Car repairs", "Car servicing", "Vehicle checks", "Electric cars"]
  },
  {
    title: "Help & Advice",
    links: ["Contact us", "FAQs", "News", "Advice", "RAC reports", "Corporate", "Sitemap"]
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Cookie policy", "Terms of use", "Accessibility", "Modern slavery", "Gender pay gap", "Tax strategy"]
  }
];

const Footer = () => {
  return (
    <footer className="bg-rac-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-black mb-8 text-rac-orange text-white-force">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm font-medium text-white-force hover:text-rac-orange transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <span className="text-4xl font-black text-white-force tracking-tighter">RAC</span>
            <p className="mt-4 text-sm text-white-force">
              © {new Date().getFullYear()} RAC Motoring Services. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-rac-orange transition-colors text-white-force">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-rac-orange transition-colors text-white-force">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-rac-orange transition-colors text-white-force">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-rac-orange transition-colors text-white-force">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-rac-orange transition-colors text-white-force">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-xs text-white-force leading-relaxed max-w-4xl">
          RAC Motoring Services (Registered No 01424399) and RAC Insurance Ltd (Registered No 2355834). 
          Registered in England; Registered Office: RAC House, Brockhurst Crescent, Walsall WS5 4AW. 
          RAC Motoring Services is authorised and regulated by the Financial Conduct Authority in respect of 
          general insurance mediation activities. RAC Insurance Ltd is authorised by the Prudential Regulation 
          Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
