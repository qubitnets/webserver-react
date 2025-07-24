import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import assets from "../assets/assets";
import { Card } from "../components/Card";
const serviceData = [
  {
    id: 1,
    bgImg: assets.dataanalytics_bg,
    logo: assets.dataanalytics_logo,
    subtext: "Data Analytics",
    description:
      "Transform raw data into actionable insights through interactive dashboards, reporting, and AI-enhanced analysis.",
    loadingBehavior: "eager",
  },
  {
    id: 2,
    bgImg: assets.aidevelopment_bg,
    logo: assets.cybersecurity_logo,
    subtext: "AI Development",
    description:
      "Design intelligent systems that learn, adapt, and optimize to solve complex challenges and drive smarter business outcomes.",
    loadingBehavior: "eager",
  },
  {
    id: 3,
    bgImg: assets.mobileapp_bg,
    logo: assets.cybersecurity_logo,
    subtext: "Mobile App Development",
    description:
      "Craft seamless, performant mobile applications for iOS and Android tailored to your users’ needs and business goals.",
    loadingBehavior: "eager",
  },
  {
    id: 4,
    bgImg: assets.digitalmarketing_bg,
    logo: assets.cybersecurity_logo,
    subtext: "Digital Marketing",
    description:
      "Boost visibility and conversions with SEO, PPC, content marketing, and personalized multi-channel strategies.",
    loadingBehavior: "eager",
  },
  {
    id: 5,
    bgImg: assets.cloud_bg,
    logo: assets.cybersecurity_logo,
    subtext: "Cloud Services",
    description:
      "Elevate your infrastructure with secure, scalable cloud architecture built for agility, performance, and cost-efficiency.",
    loadingBehavior: "lazy",
  },
  {
    id: 6,
    bgImg: assets.nocode_bg,
    logo: assets.cybersecurity_logo,
    subtext: "No Code Solution",
    description:
      "Accelerate digital transformation with intuitive no-code tools that enable rapid deployment without engineering overhead.",
    loadingBehavior: "lazy",
  },
  {
    id: 7,
    bgImg: assets.automation_bg,
    logo: assets.cybersecurity_logo,
    subtext: "Automation & Monitoring",
    description:
      "Optimize uptime and performance with smart automation, real-time alerts, and predictive system monitoring.",
    loadingBehavior: "lazy",
  },
  {
    id: 8,
    bgImg: assets.macinelearning_bg,
    logo: assets.cybersecurity_logo,
    subtext: "Machine Learning",
    description:
      "Deploy intelligent ML models that analyze patterns, forecast trends, and fuel data-driven innovation.",
    loadingBehavior: "lazy",
  },
  {
    id: 9,
    bgImg: assets.webdevelopment_bg,
    logo: assets.webdevelopment_logo,
    subtext: "Web Development",
    description:
      "Build modern, secure, and durationscalable web platforms optimized for speed, user experience, and SEO.",
    loadingBehavior: "lazy",
  },
  {
    id: 10,
    bgImg: assets.cybersecurity_bg,
    logo: assets.cybersecurity_logo,
    subtext: "Cybersecurity",
    description:
      "Safeguard your digital assets with end-to-end security strategies, threat intelligence, and compliance solutions.",
    loadingBehavior: "lazy",
  },
];

const ServicesPage = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardToggle = useCallback((id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="w-full min-h-[500px] h-[600px]  md:h-[700px] xl:h-[100vh] p-5 relative">
      <img
        src={assets.union}
        alt="bg-img"
        className="h-full w-full absolute inset-0 p-3 bg-contain"
        loading="lazy"
      />
      <div className="text-center absolute left-0 right-0 top-3.5 flex flex-col items-center justify-center gap-3">
        <h5 className="text-[#f73d5c] text-lg sm:text-xl font-semibold">
          Our Expertise
        </h5>
        <h1 className="text-[#3b3b3b] text-xl md:text-2xl lg:text-3xl font-semibold ">
          Deep Domain Knowledge.Proven Execution.Scalable Innovation
        </h1>
      </div>
      <div className=" relative h-full w-full z-10">
        <Swiper
          modules={[Autoplay, Virtual]}
          virtual
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onTouchStart={(swiper) => swiper.autoplay.stop()}
          onTouchEnd={(swiper) => swiper.autoplay.start()}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="h-full w-full"
        >
          {serviceData.map((item, i) => (
            <SwiperSlide key={item.id} virtualIndex={i}>
              {({ isActive }) => (
                <Card
                  {...item}
                  isOpen={activeCardId === item.id}
                  onToggle={handleCardToggle.bind(null, item.id)}
                  isActive={isActive}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesPage;
