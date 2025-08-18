import React from "react";
import search_icon from '../assets/Icons/search_icon.svg'
const Header_contactus = () => {
  return (
    <header className="bg-white pt-12 lg:pt-24 px-5">
         <div className="flex  flex-col md:flex-row md:items-center md:justify-between gap-4"></div>
      <div className="">
        <h1 style={{ fontFamily: 'PovetaracSansBlack' }} className="text-3xl lg:text-4xl">BORROWLY – <br className="block md:hidden"/>LET’S TALK FINANCE</h1>
        <p style={{ fontFamily: 'PovetaracSansBold' }}  className="text-gray-500 text-sm mt-1.5"> Need help with your loan applications, repayment queries, or account setup?<br className="hidden lg:block"/> Our finance experts are here to guide you every step of the way.</p>
        
        <div className="relative py-6 ">
          {/* Search Icon */}
          
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
             <img src={search_icon} alt="" className="w-10"/>
          </div>
          {/* Input */}
          <input style={{ fontFamily: 'PovetaracSansBold' }} type="text" placeholder="Search Support" className="block w-full lg:max-w-[500px] pl-14 text-lg  py-3 border border-[#E0E7ED] rounded-full bg-[#FAFCFC] placeholder-[#7F8286] focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
      </div>
    </header>
  );
};

export default Header_contactus;