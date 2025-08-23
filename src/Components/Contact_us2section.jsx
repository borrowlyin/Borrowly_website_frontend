import { useState } from "react";
import { Save } from "lucide-react"; // (optional) not used if you're using the svg
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/Icons/contact-banner.svg";
import SaveIcon from "../assets/Icons/SaveIcon.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 24, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    loanStatus: "Yes",
    email: "",
    phone: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your query has been submitted successfully!");
  };

  return (
    <div className="min-h-screen cursor-default bg-white px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <motion.div
       className="text-center pb-12 md:pb-24"
  variants={fadeUp}
  initial="hidden"
  animate="show" 

      >
        <h1
          style={{ fontFamily: "PovetaracSansBlack" }}
          className="text-center mt-4 text-[36px] xl:text-[40px] leading-[1.1]"
        >
          Contact Us
        </h1>
        <p
          style={{ fontFamily: "PovetaracSansBold" }}
          className="mt-2 px-5 w-full max-w-[800px] text-[#797979] mx-auto text-[14px] md:text-lg"
        >
          Get in touch with us today—our team is ready to answer your questions
          <br className="hidden md:block"/>
          and guide you toward the right financial solution.
        </p>
      </motion.div>

      {/* Main Grid - responsive */}
      <motion.div
         className="max-w-6xl mx-auto flex flex-col-reverse items-center md:items-start md:flex-row gap-8 sm:gap-12"
  variants={stagger}
  initial="hidden"
  animate="show" 

      >
        {/* Left Column - Info */}
        <motion.div className="space-y-20 px-3 pt-8 md:pt-0 flex-1 text-gray-700" variants={slideLeft}>
          {/* Reach Us */}
          <motion.div variants={fadeUp}>
            <h2 style={{ fontFamily: "PovetaracSansBlack" }} className="text-3xl font-semibold mb-3">
              Reach us
            </h2>
            <div className="flex flex-col gap-4">
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">CIN</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black">U67100HR2015PTC068942</h1>
               </div>
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Company Name</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black">BORROWLY PRIVATE LIMITED</h1>
               </div>
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Registered Office Address</p>
                  <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black max-w-[450px]">7th Floor, Vatika Triangle, Mehrauli-Gurgaon Road, Block B, Sushant
                   Lok Phase I, Gurugram, Haryana - 122002</h1>
               </div>
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Email ID</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black">Offical@Borrowly.in</h1>
               </div>
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Contact No</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black">0124-6914100</h1>
               </div>
            </div>
          </motion.div>

          {/* Officer */}

         <motion.div variants={fadeUp}>
            <h2 style={{ fontFamily: "PovetaracSansBlack" }} className="text-3xl font-semibold mb-3">
              Nodal Grievance Redressal Officer
            </h2>
            <div className="flex flex-col gap-4">
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Name</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black">Mr. Gurjent Deol</h1>
               </div>
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Address</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black max-w-[450px]">
                  Moneymitra IT Solutions Private Limited, 7th Floor, Vatika Triangle,
                  Mehrauli-Gurgaon Road, Block B, Sushant Lok Phase I, Gurugram,
                  Haryana - 122002</h1>
               </div>
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Contact No</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black">0124-4699111</h1>
               </div>
               <div className="flex flex-col gap-1">
                 <p style={{ fontFamily: "PovetaracSansBold" }} className="text-[#797979]">Email ID</p>
                 <h1 style={{ fontFamily: "PovetaracSansBlack" }} className="text-[16px] text-black">Offical@Borrowly.in</h1>
               </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="bg-white w-full max-w-[500px] rounded-3xl shadow-lg overflow-hidden"
          variants={slideRight}
        >
          {/* Banner */}
          <div className="bg-cyan-500 text-white text-center relative">
            <div className="pt-8 px-4">
              <motion.h3
                style={{ fontFamily: "PovetaracSansBlack" }}
                className="text-3xl mb-4"
                variants={fadeUp}
              >
                Do you have
                <br /> any question?
              </motion.h3>
              <motion.p
                style={{ fontFamily: "PovetaracSansBold" }}
                className="text-black bg-white w-fit mx-auto py-3.5 text-sm px-7 rounded-full"
                variants={fadeUp}
              >
                Fill out the forms and we will answer all your questions
              </motion.p>
            </div>

            {/* Float animation on illustration */}
            <motion.div
              className="flex justify-center -mt-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={img1} alt="Support Illustration" className="w-[280px]" />
            </motion.div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
            {/* Loan Status */}
            <motion.div
              className="bg-[#F5F8FF] py-5 px-5 rounded-2xl"
              variants={fadeUp}
            >
              <p
                style={{ fontFamily: "PovetaracSansBlack" }}
                className="mb-2 text-gray-700 text-sm sm:text-base"
              >
                Do you have active loan?
              </p>
              <div className="flex mt-4 flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="loanStatus"
                    value="Yes"
                    checked={formData.loanStatus === "Yes"}
                    onChange={handleChange}
                    className="custom-radio"
                  />
                  <span
                    style={{ fontFamily: "PovetaracSansBold" }}
                    className="text-black text-[16px]"
                  >
                    Yes, I have a loan
                  </span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="loanStatus"
                    value="No"
                    checked={formData.loanStatus === "No"}
                    onChange={handleChange}
                    className="custom-radio"
                  />
                  <span
                    style={{ fontFamily: "PovetaracSansBold" }}
                    className="text-black text-[16px]"
                  >
                    No, I don’t have a loan
                  </span>
                </label>
              </div>
            </motion.div>

            <motion.input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              style={{ fontFamily: "PovetaracSansBold" }}
              className="w-full p-5 rounded-xl bg-[#F5F8FF] text-m m:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              variants={fadeUp}
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            <motion.input
              type="text"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              style={{ fontFamily: "PovetaracSansBold" }}
              className="w-full p-5 rounded-xl bg-[#F5F8FF] text-m m:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              variants={fadeUp}
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            <motion.textarea
              name="question"
              placeholder="Write your question"
              value={formData.question}
              onChange={handleChange}
              rows="4"
              style={{ fontFamily: "PovetaracSansBold" }}
              className="w-full p-5 rounded-xl bg-[#F5F8FF] text-m m:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              variants={fadeUp}
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Save Button */}
            <motion.button
              type="submit"
              style={{ fontFamily: "PovetaracSansBlack" }}
              className="w-full cursor-pointer flex items-center justify-center space-x-2 bg-[#00C2CC] text-white py-4 rounded-full text-lg sm:text-base"
              variants={fadeUp}
              whileHover={{ y: -2, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <span className="mt-1 text-xl">Save</span>
              <img src={SaveIcon} alt="Save" className="w-6 h-6" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
