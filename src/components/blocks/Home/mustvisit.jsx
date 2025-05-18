"use client";
import React from "react";
import { MapPin, Clock, Star } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";

function MustVisit() {
  const places = [
    {
      title: "Pushkar Lake",
      description:
        "One of the most sacred lakes in India, surrounded by 52 bathing ghats.",
      image: "/assets/19.png",
      location: "Pushkar Lake, Pushkar",
      timing: "24 hours",
      rating: 4.8,
    },
    {
      title: "Brahma Temple",
      description:
        "One of the very few temples in the world dedicated to Lord Brahma.",
      image: "/assets/20.png",
      location: "Near Pushkar Lake, Pushkar",
      timing: "6:00 AM - 8:30 PM",
      rating: 4.9,
    },
    {
      title: "Pushkar Camel Fair Ground",
      description:
        "Famous site of the annual Pushkar Camel Fair, a cultural spectacle.",
      image: "/assets/21.png",
      location: "Pushkar Mela Ground, Pushkar",
      timing: "Open during fair season",
      rating: 4.7,
    },
    {
      title: "Savitri Temple",
      description: "Hilltop temple offering panoramic views of Pushkar.",
      image: "/assets/18.png",
      location: "Ratnagiri Hill, Pushkar",
      timing: "5:00 AM - 7:00 PM",
      rating: 4.6,
    },
  ];

  return (
    <div id="must-visit" className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Must Visit Places in Pushkar
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the spiritual and cultural heritage of this sacred city
          </p>
        </div>
      </div>

      {/* Places Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {places.map((place, index) => (
            <ShineBorder
              key={index}
              className="relative flex flex-col h-full w-full items-center justify-between rounded-lg shadow-lg overflow-hidden"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  {place.title}
                </h2>
                <p className="text-gray-600 mb-6">{place.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {place.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {place.timing}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {place.rating}/5
                    </span>
                  </div>
                </div>

                <button
                  className="relative flex items-center gap-2 font-semibold text-base text-amber-700 bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        place.location
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <span className="relative z-10">Get Directions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-amber-700 transition-transform transform duration-200 ease-out"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>

      {/* Travel Tips */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Travel Tips
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Make the most of your visit to these sacred and historical sites
              with our expert recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Best Time to Visit
              </h3>
              <p className="text-gray-600">
                October to March is ideal for comfortable weather. The Pushkar
                Fair in November is a special attraction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Dress Code
              </h3>
              <p className="text-gray-600">
                Modest clothing is recommended. Temples require covered
                shoulders and knees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Photography Tips
              </h3>
              <p className="text-gray-600">
                Early morning and sunset offer the best lighting for
                photography. Some temples may require permits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MustVisit;
