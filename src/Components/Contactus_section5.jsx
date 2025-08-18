import React from "react";
import mobileImg from "../assets/Images/mobile.png";
import serviceImg from "../assets/Images/service.png";

const Contactus_section5 = () => {
  return (
    <section className="px-5 w-full max-w-[1200px] mx-auto py-10 flex flex-col gap-20">
      {/* ================= Mobile App Section ================= */}
      <div className="flex flex-col lg:flex-row gap-10 items-center text-left">
        {/* Image */}
        <div className="flex justify-center lg:w-[500px]">
          <img
            src={mobileImg}
            alt="Mobile App"
            className="w-full rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2
            style={{ fontFamily: "PovetaracSansblack" }}
            className="text-2xl md:text-3xl mb-3"
          >
            Borrowly Mobile App
          </h2>

          <p
            style={{ fontFamily: "PovetaracSansbold" }}
            className="text-gray-600 mb-4 text-sm sm:text-base"
          >
            <strong
              style={{ fontFamily: "PovetaracSansblack" }}
              className="text-lg"
            >
              Mobile Support Info
            </strong>
            <br />
            Manage your loans, make repayments, track your credit score, and
            chat with customer support — all from your phone.
          </p>

          <p
            style={{ fontFamily: "PovetaracSansbold" }}
            className="text-gray-600 mb-6 text-sm sm:text-base"
          >
            <strong
              style={{ fontFamily: "PovetaracSansblack" }}
              className="text-lg"
            >
              Quick Smart App Access
            </strong>
            <br />
            Manage your Loans, EMI, and services via the Borrowly Smart App.
          </p>

          <div className="py-5">
            <button
              style={{ fontFamily: "PovetaracSansbold" }}
              className="w-full lg:max-w-[300px] py-4 cursor-pointer bg-black text-white rounded-md hover:bg-gray-800 text-lg"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= Service Request Section ================= */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center text-left">
        {/* Left Content */}
        <div className="flex-1">
          <h2
            style={{ fontFamily: "PovetaracSansblack" }}
            className="text-xl sm:text-3xl mb-3"
          >
            Fast. Reliable. Financial Help!
          </h2>

          <h3
            style={{ fontFamily: "PovetaracSansblack" }}
            className="text-lg text-gray-600 mb-2"
          >
            Service Request
          </h3>

          <p
            style={{ fontFamily: "PovetaracSansbold" }}
            className="text-gray-600 mb-2 text-sm sm:text-base"
          >
            For support, contact us at{" "}
            <a
              href="mailto:Support@Borrowly.in"
              className="text-blue-600 underline"
            >
              Support@Borrowly.in
            </a>{" "}
            or call <span className="font-medium">+91 96060 45890</span>
          </p>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Our team ensures quick loan processing and instant customer support,
            so you get the funds you need without delays.
          </p>

          <div className="py-5">
            <button
              style={{ fontFamily: "PovetaracSansbold" }}
              className="w-full lg:max-w-[300px] py-4 cursor-pointer bg-black text-white rounded-md hover:bg-gray-800 text-lg"
            >
              Book Service Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:w-[500px]">
          <img
            src={serviceImg}
            alt="Customer Support"
            className="w-full rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contactus_section5;
