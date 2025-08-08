import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

function Footer() {
  const buttonData = [
    { text: "Privacy Policy", to: "/privacyPolicy" },
    { text: "Refund Policy", to: "/refundPolicy" },
    { text: "Return Policy", to: "/returnPolicy" },
    { text: "Attribution", to: "/attribution" },
    { text: "T&C", to: "/t&c" },
  ];

  return (
    <div className="w-full  rounded-t-3xl mt-2 px-4 py-6 md:px-10 md:py-8" style={{ backgroundColor: "#fbb039" }}>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        {/* Connect Section */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">Connect</h1>
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="aspect-square h-12 bg-white rounded-full p-2 flex items-center justify-center">
                <img src={assets.email} alt="email" className="h-full" />
              </div>
              <div>
                <h2 className="text-sm lg:text-base font-medium">Email:</h2>
                <p className="text-sm">support@qubitnets.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="aspect-square h-12 bg-white rounded-full p-2 flex items-center justify-center">
                <img src={assets.address} alt="address" className="h-full" />
              </div>
              <div>
                <h2 className="text-sm lg:text-base font-medium">Address:</h2>
                <p className="text-sm">
                  QubitNets Technologies, West Delhi (e), New Delhi 110018
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing + Buttons */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold mb-2">Pricing</h1>
            <p className="text-sm mb-6">Consultants charges start from ₹999*</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {buttonData.map((data, index) => (
              <Button
                key={index}
                as={Link}
                to={data.to}
                size="sm"
                variant="light"
                radius="lg"
                className="text-xs md:text-sm bg-white border-b-1.5   data-[hover=true]:!bg-[#fcba51] data-[hover=true]:!text-white focus:!text-white focus:!bg-[#fcba51] transition-all duration-200"
              >
                {data.text}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 h-5 border-t border-gray-400 pt-4 text-center text-sm sm:text-base">
        All Rights Reserved | Copyright © QubitNets.
      </div>
    </div>
  );
}

export default Footer;
