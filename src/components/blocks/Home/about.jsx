"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function EnhancedAbout() {
  const disciplines = [
    "Residential Architecture",
    "Computational Design",
    "Sustainable Urbanism",
    "Interior Spatiality",
  ];

  return (
    <section className="relative bg-white text-black overflow-hidden">
      {/* 1. Kinetic Typography Strip */}
      <div className="border-y border-black/5 bg-neutral-50 py-8">
        <VelocityScroll
          defaultVelocity={1.5}
          className="font-mono text-xs md:text-sm font-medium uppercase tracking-[0.8em] text-gray-400"
        >
          Form Follows Fiction · Structure as Narrative · The Poetry of Logic ·
        </VelocityScroll>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
        {/* Left: The Manifesto (Description) */}
        <div className="lg:col-span-7 p-8 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/5 relative">
          {/* Decorative Background Number */}
          <span className="absolute top-10 left-10 text-[12rem] md:text-[20rem] font-bold text-gray-50 opacity-50 select-none -z-10 leading-none overflow-hidden">
            01
          </span>

          <div className="relative z-10 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-6 flex items-center gap-4 text-gray-500">
                <span className="w-10 h-[1px] bg-black"></span>
                About The Architect
              </h4>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-8">
                Constructing <br />
                <span className="font-serif italic font-medium">
                  silence
                </span>{" "}
                in a <br />
                noisy world.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-xl text-lg md:text-xl text-gray-600 leading-relaxed space-y-6"
            >
              <p>
                I am <strong className="text-black">Vikrant Yadav</strong>, an
                architect and digital explorer based in India. My work operates
                at the intersection of vernacular tradition and algorithmic
                precision.
              </p>
              <p>
                I believe architecture is not merely about sheltering bodies,
                but about housing emotions. By blending raw materiality with
                computational design, I create spaces that adapt, breathe, and
                resonate with their context.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b border-black pb-2 hover:text-gray-600 hover:border-gray-600 transition-all"
              >
                Read Full Biography
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right: Disciplines & Visuals */}
        <div className="lg:col-span-5 bg-neutral-950 text-white flex flex-col justify-between p-8 md:p-20 relative">
          {/* Abstract Grid Texture */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-white/50 text-xs font-mono uppercase tracking-widest mb-10">
              Core Disciplines
            </h3>
            <ul className="space-y-6">
              {disciplines.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-baseline gap-4 group cursor-default"
                >
                  <span className="text-xs font-mono text-white/30">
                    0{i + 1}
                  </span>
                  <span className="text-2xl md:text-3xl font-light border-b border-transparent group-hover:border-white/50 transition-all pb-1">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-20 lg:mt-0">
            <div className="w-full h-[1px] bg-white/20 mb-6"></div>
            <p className="font-mono text-xs text-white/40 uppercase leading-loose">
              Currently accepting commissions <br />
              for residential & commercial projects <br />
              globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
