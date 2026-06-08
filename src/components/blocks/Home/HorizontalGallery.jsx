"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { architecturalProjects } from "@/lib/data";

// Filter featured projects
const projects = architecturalProjects.filter((p) => p.isFeatured);

export default function VerticalProjectStack() {
  return (
    <section className="bg-[#050505] text-white py-20 md:py-32 overflow-hidden">
      {/* HEADER */}
      <div className="container mx-auto px-6 md:px-20 mb-20 md:mb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l border-white/20 pl-8"
        >
          <span className="block text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
            Selected Works
          </span>
          <h1 className="text-[12vw] md:text-[6vw] font-bold uppercase leading-[0.9] tracking-tighter">
            Featured <br /> <span className="text-gray-600">Case Studies</span>
          </h1>
        </motion.div>
      </div>

      {/* PROJECTS LIST */}
      <div className="flex flex-col gap-20 md:gap-40 px-6 md:px-20 max-w-[1800px] mx-auto">
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const container = useRef(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // Determine layout direction (Zig-Zag)
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-20 items-center`}
    >
      {/* 1. IMAGE BLOCK */}
      <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/9] relative overflow-hidden rounded-lg bg-neutral-900 group">
        <Link href={`/work/${project.id}`} className="block w-full h-full">
          <motion.div
            style={{ y: yParallax, scale: scaleImage }}
            className="w-full h-full relative"
          >
            <Image
              src={project.coverImage}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={project.title}
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </motion.div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

          {/* Mobile Overlay Text (Visible only on small screens) */}
          <div className="absolute bottom-0 left-0 p-6 md:hidden bg-gradient-to-t from-black/80 to-transparent w-full">
            <span className="text-xs font-mono text-white/70 mb-1 block">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold uppercase text-white">
              {project.title}
            </h3>
          </div>
        </Link>
      </div>

      {/* 2. TEXT BLOCK */}
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        {/* Index Number */}
        <div className="hidden md:block mb-8 border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-gray-500">
            0{index + 1} / {project.year}
          </span>
        </div>

        <h2 className="hidden md:block text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-none mb-6 group-hover:text-gray-300 transition-colors">
          <Link href={`/work/${project.id}`}>{project.title}</Link>
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-gray-400">
            {project.category}
          </span>
          <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-gray-400">
            {project.location}
          </span>
          <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-gray-400">
            {project.status}
          </span>
        </div>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
          {project.description}
        </p>

        <Link
          href={`/work/${project.id}`}
          className="group/btn inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-gray-300 transition-colors"
        >
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
          Explore Case Study
        </Link>
      </div>
    </motion.div>
  );
}
