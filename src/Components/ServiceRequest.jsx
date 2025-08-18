import React from "react";
import serviceImg from "../assets/Images/service.png"; 

const ServiceRequest = () => {
  return (
     <section className="px-5 w-full max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row py-10 gap-10 items-center text-left">
      {/* Left Content */}
      <div>
         <h2 style={{ fontFamily: 'PovetaracSansblack' }} className="text-xl sm:text-3xl mb-3">
          Fast. Reliable. Financial Help!
        </h2>

        <h3 style={{ fontFamily: 'PovetaracSansblack' }} className="text-lg text-gray-600  mb-2">Service Request</h3>

        <p style={{ fontFamily: 'PovetaracSansbold' }}  className="text-gray-600 mb-2 text-sm sm:text-base">
          For support, contact us at{" "}
         <a  href="mailto:Support@Borrowly.in" className="text-blue-600 underline">Support@Borrowly.in</a>{" "}
          or call <span className="font-medium">+91 96060 45890</span>
        </p>

        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Our team ensures quick loan processing and instant customer
          support, so you get the funds you need without delays.
        </p>

        <div className="py-5">
          <button style={{ fontFamily: 'PovetaracSansbold' }}  className=" w-full lg:max-w-[300px] py-4 cursor-pointer bg-black text-white rounded-md hover:bg-gray-800 text-lg">
             Download Now
          </button>
        </div>
      </div>

      {/* Right Image */}
       <div className="flex justify-center lg:w-[500px]">
          <img src={serviceImg} alt="Mobile App" className="w-full rounded-3xl shadow-lg object-cover"/>
      </div>
    </section>
  );
};

export default ServiceRequest;
