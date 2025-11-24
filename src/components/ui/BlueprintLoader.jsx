"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlueprintLoader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="blueprint-loader" // <--- THIS KEY WAS MISSING AND CAUSED THE CRASH
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 text-center">
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter"
              >
                whyVikrantYadav
              </motion.h1>
            </div>
            <div className="w-64 h-1 bg-gray-800 mx-auto relative overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-white"
              />
            </div>
            <p className="mt-4 text-xs font-mono text-gray-500 uppercase">
              Initializing Architecture...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
