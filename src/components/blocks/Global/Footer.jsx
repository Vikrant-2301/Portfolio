"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div
      className="relative h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[80vh] bg-white text-black flex flex-col justify-between p-6 md:p-20 -z-10">
        {/* Top Section */}
        <div className="flex justify-between items-start border-b-2 border-black pb-8">
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-widest font-bold mb-4">
              Socials
            </span>
            <Link
              href="#"
              className="text-xl hover:text-gray-500 transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xl hover:text-gray-500 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-xl hover:text-gray-500 transition-colors"
            >
              Twitter
            </Link>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-sm uppercase tracking-widest font-bold mb-4">
              Navigation
            </span>
            <Link
              href="/"
              className="text-xl hover:text-gray-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-xl hover:text-gray-500 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-xl hover:text-gray-500 transition-colors"
            >
              About
            </Link>
          </div>
        </div>

        {/* Massive Call To Action */}
        <div className="flex flex-col items-center justify-center h-full group cursor-pointer">
          <p className="text-sm uppercase tracking-[0.5em] mb-4 text-gray-500 group-hover:text-black transition-colors">
            Have an idea?
          </p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[10vw] md:text-[12vw] font-black leading-none uppercase tracking-tighter text-center group-hover:scale-105 transition-transform duration-500 ease-out"
          >
            <a href="mailto:vikrant.yadav1401@gmail.com">Let's Talk</a>
          </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end text-xs uppercase tracking-widest font-mono">
          <p>© 2025 Vikrant Yadav</p>
          <p>
            Local Time:{" "}
            {new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            IST
          </p>
          <p>Designed in India</p>
        </div>
      </div>
    </div>
  );
}
