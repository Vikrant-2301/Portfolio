"use client";
import React from "react";
import { Calendar, Clock, Users } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";

function Activities() {
  const activities = [
    {
      title: "Camel Safari",
      description:
        "Experience the thrill of riding through golden sand dunes on our well-trained camels.",
      image: "/assets/9.png", // Updated image path
      duration: "10-15min",
      groupSize: "1 minimum",
      availability: "Daily",
      price: 299,
    },
    {
      title: "Horse Riding",
      description:
        "Spend a magical night under the stars in our luxury desert camp with traditional entertainment.",
      image: "/assets/10.png", // Updated image path
      duration: "24 hours",
      groupSize: "2 minimum",
      availability: "Daily",
      price: 499,
    },
    {
      title: "Thar Safari",
      description:
        "Visit local villages and experience the authentic Rajasthani way of life.",
      image: "/assets/11.png", // Updated image path
      duration: "4-5 hours",
      groupSize: "2 minimum",
      availability: "Mon-Sat",
      price: 399,
    },
    {
      title: "ATV Bike",
      description:
        "Adventure through the rugged terrain of the Thar Desert in our 4x4 vehicles.",
      image: "/assets/12.png", // Updated image path
      duration: "3-4 hours",
      groupSize: "4 minimum",
      availability: "Daily",
      price: 699,
    },
    {
      title: "Camel Cart Safari",
      description:
        "Experience the charm of traditional desert travel in our camel carts.",
      image: "/assets/13.png", // Updated image path
      duration: "3-4 hours",
      groupSize: "4 minimum",
      availability: "Daily",
      price: 549,
    },
    {
      title: "Overnight Camping",
      description:
        "Spend a night under the stars with a comfortable camp setup in the desert.",
      image: "/assets/14.png", // Updated image path
      duration: "3-4 hours",
      groupSize: "4 minimum",
      availability: "Daily",
      price: 799,
    },
    {
      title: "Rajasthani Dress-up & Photoshoot",
      description:
        "Dress up in traditional Rajasthani attire and capture memories with a desert backdrop.",
      image: "/assets/15.png", // Updated image path
      duration: "3-4 hours",
      groupSize: "4 minimum",
      availability: "Daily",
      price: 599,
    },
    {
      title: "Rajasthani Folk-Dance",
      description:
        "Experience the vibrant folk traditions of Rajasthan through a traditional dance performance.",
      image: "/assets/16.png", // Updated image path
      duration: "3-4 hours",
      groupSize: "4 minimum",
      availability: "Daily",
      price: 449,
    },
    {
      title: "Rajasthani Food",
      description:
        "Savor authentic Rajasthani cuisine with a specially curated menu in a traditional setting.",
      image: "/assets/17.png", // Updated image path
      duration: "3-4 hours",
      groupSize: "4 minimum",
      availability: "Daily",
      price: 399,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Desert Adventures
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Choose from our carefully curated selection of desert experiences
          </p>
        </div>
      </div>
      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {activities.map((activity, index) => (
            <ShineBorder
              key={index}
              className="relative flex flex-col h-full w-full items-center justify-between rounded-lg shadow-lg overflow-hidden"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  {activity.title}
                </h2>
                <p className="text-gray-600 mb-6">{activity.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {activity.duration}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {activity.groupSize}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      {activity.availability}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Per Person: {activity.price}
                  </span>
                  <button
                    className="relative flex items-center gap-2 font-semibold text-base text-amber-700 bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out"
                    onClick={() =>
                      window.open("https://wa.me/+918881121119", "_blank")
                    }
                  >
                    <span className="relative z-10">Know More</span>
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
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
      {/* Additional Information Section */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              What to Expect
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All our activities are designed to provide you with an authentic
              and safe desert experience. Our experienced guides ensure your
              comfort and safety throughout the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Safety First
              </h3>
              <p className="text-gray-600">
                All our activities follow strict safety protocols and are led by
                trained professionals.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Comfortable Experience
              </h3>
              <p className="text-gray-600">
                We provide all necessary equipment and ensure your comfort
                throughout the activity.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Authentic Adventure
              </h3>
              <p className="text-gray-600">
                Experience the true spirit of Rajasthan with our carefully
                curated activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
