"use client";
import { useState } from "react";
import Image from "next/image";

const cardsData = [
  {
    title: "Spring",
    subtitle: "Nature Looks Attractive",
    icon: "sunny",
    color: "text-green-500",
    bg: "/assets/9.png",
  },
  {
    title: "Summer",
    subtitle: "Summer is a State of Mind",
    icon: "sparkles",
    color: "text-blue-500",
    bg: "/assets/10.png",
  },
  {
    title: "Autumn",
    subtitle: "Life Starts All Over Again",
    icon: "thunderstorm",
    color: "text-orange-500",
    bg: "/assets/11.png",
  },
  {
    title: "Winter",
    subtitle: "Not a Season, It's Celebration",
    icon: "snow",
    color: "text-white",
    bg: "/assets/12.png",
  },
];

export default function FlexCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="flex w-full h-[85vh] overflow-hidden flex-col md:flex-row gap-0">
        {cardsData.map((card, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`relative flex flex-col justify-end transition-all duration-500 ease-in-out cursor-pointer overflow-hidden 
              ${isActive ? "flex-[5] md:flex-[5]" : "flex-[1] md:flex-[1]"} 
              h-full w-full`}
            >
              <Image
                src={card.bg}
                alt={card.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

              <div className="relative z-10 p-6">
                <div className={`text-3xl ${card.color}`}>
                  <ion-icon name={card.icon}></ion-icon>
                </div>
                <div className="text-2xl font-bold">{card.title}</div>
                <div className="text-sm text-white/80">{card.subtitle}</div>
                {/* Line below subtitle */}
                <div className="mt-2 h-[2px] w-full bg-white/50"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ionicons CDN */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
