"use client";
import { motion } from "framer-motion";
import { ShinyButton } from "../../components/ui/shiny-button";
import { ExternalLink } from "lucide-react";

// --- CUSTOM DIGITAL PROJECTS DATA ---
const digitalProjects = [
  {
    id: "discover-arch",
    title: "DiscoverArch Platform",
    category: "Architecture Competition Platform",
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    description:
      "A comprehensive platform for architects to participate in design competitions, view jury evaluations, and access educational resources. Features real-time submissions and a dynamic blog system.",
    liveLink: "https://discoverarch.org",
  },
  {
    id: "shree-shyam",
    title: "Shree Shyam Safari",
    category: "Tourism & Experience",
    techStack: ["Next.js", "Framer Motion", "SEO"],
    description:
      "A visually immersive booking platform for desert safaris in Jaisalmer. Designed to convert visitors into guests with smooth animations, gallery showcases, and direct WhatsApp booking integration.",
    liveLink: "https://www.shreeshyamcamelandjeepsafari.com/",
  },
  {
    id: "lpure",
    title: "Lpure E-Commerce",
    category: "Brand Storefront",
    techStack: ["React", "Shopify/Commerce", "Tailwind"],
    description:
      "A minimalist, high-performance e-commerce storefront for Lpure. Focuses on product storytelling, clean aesthetics, and a seamless checkout flow to elevate the brand identity.",
    liveLink: "https://lpure.vercel.app/",
  },
  {
    id: "anc-nasa",
    title: "ANC NASA Convention",
    category: "Hobby / University Event", // Updated Category
    techStack: ["Next.js", "Event API", "Interactive UI"],
    description:
      "The official digital portal for the 67th Annual NASA Convention held at my university. Built as a hobby project to handle event details, schedules, and delegate information for the massive student gathering.",
    liveLink: "https://anc-nasa.vercel.app/",
  },
];

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 px-6 md:px-20 relative overflow-hidden">
      {/* Background Grid Noise */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* HEADER */}
      <div className="relative z-10 mb-20 border-b border-white/10 pb-10">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[10vw] md:text-[6vw] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 uppercase leading-[0.9]"
        >
          &lt;Digital /&gt;
        </motion.h1>
        <p className="font-mono text-gray-400 mt-6 max-w-2xl text-lg md:text-xl">
          Forging digital experiences. A selected index of live platforms,
          e-commerce stores, and hobby projects.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="relative z-10 grid grid-cols-1 gap-32 pb-32 max-w-[1800px] mx-auto">
        {digitalProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start"
          >
            {/* 1. LIVE PREVIEW BLOCK (IFRAME) */}
            <div
              className={`lg:col-span-7 relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl ${index % 2 === 1 ? "lg:order-last" : ""}`}
            >
              {/* Browser Bar Decoration */}
              <div className="absolute top-0 left-0 w-full h-8 bg-neutral-800 flex items-center gap-2 px-4 z-20 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="ml-4 flex-1 h-5 bg-black/20 rounded flex items-center px-3 text-[10px] font-mono text-white/30 truncate">
                  {project.liveLink}
                </div>
              </div>

              {/* The Live Website Iframe */}
              <div className="relative w-full h-full pt-8 bg-white">
                {/* We use a transformation trick: 
                       Make the iframe 200% width/height and scale it down by 50% 
                       to simulate a high-res desktop view instead of a mobile view.
                    */}
                <iframe
                  src={project.liveLink}
                  title={project.title}
                  className="w-[200%] h-[200%] origin-top-left transform scale-50 border-none"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />

                {/* Interaction Shield (Optional: Remove if you want actual interaction, keep if you want it to be just a visual) */}
                {/* We allow clicking through to the actual site via the button, but maybe you want scrolling? 
                        Let's keep it interactive but add a hover hint. */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 bg-transparent"
                  aria-label={`Visit ${project.title}`}
                />
              </div>
            </div>

            {/* 2. CONTENT BLOCK */}
            <div className="lg:col-span-5 space-y-8 py-4">
              <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <span>0{index + 1}</span>
                <span className="w-12 h-[1px] bg-white/20" />
                <span
                  className={project.id === "anc-nasa" ? "text-cyan-400" : ""}
                >
                  {project.category}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors flex items-start gap-4"
                >
                  {project.title}
                  <ExternalLink size={24} className="opacity-50 mt-2" />
                </a>
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-black bg-white px-3 py-1 rounded-sm uppercase tracking-wider font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                {project.description}
              </p>

              <div className="pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <ShinyButton className="bg-white text-black hover:bg-gray-200 px-8 py-3">
                    Visit Live Site
                  </ShinyButton>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
