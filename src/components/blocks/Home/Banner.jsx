"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Banner() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // --- CINEMATIC PARALLAX MATH ---
  // Background moves at 40% speed of scroll (creating depth)
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  // Text moves at 20% speed (feels like it's floating above bg)
  const yText = useTransform(scrollY, [0, 1000], [0, 200]);
  // Fade out everything when scrolling down
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center"
    >
      {/* --- BACKGROUND LAYER (The Movie Scene) --- */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        {/* 1. The Image (Scale up slightly to allow parallax movement without showing edges) */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, ease: "easeOut" }} // Subtle zoom-out effect on load
          className="absolute inset-0 bg-[url('/assets/GR11.jpg')] bg-cover bg-center opacity-60 grayscale"
        />

        {/* 2. CINEMATIC GRADIENTS (Crucial for Navbar & Text Visibility) */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

        {/* 3. Film Grain Texture (Adds realism) */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
          }}
        />
      </motion.div>

      {/* --- HERO CONTENT (Floating) --- */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex flex-col items-center text-center text-white w-full px-4"
      >
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-[1px] w-12 bg-white/40" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/70">
            Portfolio '26
          </span>
          <span className="h-[1px] w-12 bg-white/40" />
        </motion.div>

        {/* IDENTITY: Elegant & Refined (Not too big) */}
        <h1 className="flex flex-col items-center leading-[0.9] font-bold uppercase tracking-tight">
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="text-[12vw] md:text-[9vw] block text-white drop-shadow-2xl"
          >
            Vikrant
          </motion.span>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            // Gradient text for a "metallic" look
            className="text-[12vw] md:text-[9vw] block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600"
          >
            Yadav
          </motion.span>
        </h1>

        {/* Role & Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <p className="text-sm md:text-base font-light text-gray-400 tracking-wide uppercase">
            Sculpting the void between
          </p>
          <p className="text-lg md:text-xl text-white font-medium tracking-wide">
            Raw Materiality <span className="text-gray-500 mx-2">&</span>{" "}
            Digital Space
          </p>
        </motion.div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        style={{ opacity }} // Fades out on scroll
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full bg-white h-1/2 top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
