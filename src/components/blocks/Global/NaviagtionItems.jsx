"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "/" },
  { name: "Skills", href: "/" },
  { name: "Work", href: "/" },
  { name: "Contact", href: "/" },
];

export const NavigationItems = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null); // ✅ Fixed for JSX

  return (
    <div className="flex space-x-6">
      {navLinks.map((link) => (
        <Link href={link.href} key={link.name}>
          <div
            className="group relative h-6 overflow-hidden flex items-center text-white cursor-pointer"
            onMouseEnter={() => setHovered(link.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              •
            </span>

            <div className="overflow-hidden h-6">
              <div
                className={`flex flex-col transition-transform duration-300 ${
                  hovered === link.name
                    ? "animate-scroll-up"
                    : hovered === null || hovered !== link.name
                    ? ""
                    : "animate-scroll-down"
                }`}
              >
                <span>{link.name}</span>
                <span>{link.name}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
