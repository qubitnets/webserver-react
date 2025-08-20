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
    <div className="w-full  rounded-t-3xl mt-2 px-4 py-2 md:px-5 md:py-3 bg-[#fabb55]">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6">
        {/* Connect Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">Connect</h1>
          <div className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="aspect-square h-12 bg-white rounded-full p-2 flex items-center justify-center">
                <img src={assets.email} alt="email" className="h-full" />
              </div>
              <div>
                <h2 className="text-sm lg:text-base font-medium">Email:</h2>
                <p className="text-sm">info@qubitnets.com</p>
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

        <div className="flex flex-col justify-between h-full">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">Links</h1>
          <div className="flex flex-wrap items-center gap-2 mb-6 lg:gap-8 ">
            <div className="flex gap-1 items-center justify-start flex-col">
              <div className="aspect-square h-10 bg-white rounded-full p-2 flex items-center justify-center">
                <img src={assets.insta} alt="email" className="h-full" />
              </div>
              <div>
                {/* <h2 className="text-sm lg:text-base">instagram</h2> */}
                <a
                  href="#"
                  className="hover:underline active:underline text-sm font-medium"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="flex gap-1 items-center justify-start flex-col">
              <div className="aspect-square h-10 bg-white rounded-full p-1 flex items-center justify-center">
                <img src={assets.facebook} alt="email" className="h-full" />
              </div>
              <div>
                {/* <h2 className="text-sm lg:text-base">instagram</h2> */}
                <a
                  href="#"
                  className="hover:underline active:underline text-sm font-medium "
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="flex gap-1 items-center justify-start flex-col">
              <div className="aspect-square h-10 bg-white rounded-full p-2 flex items-center justify-center">
                <img src={assets.x} alt="email" className="h-full" />
              </div>
              <div>
                {/* <h2 className="text-sm lg:text-base">instagram</h2> */}
                <a
                  href="#"
                  className="hover:underline active:underline text-sm font-medium"
                >
                  X
                </a>
              </div>
            </div>
            <div className="flex gap-1 items-center justify-start flex-col">
              <div className="aspect-square h-10 bg-white rounded-full p-1 flex items-center justify-center">
                <img src={assets.linkedin} alt="email" className="h-full" />
              </div>
              <div>
                {/* <h2 className="text-sm lg:text-base">instagram</h2> */}
                <a
                  href="#"
                  className="hover:underline active:underline text-sm font-medium"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div className="flex gap-1 items-center justify-start flex-col">
              <div className="aspect-square h-10 bg-white rounded-full p-0.5 flex items-center justify-center">
                <img src={assets.youtube} alt="email" className="h-full" />
              </div>
              <div>
                {/* <h2 className="text-sm lg:text-base">instagram</h2> */}
                <a
                  href="#"
                  className="hover:underline active:underline text-sm font-medium"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
          <p>Consultants charges start from ₹999*</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6  border-t border-gray-400 pt-3 text-center text-sm sm:text-base flex items-center justify-center flex-wrap gap-x-6">
        <p>All Rights Reserved | Copyright © QubitNets.</p>

        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
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
  );
}

export default Footer;
