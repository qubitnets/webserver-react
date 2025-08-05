import { useEffect, useState } from "react";
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
    mainImg: assets.cybersecurity_product,
    cardImg: assets.cybersecurity_bg,
    logo: assets.cybersecurity_logo,
    field: "Cybersecurity",
    name: "ShieldGuard AI - Real-time Threat Protection",
    loading: "eager",
  },
  {
    mainImg: assets.dataanalytics_product,
    cardImg: assets.dataanalytics_bg,
    logo: assets.dataanalytics_logo,
    field: "Data Analytics",
    name: "InsightFlow - Advanced Data Intelligence Platform",
    loading: "eager",
  },
];

const loadedImages = new Set();

function preloadImageOptimized(src) {
  return new Promise((resolve) => {
    if (loadedImages.has(src)) return resolve();
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedImages.add(src);
      resolve();
    };
    img.onerror = resolve;
  });
}

function ProductSlide({ currentSlide, isLoading, handleSlideChange }) {
  return (
    <div
      key={currentSlide.field}
      className="h-full w-full flex max-md:flex-col items-center justify-center gap-5 max-md:gap-4"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl relative will-change-transform">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-500 animate-pulse z-10" />
        )}
        <img
          src={currentSlide.mainImg}
          alt=""
          
          loading={currentSlide.loading}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="max-md:h-2/5 h-full max-md:w-full md:w-[400px] lg:w-[600px] xl:w-[700px] rounded-2xl overflow-hidden relative flex flex-col">
        <img
          src={currentSlide.cardImg}
          alt=""
          loading={currentSlide.loading}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
        <div className="relative w-full h-full bg-black/40 flex max-md:flex-row flex-col items-center max-md:items-start max-md:py-3 justify-center gap-4 max-md:gap-2 max-md:px-3.5">
          <div className="bg-white/40 backdrop-blur-lg w-2/3 rounded-full flex items-center justify-center p-1 max-md:hidden">
            <h1 className="text-xs lg:text-lg text-white font-bold text-center">
              {currentSlide.field}
            </h1>
          </div>
          <div className="aspect-square h-10 lg:h-20">
            <img
              src={currentSlide.logo}
              loading={currentSlide.loading}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center w-[90%]">
            <h1 className="max-md:text-[11px] lg:text-xl text-white font-bold text-center">
              {currentSlide.name}
            </h1>
          </div>
          <button
            type="button"
            className="bg-[#fbb039] px-2 py-1 rounded-full max-md:w-20 w-1/2 max-md:p-1 max-md:text-[12px] mb-3 font-medium hover:w-1/3 transition-all duration-300 hover:bg-[#fbb039]/90"
          >
            Explore
          </button>
        </div>
        <div className="flex justify-evenly items-center gap-3 absolute bottom-3 w-full">
          <button
            type="button"
            onClick={() => handleSlideChange(-1)}
            className="bg-[#fbb039]/80 aspect-square w-11 p-3 rounded-full rotate-180 max-md:w-7 max-md:p-2 hover:bg-[#fbb039]"
            aria-label="Previous Slide"
          >
            <img
              src={assets.blackarrow}
              alt=""
              className="h-full w-full bg-contain"
            />
          </button>
          <button
            type="button"
            onClick={() => handleSlideChange(1)}
            className="bg-[#fbb039]/80 aspect-square w-11 p-3 rounded-full max-md:w-7 max-md:p-2 hover:bg-[#fbb039]"
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
    </div>
  );
}

function ProductPage() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const currentSlide = slides[index];

  useEffect(() => {
    setIsLoading(true);

    const current = slides[index];
    const next = slides[(index + 1) % slides.length];
    const prev = slides[(index - 1 + slides.length) % slides.length];

    const imagesToPreload = [
      current.mainImg,
      current.cardImg,
      current.logo,
      next.mainImg,
      next.cardImg,
      next.logo,
      prev.mainImg,
      prev.cardImg,
      prev.logo,
    ];

    Promise.all(imagesToPreload.map(preloadImageOptimized))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [index]);

  const handleSlideChange = (dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <div className="w-full min-h-[600px] h-[600px] md:h-[680px] xl:h-[85vh] max-sm:mt-2 mt-10 max-md:p-4 pr-10">
      <div className="flex max-md:flex-col items-start max-md:items-center justify-end w-full h-full gap-2 relative">
        <img
          src={assets.product_bg}
          alt=""
          className="bg-contain max-md:hidden h-full w-[300px] lg:w-[450px] xl:w-1/3"
          decoding="async"
          loading="lazy"
        />
        <div className="w-full h-2/12 flex flex-col items-center justify-center gap-2 xl:p-4">
          <h3 className="text-[#f73d5c] font-semibold xl:text-xl">
            <i> Our Work, Your Success</i>
          </h3>
          <h1 className="text-center text-base xl:text-xl">
            <em>
              "Solving complex challenges with smart, scalable solutions that
              drive real impact."
            </em>
          </h1>
        </div>
        <div className="min-h-[450px] md:absolute bottom-7 left-20 border-3 border-[#fbb039] w-[90%] max-w-[1900px] h-[460px] md:h-[500px] lg:h-[520px] xl:h-[65vh] rounded-3xl bg-white p-2.5 overflow-hidden will-change-transform">
          <ProductSlide
            currentSlide={currentSlide}
            isLoading={isLoading}
            handleSlideChange={handleSlideChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
