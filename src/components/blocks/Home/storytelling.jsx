"use client";
import React from "react";

export default function Story() {
  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] relative flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-16 md:py-0">
      {/* Background pattern */}
      <img
        src="/assets/story.svg"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Left title */}
      <div className="relative z-10 max-w-xl text-center md:text-left">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          Discovering
          <br />
          Shaping
          <br />
          Architecture
        </h1>
      </div>

      {/* Right text */}
      <div className="relative z-10 text-white mt-10 md:mt-0 md:text-right text-center max-w-md">
        <p className="font-semibold text-base sm:text-lg">
          We bring design visions to life by blending creativity with precision—
          <br />
          transforming ideas into purposeful, timeless architecture.
        </p>
        <p className="mt-4 text-gray-300 text-sm sm:text-base">
          From concepts to construction, we craft spaces that tell stories,
          inspire communities, and celebrate contextual design.
        </p>
      </div>
    </section>
  );
}
