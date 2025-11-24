"use client";
import { motion } from "framer-motion";
import { webProjects } from "../../lib/data";
import { ShinyButton } from "../../components/ui/shiny-button";

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 px-6 md:px-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mb-20">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[6vw] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 uppercase"
        >
          &lt;Digital /&gt;
        </motion.h1>
        <p className="font-mono text-gray-400 mt-4 max-w-xl text-lg">
          Experimental computations. Exploring the intersection of algorithmic
          design, web technologies, and 3D spatial experiences.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-20 pb-32">
        {webProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border border-white/10 bg-white/5 p-6 md:p-10 rounded-xl hover:border-white/30 transition-colors"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {project.title}
                </h2>
                <span className="font-mono text-xs text-gray-500">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-black bg-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="flex gap-4 pt-4">
                {project.liveLink && project.liveLink !== "#" ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShinyButton className="bg-white text-black hover:bg-gray-200">
                      View Project
                    </ShinyButton>
                  </a>
                ) : (
                  <span className="text-gray-500 font-mono text-sm border border-gray-800 px-4 py-2 rounded-lg">
                    Coming Soon
                  </span>
                )}
                {/* GitHub Link Removed as requested */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
