
import React from "react";
import ArrowIcon from '../assets/Icons/ArrowIcon.svg'

const Contactus_section4 = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-5 md:px-10 py-12 container mx-auto  text-left">
      {/* Apply for a Loan */}
      <div className="pb-6 border-b md:border-b-0 md:pb-0">
        <h3 style={{ fontFamily: 'PovetaracSansblack' }} className="text-lg">APPLY FOR A LOAN</h3>
        <p style={{ fontFamily: 'PovetaracSansbold' }} className="text-[#838383] text-sm mt-1">Submit your application online in minutes. Keep track of your application.Get loans in minutes.</p>
        <button  style={{ fontFamily: 'PovetaracSansbold' }}  className=" pt-5 cursor-pointer flex items-center gap-1 text-black font-semibold uppercase transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="pr-1.5">
            <img src={ArrowIcon} alt="" className="w-8"/>
          </div>
          <span className="mt-1">CALCULATE THE INTEREST RATE</span>
        </button>
      </div>

      {/* Get the Support You Need */}
      <div className="pb-6 border-b md:border-b-0 md:pb-0">
        <h3 style={{ fontFamily: 'PovetaracSansblack' }} className="text-lg">GET THE SUPPORT YOU NEED</h3>
        <p style={{ fontFamily: 'PovetaracSansbold' }} className="text-[#838383] text-sm mt-1">If you need assistance regarding Loans call us at 
          <span className="font-medium">080 4132 9075 (Landline) or +91 96060 45890 (Cell Phone),</span>
          or write to us at <a  href="mailto:Support@Borrowly.in" className="text-blue-600 underline">Support@Borrowly.in</a>
        </p>
         <p style={{ fontFamily: 'PovetaracSansbold' }} className="text-[#838383] text-sm mt-1">Toll free time is from <span className="font-semibold">9:00 am to 6:00 pm</span> <br />Monday to Saturday</p>
      </div>

      {/* 24/7 Section */}
      <div>
        <h3 style={{ fontFamily: 'PovetaracSansblack' }} className="text-lg">24/7</h3>
        <p style={{ fontFamily: 'PovetaracSansbold' }} className="text-[#838383] text-sm mt-1">#617, 1st Floor, 80 Feet Road, 6th Block, Koramangala,Bangalore, India – 560095.</p>
        
         <button  style={{ fontFamily: 'PovetaracSansbold' }}  className=" pt-5 cursor-pointer flex items-center gap-1 text-black font-semibold uppercase transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="pr-1.5">
            <img src={ArrowIcon} alt="" className="w-8"/>
          </div>
           <span className="mt-1">TERMS AND CONDITIONS</span>
        </button>
      </div>
    </section>
  );
};

export default Contactus_section4;
