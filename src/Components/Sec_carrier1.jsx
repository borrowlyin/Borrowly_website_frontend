import React from "react";
import img1 from "../assets/Images/imgc1.png";

const Sec_carrier1 = () => {
  return (
    <section className="relative h-[850px] w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Image - using background for full visibility */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content - z-index to stay above image */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <button className="bg-white text-gray-900 font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100 transition mb-6">
          Careers
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight max-w-3xl">
          Join us to create finance that empowers,<br />not overwhelms.
        </h1>
      </div>
    </section>
  );
};

export default Sec_carrier1;
