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
        {/* <Gallery /> */}
        <Activities />
        <MustVisit />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
