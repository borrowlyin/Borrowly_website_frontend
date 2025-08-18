import React, { useState } from "react";
import BorrowerSection from "./BorrowerSection";
import BorrowAgentSection from "./BorrowAgentSection";

const BorrowerAgentSection = () => {
  const [selected,setSelected]=useState(true)
  return (
    <section className="py-10">
       <div className="relative grid grid-cols-2 border-b mb-12">
        {/* Sliding underline */}
        <div
          className={`absolute bottom-0 h-[2px] bg-black transition-all duration-500 ease-in-out`}
          style={{
            left: selected ? "0%" : "50%",
            width: "50%",
          }}
        ></div>

        <h2
          style={{ fontFamily: "PovetaracSansblack" }}
          onClick={() => setSelected(true)}
          className={`text-center pb-2 cursor-pointer text-lg md:text-2xl ${
            selected ? "text-black" : "text-[#7F8286]"
          }`}
        >
          Borrower
        </h2>

        <h2
          style={{ fontFamily: "PovetaracSansblack" }}
          onClick={() => setSelected(false)}
          className={`text-center pb-2 cursor-pointer text-lg md:text-2xl ${
            !selected ? "text-black" : "text-[#7F8286]"
          }`}
        >
          Borrow Agents
        </h2>
      </div>
      {
        selected ? (
          <>
           <div className="flex flex-col md:grid lg:grid-cols-2 gap-10 md:gap-8">
             <div>
               <BorrowerSection />
             </div>
             <div>
               <BorrowAgentSection />
             </div>
           
           </div>
          </>
        ):
        (
          <>
          
          </>
        )
      }
    </section>
  );
};

export default BorrowerAgentSection;
