"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/" },
  { name: "Work", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const NavigationItems = () => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative flex w-fit rounded-full border border-white/10 bg-black/50 backdrop-blur-md p-1"
    >
      {navLinks.map((link) => (
        <Tab key={link.name} setPosition={setPosition} href={link.href}>
          {link.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-6 py-3 text-xs font-bold uppercase text-white mix-blend-difference md:px-8 md:py-4 md:text-sm"
    >
      <Link href={href} className="block w-full h-full">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-full rounded-full bg-white"
    />
  );
};
