import React from "react";

const AboutHeader = () => {
  return (
    <header className="bg-gray-900 text-white py-12 px-4 text-center shadow-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
        About Us
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
        Discover our journey, our mission, and the values that drive us every day.
      </p>
    </header>
  );
};

export default AboutHeader;
