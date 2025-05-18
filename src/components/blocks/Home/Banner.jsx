"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Banner = () => {
  const [radius, setRadius] = useState(20);

  const scrollY = useMotionValue(0);

  const rumitX = useTransform(scrollY, [0, 100], [0, 250], { clamp: false });
  const vaghasiaX = useTransform(scrollY, [0, 100], [0, -250], {
    clamp: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newRadius = Math.min(200, 20 + scrollTop * 0.2);
      setRadius(newRadius);

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
    <div className="relative w-full min-h-screen bg-white flex justify-center">
      <div
        className="w-[98%] h-[88vh] md:h-[96vh] mt-4 md:mt-3 bg-black transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          borderRadius: `${radius}px`,
          background:
            "radial-gradient(circle at bottom right, #1a1a1a, #0a0a0a)",
        }}
      >
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-10 md:px-20 gap-4 relative">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ x: rumitX }}
            className="text-white font-medium leading-[1.1] tracking-tight m-0 text-[30vw] sm:text-[10vw] md:text-[8vw] lg:text-[15vw]"
          >
            <span
              className="inline-block"
              style={{
                marginRight: "15vw",
              }}
            >
              Vikrant
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ x: vaghasiaX }}
            className="text-white font-medium leading-[1.1] tracking-tight m-0 text-[30vw] sm:text-[10vw] md:text-[8vw] lg:text-[15vw]"
          >
            <span
              className="inline-block"
              style={{
                marginLeft: "15vw",
              }}
            >
              Yadav
            </span>
          </motion.h1>
        </div>

        {/* Info Bottom-left */}
        <div className="absolute left-8 bottom-32 md:bottom-14 md:left-16 text-white text-xl md:text-xl font-light leading-tight space-y-1.5">
          <p>Vikrant Yadav</p>
          <p>—Architecture Student</p>
          <p>based in India.</p>
        </div>

        {/* Button Bottom-right */}
        <div className="absolute right-8 bottom-32 md:bottom-14 md:right-16">
          <button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full shadow hover:scale-105 transition-transform duration-300">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
