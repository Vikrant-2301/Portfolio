"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

gsap.registerPlugin(ScrollTrigger);

// --- DATA FROM CV ---
const experience = [
  {
    role: "Professional Intern",
    company: "Creative Group LLP, New Delhi",
    period: "June 2025 - Oct 2025",
    desc: "Worked on high-impact transport hubs like Surat MMTH and Ahmedabad Railway Station. Delivered GFC drawings and 3D visualizations.",
  },
  {
    role: "Architectural Intern",
    company: "Vishal and Brothers, Kanpur",
    period: "June 2023 - July 2023",
    desc: "Developed residential floor plans and high-quality 3D visualizations while collaborating with senior architects.",
  },
  {
    role: "Co-Founder",
    company: "DiscoverArch",
    period: "2023 - Present",
    desc: "Leading a platform for architectural competitions and student resources.",
  },
];

const education = [
  {
    year: "2021 - Present",
    degree: "Bachelor of Architecture (B.Arch)",
    school: "Lovely Professional University",
    desc: "Current CGPA: 8.4/10. Focusing on sustainable urbanism and parametric design.",
  },
  {
    year: "2020 - 2021",
    degree: "Intermediate (XII)",
    school: "Wendy High School",
    desc: "Secured 84%. Foundation in mathematics and sciences.",
  },
];

const awards = [
  { title: "Special Mention", year: "65th G-Sen Trophy", org: "NASA India" },
  { title: "Top 10 Achiever", year: "2024", org: "UDita Collaborative Studio" },
  {
    title: "BIM Professional",
    year: "Certification",
    org: "Capricot Technology",
  },
  { title: "Brick Workshop", year: "Participant", org: "Laurie Baker Centre" },
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

      // 2. Fade in Experience Cards
      gsap.from(".exp-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
        },
      });
    },
    { scope: container },
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
            sizes="100vw"
            className="object-cover opacity-30 grayscale"
            alt="Vikrant Studio"
            priority
          />
        </div>
        <div className="relative z-10 text-center mix-blend-difference px-4">
          <h3 className="text-sm uppercase tracking-[0.5em] mb-6">
            The Profile
          </h3>
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none">
            Vikrant
          </h1>
        </div>
      </div>

      {/* 2. The Manifesto / Bio */}
      <div className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-sm text-gray-500 uppercase tracking-widest sticky top-32">
              Biography
            </h2>
          </div>
          <div className="md:col-span-9 space-y-10">
            <p className="text-3xl md:text-5xl font-light leading-tight text-gray-200">
              "I am a 5th-year Architecture student at{" "}
              <span className="text-white font-bold">
                Lovely Professional University
              </span>
              , bridging the gap between raw materiality and digital precision."
            </p>
            <div className="text-xl text-gray-400 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8">
              <p>
                Based in Kanpur, I have sharpened my ability to manage complex
                tasks through professional internship at{" "}
                <strong>Creative Group LLP</strong> and{" "}
                <strong>Vishal & Brothers</strong>. My work creates narratives
                that surpass standard expectations.
              </p>
              <p>
                I am proficient in <strong>BIM & Parametric Modeling</strong>{" "}
                (Revit, Rhino, Grasshopper) and visualization tools like Lumion
                and Twinmotion. My journey is about opening new professional
                doors in architecture and planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Skills (Velocity Scroll) */}
      <div className="py-20 border-t border-white/10 border-b">
        <VelocityScroll
          defaultVelocity={3}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        >
          Revit Rhino Grasshopper AutoCAD Lumion Twinmotion Photoshop
          Illustrator InDesign SketchUp
        </VelocityScroll>
      </div>

      {/* 4. Experience Section (New) */}
      <div className="experience-section py-32 px-6 md:px-20">
        <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-16 border-b border-white/10 pb-4">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 gap-10">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="exp-card group border-l-2 border-white/10 pl-8 hover:border-white transition-colors duration-500"
            >
              <span className="text-xs font-mono text-gray-500 mb-2 block uppercase tracking-widest">
                {exp.period}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                {exp.company}
              </h3>
              <h4 className="text-xl text-white/70 mb-4">{exp.role}</h4>
              <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                {exp.desc}
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
