"use client";
import { useRef, use } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { architecturalProjects } from "../../../lib/data"; // Relative path

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail({ params }) {
  // Unwrap params for Next.js 15+
  const { id } = use(params);

  const container = useRef(null);
  const project = architecturalProjects.find((p) => p.id === id);

  const currentIndex = architecturalProjects.findIndex((p) => p.id === id);
  const nextProject =
    architecturalProjects[(currentIndex + 1) % architecturalProjects.length];

  if (!project) return notFound();

  useGSAP(
    () => {
      gsap.to(".hero-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".reveal-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".brief-section",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black"
    >
      {/* --- HERO SECTION --- */}
      <section className="hero-section relative h-screen w-full overflow-hidden flex items-end pb-20 px-6 md:px-20">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage || project.coverImage}
            className="hero-img absolute inset-0 w-full h-full object-cover opacity-60"
            alt={project.title}
            fetchpriority="high"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            {/* Project Classification Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest bg-white/5 backdrop-blur-md">
                {project.projectType || "Professional"}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {project.year}
              </span>
            </div>
            <h1 className="text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter mix-blend-difference">
              {project.title}
            </h1>
          </div>

          <div className="max-w-md mb-2">
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* --- BRIEF & DATA SECTION --- */}
      <section className="brief-section py-32 px-6 md:px-20 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Technical Data Grid */}
          <div className="lg:col-span-4 space-y-12">
            <div className="reveal-text border-t border-white/20 pt-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Location
              </h4>
              <p className="text-2xl font-light">{project.location}</p>
            </div>
            <div className="reveal-text border-t border-white/20 pt-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Area
              </h4>
              <p className="text-2xl font-light">{project.area}</p>
            </div>
            <div className="reveal-text border-t border-white/20 pt-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Status
              </h4>
              <p className="text-2xl font-light flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {project.status}
              </p>
            </div>
            <div className="reveal-text border-t border-white/20 pt-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Typology
              </h4>
              <p className="text-2xl font-light">{project.category}</p>
            </div>
          </div>

          {/* Right: Long Description */}
          <div className="lg:col-span-8">
            <h3 className="reveal-text text-4xl md:text-6xl font-light leading-tight mb-12">
              "{project.description}"
            </h3>
            <div className="reveal-text columns-1 md:columns-2 gap-10 text-gray-400 text-lg leading-relaxed space-y-4">
              <p>{project.longDescription}</p>
              <p>
                The design process involved a rigorous study of the vernacular
                architecture, reinterpreting traditional cooling methods for a
                modern context. Every line drawn was an attempt to capture the
                ephemeral quality of light and the solidity of the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CINEMATIC GALLERY (4:3 Aspect Ratio) --- */}
      <section className="py-20 px-6 md:px-20 bg-neutral-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery &&
            project.gallery.map((img, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] overflow-hidden group rounded-sm"
              >
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs uppercase tracking-widest">
                    View {index + 1}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* --- NEXT PROJECT FOOTER --- */}
      <a
        href={`/work/${nextProject.id}`}
        className="block group relative w-full overflow-hidden border-t border-white/10"
      >
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <div className="absolute inset-0 z-0">
            <img
              src={nextProject.heroImage || nextProject.coverImage}
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100"
              alt="Next Project"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
            <div className="overflow-hidden mb-4">
              <span className="inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-sm uppercase tracking-[0.5em] text-gray-400">
                Next Project
              </span>
            </div>

            <h2 className="text-[8vw] md:text-[10vw] font-bold uppercase leading-none tracking-tighter group-hover:scale-105 transition-transform duration-700 ease-out">
              {nextProject.title}
            </h2>

            <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <span className="text-xl uppercase tracking-widest">
                Explore Case Study
              </span>
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
