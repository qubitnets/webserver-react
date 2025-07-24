import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets";

const slides = [
  {
    mainImg: assets.product_1,
    cardImg: assets.webdevelopment_bg,
    logo: assets.webdevelopment_logo,
    field: "Web Development",
    name: "SmartCart Pro - Modern Shopping Experience",
    loading: "eager",
  },
  {
    mainImg: assets.product_1,
    cardImg: assets.cybersecurity_bg,
    logo: assets.cybersecurity_logo,
    field: "Cybersecurity",
    name: "ShieldGuard AI - Real-time Threat Protection",
    loading: "lazy",
  },
  {
    mainImg: assets.product_1,
    cardImg: assets.dataanalytics_bg,
    logo: assets.dataanalytics_logo,
    field: "Data Analytics",
    name: "InsightFlow - Advanced Data Intelligence Platform",
    loading: "lazy",
  },
];

const transition = {
  duration: 0.8,
  type: "spring",
  stiffness: 120,
  damping: 20,
  ease: "easeInOut",
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0.7,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0.4,
  }),
};

function ProductPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentSlide = slides[index];
  const handleSlideChange = (dir) => {
    setDirection(dir);
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[600px] md:h-[680px] xl:h-[85vh] max-sm:mt-2 mt-10 max-sm:p-4 pr-10">
      <div className="flex max-sm:flex-col items-start max-md:items-center justify-end w-full h-full gap-2 relative">
        <img
          src={assets.product_bg}
          alt=""
          className="bg-contain max-sm:hidden h-full w-[300px] lg:w-[450px] xl:w-1/3"
          decoding="async"
          loading="lazy"
        />
        <div className="w-full h-2/12 flex flex-col items-center justify-center gap-2 xl:p-4">
          <h3 className="text-[#f73d5c] font-semibold xl:text-xl">
            Our Work, Your Success
          </h3>
          <h1 className="text-center text-base xl:text-xl">
            "Solving complex challenges with smart, scalable solutions that
            drive real impact."
          </h1>
        </div>
        <div className="md:absolute bottom-7 left-20 border-3 border-[#fbb039] w-[90%] max-w-[1900px] h-[460px] md:h-[500px] lg:h-[530px] xl:h-[65vh] rounded-3xl bg-white p-2.5 overflow-hidden will-change-transform">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              className="h-full w-full flex max-md:flex-col items-center justify-center gap-7 max-md:gap-4"
            >
              <motion.div
                key={`left-${index}`}
                className="h-full w-full overflow-hidden rounded-2xl relative will-change-transform"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <img
                  src={currentSlide.mainImg}
                  alt=""
                  loading={currentSlide.loading}
                  className="h-full w-full object-cover"
                  decoding="async"
                />
              </motion.div>
              <div
                key={`right-${index}`}
                className="max-md:h-1/3 h-full max-md:w-full md:w-[400px] lg:w-[600px] xl:w-[700px] rounded-2xl overflow-hidden relative flex flex-col"
              >
                <motion.img
                  src={currentSlide.cardImg}
                  alt=""
                  loading={currentSlide.loading}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover will-change-transform"
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1.5 }}
                  transition={transition}
                />
                <motion.div
                  className="relative w-full h-full bg-black/40 flex max-md:flex-row flex-col items-center max-md:items-start max-md:py-3 justify-center gap-4 max-md:gap-2 max-md:px-3.5"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <div className="bg-white/40 backdrop-blur-lg w-2/3 rounded-full flex items-center justify-center p-1 max-md:hidden">
                    <h1 className="text-xs lg:text-lg text-white font-bold text-center">
                      {currentSlide.field}
                    </h1>
                  </div>
                  <div className="aspect-square h-10 lg:h-20">
                    <img
                      src={currentSlide.logo}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex items-center justify-center w-[90%]">
                    <h1 className="max-md:text-[11px] lg:text-xl text-white font-bold text-center">
                      {currentSlide.name}
                    </h1>
                  </div>
                  <button className="bg-[#fbb039] px-2 py-1 rounded-full max-md:w-20 w-1/2 max-md:p-1 max-md:text-[12px] mb-3 font-medium hover:w-1/3 transition-all duration-300 hover:bg-[#fbb039]/90">
                    Explore
                  </button>
                </motion.div>
                <div className="flex justify-evenly items-center gap-3 absolute bottom-3 w-full">
                  <button
                    onClick={() => handleSlideChange(-1)}
                    className="bg-[#fbb039]/80 aspect-square w-10 p-3 rounded-full rotate-180 max-md:w-7 max-md:p-2 hover:bg-[#fbb039]"
                    aria-label="Previous Slide"
                  >
                    <img
                      src={assets.blackarrow}
                      alt=""
                      className="h-full w-full bg-contain"
                    />
                  </button>
                  <button
                    onClick={() => handleSlideChange(1)}
                    className="bg-[#fbb039]/80 aspect-square w-10 p-3 rounded-full max-md:w-7 max-md:p-2 hover:bg-[#fbb039]"
                    aria-label="Next Slide"
                  >
                    <img
                      src={assets.blackarrow}
                      alt=""
                      className="h-full w-full bg-contain"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
