import React from "react";
import assets from "../assets/assets";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-20 px-6 md:px-16"
      id="hero"
    >
      {/* Gradient Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-200 via-blue-100 to-transparent opacity-40 rounded-full blur-3xl -top-32 -left-32" />
        <div className="absolute w-[40vw] h-[40vw] bg-gradient-to-bl from-blue-100 via-blue-50 to-transparent opacity-30 rounded-full blur-2xl bottom-0 right-0" />
      </div>

      {/* Grid Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full shadow">
            Powering Innovation
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            AI & Data Services That Drive Business Growth
          </h1>
          <p className="text-gray-700 text-lg">
            At QubitNet, we build intelligent solutions that turn data into
            action—empowering enterprises to make smarter decisions faster.
          </p>
          {/* <a
            href="#services"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-semibold text-sm rounded-lg transition duration-200"
          >
            Explore Our Services
          </a> */}
        </div>

        {/* Image Section */}
        <div>
          <img
            src={assets.hero}
            alt="Abstract AI data network illustration"
            className="w-full h-[360px] md:h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
