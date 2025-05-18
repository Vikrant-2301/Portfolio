import About from "@/components/blocks/Home/about";
import Activities from "@/components/blocks/Home/activities";

import Banner from "@/components/blocks/Home/Banner";
import Contact from "@/components/blocks/Home/contact";
import Gallery from "@/components/blocks/Home/gallery";
import MustVisit from "@/components/blocks/Home/mustvisit";

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        <Banner />
        <About />
        <Activities />
        <MustVisit />
        <Gallery />
        <Contact />
      </div>

      {/* WhatsApp Icon (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-20 animate-bounce">
        <a
          href="https://wa.me/+918881121119"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/3.svg" alt="WhatsApp" className="w-12 h-12" />
        </a>
      </div>

      {/* Call Icon (Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-20 animate-bounce">
        <a href="tel:+918881121119" target="_blank" rel="noopener noreferrer">
          <img src="/assets/2.svg" alt="Call" className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
