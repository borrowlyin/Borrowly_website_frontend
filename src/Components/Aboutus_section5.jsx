import React from "react";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
      <div className="bg-[#F1F6FE] rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center shadow-md">
        
        {/* Left Content */}
        <div className="space-y-4">
          <MdEmail size={40} className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            If you like what you see, <br /> let&apos;s work together.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Need help choosing the right loan? Have questions about EMIs? <br />
            Fill out the contact form and our team will get back to you quickly.
          </p>
        </div>

        {/* Right Form */}
        <form className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name*"
            className="col-span-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email*"
            className="col-span-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone*"
            className="col-span-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject*"
            className="col-span-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="col-span-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <div className="col-span-2 flex justify-start">
            <button
              type="submit"
              className="bg-white px-6 py-2 rounded-full border border-black text-black font-medium hover:bg-gray-100 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
