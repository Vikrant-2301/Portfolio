"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Architectural Design",
    desc: "Conceptualizing sustainable and aesthetic structures.",
  },
  {
    title: "Interior Planning",
    desc: "Crafting spatial narratives and material palettes.",
  },
  {
    title: "Computational Design",
    desc: "Algorithmic form-finding and parametric modeling.",
  },
  {
    title: "Sustainable Consulting",
    desc: "Green building strategies and energy efficiency.",
  },
];

const education = [
  {
    year: "2021 - 2026",
    degree: "Bachelor of Architecture (B.Arch)",
    school: "School of Planning and Architecture, India",
    desc: "Specialized in Sustainable Urbanism and Parametric Design.",
  },
  {
    year: "2023",
    degree: "Computation & Code Certification",
    school: "Online / Workshop",
    desc: "Advanced workshops in Three.js, React, and WebGL.",
  },
];

const awards = [
  { title: "National Design Trophy", year: "2024", org: "NASA India" },
  { title: "Best Student Project", year: "2023", org: "Asia Young Designers" },
  { title: "Sustainability Mention", year: "2022", org: "Green Build" },
];

export default function AboutPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      // 1. Parallax Hero Image
      gsap.to(".about-hero-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Fade in Services
      gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-neutral-950 text-white min-h-screen selection:bg-white selection:text-black"
    >
      {/* 1. Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 about-hero-img">
          <Image
            src="/assets/9.jpg"
            fill
            className="object-cover opacity-30 grayscale"
            alt="Vikrant Studio"
            priority
          />
        </div>
        <div className="relative z-10 text-center mix-blend-difference px-4">
          <h3 className="text-sm uppercase tracking-[0.5em] mb-6">
            The Architect
          </h3>
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none">
            Vikrant
          </h1>
        </div>
      </div>

      {/* 2. The Manifesto / Philosophy */}
      <div className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-sm text-gray-500 uppercase tracking-widest sticky top-32">
              Philosophy
            </h2>
          </div>
          <div className="md:col-span-9 space-y-10">
            <p className="text-3xl md:text-5xl font-light leading-tight text-gray-200">
              "Architecture is not just about buildings. It is about sculpting
              the void between walls. My work explores the relationship between{" "}
              <span className="text-white font-bold">raw materiality</span> and
              human emotion."
            </p>
            <div className="text-xl text-gray-400 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8">
              <p>
                I believe in "Honest Architecture"—where structure is aesthetic
                and light is the primary material. Every line drawn on paper is
                a commitment to the environment and the people who inhabit it.
              </p>
              <p>
                In an increasingly digital world, I strive to bridge the gap
                between the tangible and the virtual. Using code as a tool, I
                explore procedural generation and interactive spaces that adapt
                to their users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Software Skills (Velocity Scroll) */}
      <div className="py-20 border-t border-white/10 border-b">
        <VelocityScroll
          defaultVelocity={3}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        >
          Revit Rhino Grasshopper Lumion AutoCAD SketchUp V-Ray Adobe-Suite
          React Next.js Three.js
        </VelocityScroll>
      </div>

      {/* 4. Services Grid */}
      <div className="services-section py-32 px-6 md:px-20">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-16 border-b border-white/10 pb-4">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card group border border-white/10 p-10 hover:bg-white hover:text-black transition-colors duration-500"
            >
              <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-600 text-lg">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Education & Awards */}
      <div className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
              Education <span className="h-px bg-white/20 flex-1" />
            </h3>
            <div className="space-y-12">
              {education.map((item, i) => (
                <div key={i} className="group">
                  <span className="text-xs font-mono text-gray-500 mb-1 block">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    {item.degree}
                  </h4>
                  <p className="text-gray-400 mt-1">{item.school}</p>
                  <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
              Recognition <span className="h-px bg-white/20 flex-1" />
            </h3>
            <div className="space-y-6">
              {awards.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-end border-b border-white/10 pb-4 group hover:border-white transition-colors"
                >
                  <div>
                    <h4 className="text-lg font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.org}</p>
                  </div>
                  <span className="text-sm font-mono text-gray-500">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Signature Footer */}
      <div className="h-[50vh] flex items-center justify-center bg-white text-black mt-20">
        <h2 className="text-9xl font-serif italic">Vikrant.</h2>
      </div>
    </div>
  );
}
