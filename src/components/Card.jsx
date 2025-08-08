import { memo } from "react";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
export const Card = memo(function ServiceCard({
  id,
  bgImg,
  logo,
  subtext,
  description,
  isOpen,
  onToggle,
  isActive,
  loadingBehavior,
}) {
  return (
    <div className="h-full w-full rounded-4xl p-10 flex items-end justify-center will-change-transform">
      <div
        className={`w-full h-[85%] bg-white rounded-4xl shadow-lg overflow-hidden flex flex-col items-center justify-start relative border-[16px] md:border-[20px] border-[#d9d9d9] ${
          isActive ? "border-[#fbb039]" : ""
        }`}
      >
        <div
          className={`w-full relative top-0 transition-all duration-200 ${
            isOpen ? "h-1/2 " : "h-full"
          }`}
        >
          <img
            src={bgImg}
            alt=""
            className="w-full h-full object-cover "
            loading={loadingBehavior}
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-1.5">
            <img
              src={logo}
              alt=""
              className="aspect-square max-h-1/5  "
              loading={loadingBehavior}
            />
            <h3 className="text-white text-sm md:text-md font-bold tracking-wider">
              {subtext}
            </h3>
            <Button
              as={Link}
              to={`/service/${id}`}
              size="sm"
              variant="flat"
              radius="sm"
              className={`bg-[#ffffff]/60 py-1 px-2  rounded-2xl font-medium  data-[hover=true]:!bg-[#ffffff]/80 data-[hover=true]:!text-[#f73d5c] data-[hover=true]:!scale-105 mt-2 data-[hover=true]:!w-[80%] transition-all duration-500 active:!w-[80%] active:!scale-105 active:bg-[#ffffff]/80 text-xs sm:text-sm md:text-md text-black `}
            >
              Explore Service
            </Button>
          </div>
        </div>

        <button
          className={`aspect-square w-10 absolute bottom-5 lg:bottom-3 p-2 rounded-full bg-white/90 transition-transform duration-200 ${
            isOpen ? "rotate-[270deg] bg-white/20 " : " rotate-90"
          }`}
          onClick={onToggle}
        >
          <img src={assets.pinkarrow} alt="" className="bg-contain" />
        </button>

        {isOpen && (
          <div className="transition-all duration-500 px-2 pb-3 mt-2 overflow-y-auto h-52 text-sm lg:text-base">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
});
