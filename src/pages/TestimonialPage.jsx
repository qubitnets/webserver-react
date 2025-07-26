import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import assets from "../assets/assets";
import StarRating from "../components/Rating";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati nisi dicta eligendi maxime!Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    author: "-- John Doe",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    text: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    author: "-- Jane Smith",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    author: "-- Alex Johnson",
    rating: 3,
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
  },
];

function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { margin: "-100px" });
  useEffect(() => {
    if (!isInView) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isInView]);

  const stopCarousel = () => {
    clearInterval(intervalRef.current);
  };

  const startCarousel = () => {
    if (isInView) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full h-[620px] md:h-[700px] xl:h-[90vh] mt-10 p-3 grid grid-cols-[1.5fr_1fr_1fr] grid-rows-4 gap-2 max-md:grid-cols-2 ">
      <div className="row-span-4 max-md:hidden md:px-2 lg:px-5">
        <div className="border-[20px] border-gray-300 rounded-3xl h-full w-full">
          <div className="w-full h-full p-3 rounded-2xl">
            <img
              src={assets.dataanalytics_bg}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center">
        <h3 className="text-[#f73d5c] text-2xl">Testimonials</h3>
        <p className="text-xl md:text-3xl text-center p-3">
          "Our clients don't just give feedback-they share transformation
          stories."
        </p>
      </div>
      <div
        ref={carouselRef}
        className="col-span-2 row-span-3 md:col-start-2 row-start-2 relative flex justify-center items-center overflow-hidden"
        onMouseEnter={stopCarousel}
        onMouseLeave={startCarousel}
        onTouchStart={stopCarousel}
        onTouchEnd={startCarousel}
      >
        <img
          src={assets.testimonials_bg}
          alt=""
          className="bg-contain w-full h-full inset-0 absolute"
        />
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full  h-1/2 relative p-3 sm:w-3/4 md:w-11/12 lg:h-2/3  lg:p-11 max-w-[900px] "
        >
          <div className="w-full h-full  border-2 border-[#f73d5c] rounded-3xl relative">
            <div className="absolute h-full w-[95%] bg-[#F8C16A] rounded-3xl left-[2%] top-[10%] p-3 z-20">
              <div className="w-full h-full rounded-2xl pt-3 px-4 overflow-hidden flex flex-col gap-2">
                <div className="flex items-start justify-center gap-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.author}
                      className="aspect-square w-11 md:w-16 lg:w-20 bg-white rounded-2xl object-cover"
                    />
                    <StarRating
                      Rating={currentTestimonial.rating}
                      size={17}
                      color="#f73d5c"
                    />
                  </div>
                  <div className="w-full max-sm:max-h-20 md:max-h-24 xl:max-h-20 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                    <p className="text-xs md:text-base lg:text-lg whitespace-pre-line">
                      {currentTestimonial.text}
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex items-end justify-end">
                  <p className="text-sm md:text-sm lg:text-lg font-semibold">
                    {currentTestimonial.author}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-24%] right-[15%]">
              <img src={assets.polygon} alt="" className="object-contain" />
            </div>
          </div>
          <motion.div
            className="absolute top-[-23%] md:top-[-21%] lg:top-[-7%] xl:top-[-4%] right-[10%]"
            animate={{
              y: [0, -10, 0], // float up and down
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={assets.colon} alt="" className="object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TestimonialPage;
