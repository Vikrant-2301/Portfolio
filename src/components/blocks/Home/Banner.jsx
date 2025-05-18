"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Banner = () => {
  const [radius, setRadius] = useState(20);

  // Use motion value to smoothly update x position on scroll
  const scrollY = useMotionValue(0);

  // Transform scrollY to horizontal offsets with limits and direction reversed
  // Rumit moves right (+), Vaghasiya moves left (-)
  const rumitX = useTransform(scrollY, [0, 100], [0, 250], { clamp: false });
  const vaghasiaX = useTransform(scrollY, [0, 100], [0, -250], {
    clamp: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newRadius = Math.min(200, 20 + scrollTop * 0.2);
      setRadius(newRadius);

      // Smoothly animate scrollY to current scrollTop
      animate(scrollY, scrollTop, {
        type: "spring",
        stiffness: 100,
        damping: 20,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center">
      <div
        className="w-[98%] h-[96vh] bg-black transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          borderRadius: `${radius}px`,
          background:
            "radial-gradient(circle at bottom right, #1a1a1a, #0a0a0a)",
        }}
      >
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full px-6 sm:px-20 gap-4 relative">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ x: rumitX }}
            className="text-white text-[12vw] font-light leading-[1.1] tracking-tight m-0"
          >
            <span style={{ marginRight: "30rem", display: "inline-block" }}>
              Vikrant
            </span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ x: vaghasiaX }}
            className="text-white text-[12vw] font-light leading-[1.1] tracking-tight m-0"
          >
            <span style={{ marginLeft: "30rem", display: "inline-block" }}>
              Yadav
            </span>
          </motion.h1>
        </div>

        {/* Bottom-left Info */}
        <div className="absolute bottom-8 left-6 sm:left-16 text-white text-lg sm:text-xl font-light leading-tight">
          <p>Rumit Vaghasiya</p>
          <p>—Webflow Developer</p>
          <p>based in India.</p>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-8 right-6 sm:right-16">
          <button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full shadow hover:scale-105 transition-transform duration-300">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
