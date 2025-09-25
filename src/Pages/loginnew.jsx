import React, { useState } from "react";

export default function LoginPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // your login logic here
  };

  return (
    // Modal container (no dark background)
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white/90 backdrop-blur-md w-[90%] max-w-3xl rounded-lg shadow-2xl flex overflow-hidden relative">
        {/* Left Side (Banner / Welcome section) */}
        <div className="hidden md:flex flex-col items-center justify-center bg-blue-600 text-white w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center text-sm">
            Login to access your account and explore our services.
          </p>
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-full md:w-1/2 p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>

          <h1 className="text-2xl font-semibold text-center mb-6">
            Login to your account
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* Extra Links */}
          <div className="flex justify-between mt-4 text-sm">
            <button className="text-blue-600 hover:underline">
              Forgot Password?
            </button>
            <button className="text-blue-600 hover:underline">
              New User? Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
