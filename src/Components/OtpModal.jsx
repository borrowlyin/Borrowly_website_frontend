import React, { useState, useEffect, useRef } from "react";

const OtpModal = ({ onVerify, onClose, onResend }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const otpRefs = useRef([]);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Countdown effect
  useEffect(() => {
    let timer;
    if (isResendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown, isResendDisabled]);

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace key
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  // Handle OTP submit
  const handleOtpSubmit = () => {
    const code = otp.join("");
    if (code.length === otp.length) {
      onVerify(code);
    } else {
      alert("Please enter the complete OTP");
    }
  };

  // Handle resend
  const handleResendOtp = () => {
    onResend?.();
    setCountdown(30);
    setIsResendDisabled(true);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white relative z-50 rounded-2xl p-8 w-[90%] max-w-md shadow-lg" onClick={(e) => e.stopPropagation()} > 
        {/* Title & Subtitle */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Enter OTP</h2>
          <p className="text-gray-500 text-sm mt-1">
            We’ve sent a 6-digit code to your registered email/phone
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-1.5 md:gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleOtpKeyDown(e, index)}
              ref={(el) => (otpRefs.current[index] = el)}
              className="w-12 h-12 md:w-12 md:h-12 text-center border border-gray-300 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleOtpSubmit}
          className="bg-[#0266FF] hover:bg-blue-700 w-full py-3 text-white rounded-xl text-lg font-medium transition"
        >
          Verify OTP
        </button>

        {/* Resend OTP with Countdown */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Didn’t receive the code?{" "}
          <button
            onClick={handleResendOtp}
            className={`font-medium ${
              isResendDisabled
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600 hover:underline"
            }`}
            disabled={isResendDisabled}
          >
            {isResendDisabled ? `Resend in ${countdown}s` : "Resend OTP"}
          </button>
        </p>

        {/* Close button (optional) */}
        <button
          onClick={onClose}
          className="absolute top-4 cursor-pointer text-xl right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
