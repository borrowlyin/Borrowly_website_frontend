import { useState } from "react";
import { Save } from "lucide-react"; // Save icon
import img1 from "../assets/Images/contact-banner.png";

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
    <div className="min-h-screen bg-white px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Get in touch with us today—our team is ready to answer your questions<br/>
          and guide you toward the right financial solution.
        </p>
      </div>

      {/* Main Grid - responsive */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        
        {/* Left Column - Info */}
        <div className="space-y-20 text-gray-700">
          {/* Reach Us */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Reach us</h2>
            <p>CIN<br/> <strong>U67100HR2015PTC068942 </strong></p>
            <p className="mt-3">Company Name<br/><strong> BORROWLY PRIVATE LIMITED</strong></p>
            <p className="mt-3">Registered Office Address / Corporate Office Address<br/>
             <strong> 7th Floor, Vatika Triangle, Mehrauli-Gurgaon Road, Block B, 
              Sushant Lok Phase I, Gurugram, Haryana - 122002</strong>
            </p>
            <p className="mt-3">Email ID<br/><strong> Offical@Borrowly.in </strong></p>
            <p className="mt-3">Contact No<br/> <strong>0124-6914100 </strong></p>
          </div>

          {/* Officer */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Nodal Grievance Redressal Officer</h2>
            <p>Name<br/> <strong> Mr. Gurjent Deol </strong></p>
            <p className="mt-3">Address<br/> 
            <strong>
              Moneymitra IT Solutions Private Limited, 7th Floor, Vatika Triangle, 
              Mehrauli-Gurgaon Road, Block B, Sushant Lok Phase I, Gurugram, Haryana - 122002
              </strong>
            </p>
            <p className="mt-3">Contact No<br/> <strong>0124-4699111 </strong></p>
            <p className="mt-3">Email ID<br/> <strong>Founder@Borrowly.in </strong></p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Banner */}
          <div className="bg-cyan-500 text-white text-center relative">
            <div className="py-6">
              <h3 className="text-lg sm:text-xl font-semibold">Do you have any question?</h3>
              <p className="text-xs sm:text-sm mt-2">
                Fill out the forms and we will answer all your questions
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={img1} // Place this image inside /public
                alt="Support Illustration"
                className="h-32 sm:h-40 object-contain"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
            
            {/* Loan Status */}
            <div className="bg-gray-100 p-3 sm:p-4 rounded-xl">
              <p className="font-medium mb-2 text-gray-700 text-sm sm:text-base">Do you have active loan?</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="loanStatus"
                    value="Yes"
                    checked={formData.loanStatus === "Yes"}
                    onChange={handleChange}
                  />
                  <span>Yes, I have a loan</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="loanStatus"
                    value="No"
                    checked={formData.loanStatus === "No"}
                    onChange={handleChange}
                  />
                  <span>No, I don’t have a loan</span>
                </label>
              </div>
            </div>

            {/* Inputs with light gray bg */}
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-5 rounded-xl bg-gray-100 text-m m:text-base"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-5 rounded-xl bg-gray-100 text-m m:text-base"
              required
            />
            <textarea
              name="question"
              placeholder="Write your question"
              value={formData.question}
              onChange={handleChange}
              rows="4"
              className="w-full p-5 rounded-xl bg-gray-100 text-m m:text-base"
              required
            ></textarea>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-cyan-500 text-white py-3 rounded-full hover:bg-cyan-600 transition text-sm sm:text-base"
            >
              <span>Save</span>
              <Save size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
