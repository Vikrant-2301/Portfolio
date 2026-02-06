"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProLoader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fast counter
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Trigger completion slightly after counter finishes
    if (count === 100) {
      setTimeout(() => onComplete(), 800);
    }

    return () => clearInterval(interval);
  }, [count, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 1 } }} // Fades out AFTER shutters open
    >
      {/* Top Shutter */}
      <motion.div
        className="w-full h-[50vh] bg-neutral-950 flex items-end justify-center pb-2 border-b border-white/10"
        exit={{
          y: "-100%",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        <h1 className="text-[10vw] leading-none font-black tracking-tighter text-white overflow-hidden">
          {count}%
        </h1>
      </motion.div>

      {/* Bottom Shutter */}
      <motion.div
        className="w-full h-[50vh] bg-neutral-950 flex items-start justify-center pt-2 border-t border-white/10"
        exit={{
          y: "100%",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        <div className="flex gap-10 font-mono text-xs text-gray-500 uppercase tracking-widest">
          <span>Loading Assets</span>
          <span>Initializing WebGL</span>
          <span>Vikrant ©2025</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
