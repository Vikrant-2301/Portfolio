"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 sm:px-20 pt-20 pb-10">
      {/* Heading with image */}
      <div className="text-[7vw] leading-tight font-light flex flex-wrap items-center gap-4">
        <span>Let's make something</span>
        <div className="rounded-xl overflow-hidden w-28 h-20 inline-block">
          <Image
            src="/assets/9.png" // Replace with your actual image path
            alt="team working"
            width={112}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
        <span>good together.</span>
      </div>

      {/* Form and Contact Info */}
      <div className="flex flex-col md:flex-row justify-between mt-16 gap-10">
        {/* Form */}
        <div className="w-full md:w-1/2 space-y-8 text-white">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name*</label>
            <input
              type="text"
              placeholder="John"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-lg"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email*</label>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-lg"
            />
          </div>
          {/* Project details */}
          <div>
            <label className="block text-sm mb-1">Project details*</label>
            <textarea
              placeholder="Say something about your project..."
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-lg resize-none h-32"
            />
          </div>
          {/* Send button with animation */}
          <div className="flex justify-center mt-10">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D73934] text-white text-xl px-20 py-4 rounded-full focus:outline-none"
            >
              Send it
            </motion.button>
          </div>
        </div>

        {/* Right side: Working in + Connect */}
        <div className="w-full md:w-1/2 flex justify-between text-sm">
          <div>
            <p className="text-gray-400 mb-2">Working in</p>
            <p className="text-white">India</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Connect</p>
            <p className="text-white">vikrant.yadav1401@gmail.com</p>
            <p className="text-white">LinkedIn</p>
            <p className="text-white">Webflow</p>
            <p className="text-white">X</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-14 flex justify-center">
        <div
          className="bg-[#1a1a1a] text-gray-400 text-sm py-3 px-6 rounded-xl max-w-[90vw] text-center"
          style={{
            width: "100%",
            maxWidth: "1461px",
            height: "48px",
            lineHeight: "48px",
          }}
        >
          © 2025 Vikrant Yadav. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
