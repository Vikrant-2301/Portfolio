import React from "react";

function About() {
  return (
    <div className="bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 text-sm uppercase text-amber-700 font-semibold tracking-wide">
              About Us
            </div>
            <h2 className="text-4xl font-extrabold text-amber-900 mb-6">
              A Legacy of Desert Exploration
            </h2>
          </div>
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For over two decades, we've been guiding visitors through the
              mystical landscapes of Pushkar. Our journey began with a simple
              vision: to share the authentic beauty and culture of Rajasthan
              with the world.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we pride ourselves on providing immersive desert
              experiences that combine adventure, comfort, and cultural
              authenticity. Our team of local experts ensures that every safari
              is not just a tour, but a journey into the heart of Rajasthani
              heritage.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                text: "We maintain the true essence of Rajasthani culture in every experience we offer.",
              },
              {
                title: "Sustainability",
                text: "We are committed to preserving the desert ecosystem and supporting local communities.",
              },
              {
                title: "Excellence",
                text: "We strive for the highest standards in service and safety in all our operations.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
