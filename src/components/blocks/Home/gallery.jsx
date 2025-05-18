"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div id="gallery" className="bg-amber-50">
      <div className="relative py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the spiritual and cultural heritage of this sacred city
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
            <Image
              src="/assets/22.png"
              alt="pizza-one"
              width={1000}
              height={805}
              className="inner-img"
            />
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              <div className="row-span-1 overflow-hidden rounded-3xl">
                <Image
                  src="/assets/27.png"
                  alt="pizza-two"
                  width={700}
                  height={405}
                  className="inner-img"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/assets/26.png"
                    alt="pizza-three"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/assets/25.png"
                    alt="pizza-four"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
