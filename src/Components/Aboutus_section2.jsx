import React from "react";
import img1 from "../assets/images/about1.png"; 
import img3 from "../assets/images/about2.png"; 
import img2 from "../assets/images/about3.png"; 

const Aboutus_section2 = () => {
  return (
    <section className="px-6 md:px-12 max-w-[1200px] mx-auto py-12 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Images Grid */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src={img1}
          alt="Borrowly service"
          className="rounded-lg shadow-md object-cover w-full h-48"
        />
        <img
          src={img2}
          alt="Borrowly support"
          className="rounded-lg shadow-md object-cover w-full h-48"
        />
        <img
          src={img3}
          alt="Borrowly team"
          className="rounded-lg shadow-md object-cover w-full col-span-2 h-56"
        />
      </div>

      {/* Right Content */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          We lead the way in smart, reliable financial solutions.
        </h3>
        <p className="text-gray-600 mb-4">
          Borrowly is a leading provider of personal loans, education loans, home
          loans, and business loans. Our goal is to make borrowing simple, fast,
          and transparent so that anyone can access financial help with confidence.
        </p>
        <p className="text-gray-600 mb-6">
          We believe that finance should empower people, not burden them. With
          Borrowly, loan applications, EMI calculations, and approvals are all
          digital-first, secure, and hassle-free — putting you in control of your
          financial journey.
        </p>

        {/* Stats */}
        <div className="flex gap-12 mt-6">
          <div>
            <h4 className="text-2xl font-bold">99.7%</h4>
            <p className="text-sm text-gray-600">Customer Satisfaction</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">10x</h4>
            <p className="text-sm text-gray-600">Growth in Loan Approvals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus_section2;
