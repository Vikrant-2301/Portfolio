"use client";
import { motion } from "framer-motion";

const archiveItems = [
  { id: 1, type: "Sketch", src: "/assets/9.jpg" },
  { id: 2, type: "Render", src: "/assets/22.jpg" },
  { id: 3, type: "Concept", src: "/assets/R3.jpg" },
  { id: 4, type: "Detail", src: "/assets/12.jpg" },
  { id: 5, type: "Model", src: "/assets/KS1.jpg" },
  { id: 6, type: "Site", src: "/assets/GR11.jpg" },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 px-4 md:px-8 pb-20">
      <div className="mb-16 border-b border-white/10 pb-8">
        <h1 className="text-6xl font-light uppercase">The Archive</h1>
        <p className="text-gray-500 mt-4">
          Experiments, Sketches, and Unbuilt Dreams.
        </p>
      </div>

      {/* Grid with Consistent 4:3 Aspect Ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {archiveItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-lg bg-neutral-900 aspect-[4/3]"
          >
            <img
              src={item.src}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              alt={`Archive ${item.type}`}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {item.type}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
