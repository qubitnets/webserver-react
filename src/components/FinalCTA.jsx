import React from "react";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-20 px-6"
      id="final-cta"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Transform Your Data Strategy?
        </h2>
        <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Let us unlock the full potential of your data. Our experts are ready
          to guide you with advanced analytics, automation, and AI solutions,
          whether you're starting out or scaling up.
        </p>

        <Button
          as={Link}
          to="/contact"
          variant="flat"
          radius="sm"
          className={`
                      text-sm px-4 sm:text-lg sm:py-4 sm:px-5 lg:py-7 lg:text-xl lg:px-7 xl:px-5 xl:text-lg xl:py-5 2xl:px-7 2xl:py-7 2xl:text-xl bg-[#fa9c07] text-white border-[#fa9c07] border-3 data-[hover=true]:bg-[#ffffff] data-[hover=true]:text-black
                active:!bg-[#ffffff] active:!text-black active:transition-all active:duration-150
                    `}
        >
          <FaEnvelope /> Contact Us
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
