"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ScrollRevealImage() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Background Image with fade-in/scale animation */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        src="/assets/GR11.jpg"
        alt="Reveal"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text Overlay with fade-in and slide from left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 flex items-center justify-start h-full px-6 ml-0 md:ml-20 md:px-12"
      >
        <h1 className="text-white text-6xl md:text-8xl font-extrabold max-w-md">
          Design Inspired by Nature
        </h1>
      </motion.div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-[5]" />
    </div>
  );
}
