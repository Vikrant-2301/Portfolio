import About from "@/components/blocks/Home/about";
import Activities from "@/components/blocks/Home/activities";

import Banner from "@/components/blocks/Home/Banner";
import Contact from "@/components/blocks/Home/contact";
import FlexCards from "@/components/blocks/Home/flexcard";
import Gallery from "@/components/blocks/Home/gallery";
import ImageRevealSection from "@/components/blocks/Home/imagereveal";
import MustVisit from "@/components/blocks/Home/mustvisit";
import Story from "@/components/blocks/Home/storytelling";

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        <Banner />
        <About />
        <ImageRevealSection />
        <Story />
        <FlexCards />

        {/* <Activities /> */}
        {/* <MustVisit /> */}
        {/* <Gallery /> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default HomePage;
