"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { architecturalProjects } from "@/lib/data"; // Import data

const categories = [
  "All",
  ...new Set(architecturalProjects.map((p) => p.category)),
];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? architecturalProjects
      : architecturalProjects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 px-6 md:px-20">
      {/* Header */}
      <div className="mb-20 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end gap-8">
        <h1 className="text-[8vw] leading-[0.8] font-bold uppercase">
          Selected <br /> <span className="text-gray-600">Works</span>
        </h1>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all text-sm uppercase tracking-wider ${
                filter === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/30 hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-10 pb-32">
        {filteredProjects.map((project) => (
          <Link
            href={`/work/${project.id}`}
            key={project.id}
            className="group block"
          >
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative aspect-[4/3] overflow-hidden bg-neutral-900 mb-6 rounded-sm"
            >
              <Image
                src={project.coverImage}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                alt={project.title}
              />
            </motion.div>
            <div className="flex justify-between items-start border-b border-white/10 pb-4 group-hover:border-white transition-colors">
              <div>
                <h3 className="text-3xl font-light">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.location}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase text-gray-500 bg-white/10 px-2 py-1 rounded">
                  {project.category}
                </p>
                <p className="text-sm text-white mt-2">{project.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
