"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShinyButton } from "@/components/ui/shiny-button";

const Banner = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  // Media list for carousel
  const media = [
    { type: "image", src: "/assets/home1.png" },
    { type: "image", src: "/assets/home2.png" },
    { type: "image", src: "/assets/home.png" },
    { type: "video", src: "/assets/home_vd.mp4" },
  ];

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <Slider {...settings} className="absolute top-0 left-0 w-full h-full z-0">
        {media.map((item, index) => (
          <div key={index} className="relative h-screen">
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`slide-${index}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </Slider>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center bg-black bg-opacity-60">
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <h1 className="text-4xl lg:text-6xl font-bold mb-5 text-white leading-tight">
            Discover the Magic <br /> of Pushkar
          </h1>
        </Fade>
        <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
          <p className="text-lg lg:text-xl font-light mb-10 text-gray-300">
            Your journey starts here
          </p>
        </Fade>
        <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce>
          <ShinyButton className="bg-white text-amber-900">
            <Link href="#about-section">Discover More</Link>
          </ShinyButton>
        </Fade>
      </div>

      {/* Bottom Option Section with SVG */}
      <div className="absolute bottom-10 left-0 w-full text-center z-10 flex items-center justify-center space-x-4">
        <Fade direction="up" delay={1200} cascade damping={0.1} triggerOnce>
          <p className="text-white text-sm font-light">
            Join us for unforgettable experiences in Pushkar.{" "}
            <Link href="#contact" className="text-amber-800 underline">
              Contact us
            </Link>{" "}
            to know more!
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
