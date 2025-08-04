import React from "react";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
const Serviceccta = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-white py-20 px-6 sm:px-12 md:px-20 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-200 via-blue-100 to-transparent opacity-30 blur-3xl rounded-full -top-20 -left-32"></div>
        <div className="absolute w-[40vw] h-[40vw] bg-gradient-to-br from-yellow-100 via-white to-transparent opacity-20 blur-2xl rounded-full -bottom-20 -right-20"></div>
      </div>

      {/* Main CTA content */}
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <span className="inline-block px-4 py-1 text-xs font-bold text-white bg-blue-600 rounded-full shadow">
          DISCOVER THE POWER OF AI
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          Elevate Your Business with QubitNet’s Smart Services
        </h2>

        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
          Whether it’s AI development, data analytics, or cloud solutions—we
          provide innovative strategies tailored to your goals. Let’s build the
          future together.
        </p>

        <Button
          as={Link}
          to="/contact"
          variant="flat"
          radius="lg"
          className={`
              transition-all duration-300
              border-2 border-[#fbb039]
              bg-white text-black
              text-xs sm:text-sm px-2 py-1
              md:bg-[#fbb039] md:text-white md:px-3 md:py-1 
              md:text-base lg:text-md 
              hover:bg-white hover:text-[#fa9c07]
              active:bg-[#fbb039] active:text-white 
            `}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default Serviceccta;
