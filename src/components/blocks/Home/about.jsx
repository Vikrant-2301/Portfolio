import React from "react";

export default function DesignStoryPage() {
  return (
    <div className="relative min-h-screen bg-white flex items-start justify-start px-6 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <img
          src="/assets/contour_bg.svg" // Replace with actual image path
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-left space-y-8 ml-8 md:ml-24">
        <h1 className="text-3xl md:text-4xl font-light text-zinc-800 leading-snug">
          Hey, I am <span className="font-semibold">Vikrant</span>.
          <br />I am an <span className="italic">
            Architecture Student
          </span>{" "}
          based in India.
          <br />
          I enjoy designing spaces that tell stories and connect with people on
          a deeper level.
          <br />
          Exploring design, learning constantly, and creating with purpose.
        </h1>

        <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed">
          I design with purpose—crafting spaces and visuals that speak.
          <br />
          Every project I undertake is a story, told not just through form and
          function,
          <br />
          but through emotion, experience, and intent.
          <br />
          Beyond aesthetics, I aim to create meaning—designs that resonate,
          inspire, and connect.
        </p>
      </div>
    </div>
  );
}
