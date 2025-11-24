"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Work", href: "/work" },
  { title: "Digital", href: "/web-dev" },
  { title: "Archive", href: "/archive" },
  { title: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const menuVariants = {
    initial: {
      y: "-100%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    animate: {
      y: "0%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const renderOverlay = mounted
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 z-[9998] bg-[#0a0a0a] flex flex-col justify-between px-6 pb-10 pt-24"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              >
                <X size={32} />
              </button>

              {/* Links Container - Centered */}
              <div className="flex-1 flex flex-col justify-center items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 + index * 0.1 },
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative block text-5xl font-black text-white/50 hover:text-white transition-colors uppercase tracking-tighter text-center"
                    >
                      <span className="inline-block transition-transform duration-500 group-hover:-translate-y-2">
                        {item.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                className="flex justify-between items-end border-t border-white/10 pt-6 text-white/40 font-mono text-xs uppercase tracking-widest"
              >
                <span>Based in India</span>
                <span>© 2025</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById("mobile-nav-root")
      )
    : null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-[99] w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
      >
        <span className="block h-[1px] w-6 bg-white transition-all duration-300 group-hover:w-8" />
        <span className="block h-[1px] w-6 bg-white transition-all duration-300 group-hover:w-4 group-hover:translate-x-1" />
      </button>

      {renderOverlay}
    </>
  );
}
