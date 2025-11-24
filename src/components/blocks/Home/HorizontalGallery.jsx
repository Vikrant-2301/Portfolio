"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { architecturalProjects } from "../../../lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const triggerRef = useRef(null);
  const moveContainerRef = useRef(null);

  useGSAP(
    () => {
      const container = moveContainerRef.current;
      // Calculate width difference (Total Content Width - Viewport Width)
      const getScrollAmount = () => {
        let itemsWidth = container.scrollWidth;
        return -(itemsWidth - window.innerWidth);
      };

      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`, // Scroll duration based on content length
        pin: true,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true, // Recalculate on resize
      });
    },
    { scope: triggerRef }
  );

  const displayedProjects = architecturalProjects.filter((p) => p.isFeatured);

  return (
    <section
      ref={triggerRef}
      className="relative bg-neutral-900 text-white overflow-hidden"
    >
      {/* Container Structure Update:
        - Removed 'overflow-x-auto' and 'snap' classes.
        - Now relies entirely on GSAP 'x' transform for movement on ALL devices.
      */}
      <div
        ref={moveContainerRef}
        className="flex h-screen items-center px-6 md:px-0 gap-8 md:gap-0 w-fit"
      >
        {/* --- 00. INTRO CARD --- */}
        <div className="shrink-0 w-[90vw] md:w-[40vw] h-full flex flex-col justify-center md:pl-20">
          <div className="border-l border-white/20 pl-8 md:pl-12">
            <h2 className="text-6xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-8">
              Selected <br /> <span className="text-gray-500">Works.</span>
            </h2>
            <p className="max-w-md text-lg text-gray-400 leading-relaxed">
              A collection of spatial narratives exploring the void between raw
              materiality and human emotion.
            </p>
          </div>
        </div>

        {/* --- PROJECTS LOOP --- */}
        {displayedProjects.map((project, index) => (
          <Link
            href={`/work/${project.id}`}
            key={index}
            className="group relative shrink-0 w-[85vw] md:w-[60vw] h-[60vh] md:h-[80vh] mx-4 md:mx-20 cursor-pointer"
          >
            {/* Image Container */}
            <div className="w-full h-full relative overflow-hidden bg-gray-800 rounded-sm">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                priority={index < 2}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />

              {/* Mobile Title Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:hidden bg-gradient-to-t from-black to-transparent">
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.category}</p>
              </div>
            </div>

            {/* Desktop Info (Reacts to hover) */}
            <div className="hidden md:flex absolute -bottom-16 left-0 w-full items-end justify-between border-b border-white/20 pb-4">
              <div>
                <span className="font-mono text-xs text-gray-500 block mb-2">
                  0{index + 1}
                </span>
                <h3 className="text-5xl font-light tracking-tight">
                  {project.title}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                  {project.category}
                </p>
                <span className="text-xs font-mono text-gray-600">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Hover Interaction Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform scale-0 group-hover:scale-100">
              <span className="text-sm uppercase tracking-widest font-bold">
                View
              </span>
            </div>
          </Link>
        ))}

        {/* --- END CARD --- */}
        <div className="shrink-0 w-[90vw] md:w-[40vw] h-full flex items-center justify-center border-l border-white/10 md:border-none ml-8">
          <Link href="/work" className="group flex flex-col items-center gap-6">
            <div className="w-24 h-24 md:w-40 md:h-40 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
              <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
              Full Archive
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
