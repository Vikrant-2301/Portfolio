"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const container = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=200%", // Pins for 2 screens height
          scrub: 1,
          pin: true,
        },
      });

      // 1. Scale the video/image up to fill screen
      tl.to(
        videoRef.current,
        {
          scale: 1,
          borderRadius: "0px",
          width: "100%",
          height: "100vh",
          ease: "power4.inOut",
        },
        0
      );

      // 2. Split the text dramatically
      tl.to(
        ".hero-text-left",
        {
          x: -500,
          opacity: 0,
          ease: "power2.in",
        },
        0
      ).to(
        ".hero-text-right",
        {
          x: 500,
          opacity: 0,
          ease: "power2.in",
        },
        0
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* The "Architecture" Background - starts small */}
      <div
        ref={videoRef}
        className="absolute z-0 w-[60%] h-[60%] bg-neutral-900 overflow-hidden shadow-2xl"
        style={{ borderRadius: "30px", transform: "scale(0.8)" }}
      >
        {/* Replace with a high-quality architectural video loop or image */}
        <img
          src="/assets/1030.png"
          className="w-full h-full object-cover opacity-60"
          alt="Architecture Hero"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* The Typography */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col md:flex-row gap-4 mix-blend-difference text-white"
      >
        <h1 className="hero-text-left text-[15vw] leading-none font-bold tracking-tighter uppercase">
          Vikrant
        </h1>
        <h1 className="hero-text-right text-[15vw] leading-none font-bold tracking-tighter uppercase">
          Yadav
        </h1>
      </div>

      <div className="absolute bottom-10 left-10 mix-blend-difference text-white z-20 hidden md:block">
        <p className="text-sm uppercase tracking-widest">Scroll to Explore</p>
      </div>
    </div>
  );
};

export default Banner;
