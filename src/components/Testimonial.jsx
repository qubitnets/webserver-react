import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import assets from "../assets/assets";
import StarRating from "../components/Rating";

const testimonials = [
  {
    id: 1,
    text: "Transformed our IT infrastructure. QubitNets Technologies completely upgraded how we manage our workflow and data. Their innovative solutions not only improved efficiency but also reduced operational costs significantly. Truly a dependable partner in tech.",
    author: "– Pierluigi M. , IT Head, Virtual Contacts",
    rating: 5,
  },
  {
    id: 2,
    text: "Reliable and professional tech team. Working with QubitNets was seamless. Their team quickly understood our requirements for cloud migration and executed the project ahead of schedule. The after-support was equally impressive. ",
    author: " – Rohit Mehta, Founder, Innovex Startups ",
    rating: 4,
  },
  {
    id: 3,
    text: "Cutting-edge solutions for our business. The experts at QubitNets helped us implement AI-driven analytics that now power our decision-making. Their ability to blend innovation with practicality makes them stand out in the industry.  ",
    author: " – Ayesha Khan, COO, RetailNext Pvt. Ltd.  ",
    rating: 3,
  },
  {
    id: 4,
    text: "True technology partners, not just vendors. We consider QubitNets an extension of our own team. Their cybersecurity solutions gave us peace of mind and allowed us to scale faster without worrying about risks. Highly recommend their services.    ",
    author: " – Nikhil Verma, Director, SecureBank ",
    rating: 4,
  },
  {
    id: 4,
    text: "Exceeded expectations with their expertise. From software development to ongoing IT support, QubitNets provided solutions that were tailor-made for our business. The professionalism and talent of their team are truly remarkable.      ",
    author: "  – Sneha Patel, CEO, EduTech Global ",
    rating: 3,
  },
];

function Testimonial() {
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
        <h3 className="text-[#f73d5c] text-2xl">
          <i>Testimonials</i>
        </h3>
        <p className="text-xl md:text-3xl text-center p-3">
          <em>
            "Our clients don't just give feedback-they share transformation
            stories."
          </em>
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
                      src={
                        currentTestimonial.image
                          ? currentTestimonial.image
                          : assets.user
                      }
                      alt={currentTestimonial.author}
                      className={`aspect-square w-11 md:w-16 lg:w-20 bg-white rounded-2xl object-cover ${
                        currentTestimonial.image ? "p-0" : "p-4"
                      }`}
                    />
                    <StarRating
                      Rating={currentTestimonial.rating}
                      size={17}
                      color="#f73d5c"
                    />
                  </div>
                  <div className="w-full max-sm:max-h-20 md:max-h-24 xl:max-h-20 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                    <p className="text-xs md:text-base lg:text-lg whitespace-pre-line text-gray-800">
                      {currentTestimonial.text}
                    </p>
                  </div>
                </div>
                <div className="w-full h-full flex items-end justify-end">
                  <p className="text-sm md:text-sm lg:text-lg font-semibold text-gray-800">
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
            className="absolute top-[-26%] md:top-[-24%] lg:top-[-10%] xl:top-[-7%] right-[10%]"
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

export default Testimonial;
