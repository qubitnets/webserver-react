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
    <div className="w-full h-[300px] bg-amber-200 rounded-t-3xl mt-2 p-6 grid grid-cols-2 grid-rows-[auto_auto] gap-4">
      <div className=" w-full h-full p-2">
        <h1 className="text-2xl">Connect</h1>
        <div className="flex flex-col justify-between gap-4 mt-4">
          <div className="flex items-start justify-start gap-5">
            <div className="aspect-square h-14 bg-white rounded-full p-1 flex items-center justify-center">
              <img src={assets.email} alt="" className="h-4/5" />
            </div>
            <div className="flex flex-col">
              <h1>Email:</h1>
              <p>support@qubitnets.com</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-5">
            <div className="aspect-square h-14 bg-white rounded-full p-1 flex items-center justify-center">
              <img src={assets.address} alt="" className="h-4/5" />
            </div>
            <div className="flex flex-col">
              <h1>Address:</h1>
              <p>QubitNets Technologies, West Delhi (e), New Delhi 110018</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full p-2 flex flex-col items-start justify-between">
        <div className="w-full h-full">
          <h1 className="text-2xl">Pricing</h1>
          <p>Consulants charges start from 999*</p>
        </div>
        <div className="flex flex-wrap items-start justify-start mt-4 gap-5">
          {buttonData.map((data, index) => (
            <Button
              key={index}
              as={Link}
              to={data.to}
              size="sm"
              variant="light"
              radius="lg"
              className="text-sm border-b-1.5 bg-white data-[hover=true]:!bg-[#fcba51] data-[hover=true]:!text-white  "
            >
              {data.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="col-span-2 border-t-1.5 border-gray-500 ">
        <h1 className="h-full w-full flex items-center justify-center">
          All Rights Reserved | Copyright © QubitNets.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
