"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div id="home-section" className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center bg-black bg-opacity-50">
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-white">
            Explore Pushkar <br /> Like Never Before
          </h1>
        </Fade>
        <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
          <p className="text-lg lg:text-xl font-light mb-10 text-gray-300">
            Welcome to Camel Safari
          </p>
        </Fade>
        <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce>
          <button className="border text-xl font-medium rounded-full text-white py-5 px-10 bg-amber-800 hover:bg-amber-900">
            <Link href="#about-section">Explore now</Link>
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
