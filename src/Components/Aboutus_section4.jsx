import React from "react";
import { FaRegSmile, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { MdPayment, MdFlashOn } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
const Aboutus_section4 = () => {
const services =  [
  {
    icon: <img src="../src/assets/images/img1.png" alt="Easy Loan Applications" width={28} height={28} />,
    title: "Easy Loan Applications",
    desc: "Apply online in minutes. No lengthy paperwork, no delays.",
    bg: "bg-[#A3343D]",  // Dark Red
  },
  {
    icon: <img src="../src/assets/images/img2.png" alt="Fast Approvals" width={28} height={28} />,
    title: "Fast Approvals",
    desc: "Get loans verified and approved quickly with digital verification.",
    bg: "bg-[#FAAB63]",  // Orange
  },
  {
    icon: <img src="../src/assets/images/img3.png" alt="Flexible Repayment Options" width={28} height={28} />,
    title: "Flexible Repayment Options",
    desc: "Choose EMI plans that suit your budget. Pay conveniently every month.",
    bg: "bg-[#2881FC]",  // Blue
  },
  {
    icon: <img src="../src/assets/images/img4.png" alt="Secure & Transparent" width={28} height={28} />,
    title: "Secure & Transparent",
    desc: "Your data and transactions are always protected with bank-grade security.",
    bg: "bg-[#D81E5B]",  // Pink-Red
  },
  {
    icon: <img src="../src/assets/images/img5.png" alt="24/7 Customer Support" width={28} height={28} />,
    title: "24/7 Customer Support",
    desc: "We are here to guide you at every step — from applying to repayment.",
    bg: "bg-[#BA31CE]",  // Purple
  },
  {
    icon: <img src="../src/assets/images/img6.png" alt="Competitive Interest Rates" width={100} height={50} />,
    title: "Competitive Interest Rates",
    desc: "Borrowly offers affordable loan options with low interest rates, ensuring borrowers get the best value without hidden charges. Our goal is to make borrowing cost-effective and stress-free.",
    bg: "bg-[#33524A]",  // Dark Green
  },
];


  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-10 items-start">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Our services are designed to make your borrowing experience seamless and efficient.
        </h2>
        <p className="text-gray-600 mb-6">
          We provide end-to-end support — from loan applications to EMI tracking and customer support.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
          Contact us →
        </button>
      </div>

      {/* Right Services List */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-4 rounded-lg shadow-sm h-[150px] ${service.bg}`}
          >
            <div className="text-white">{service.icon}</div>
            <div>
              <h3 className="font-semibold text-white">{service.title}</h3>
              <p className="text-white text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutus_section4;
