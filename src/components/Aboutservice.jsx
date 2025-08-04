import React from "react";
import assets from "../assets/assets";
const features = [
  {
    icon: "📊",
    title: "Interactive dashboards",
    description:
      "Build dynamic dashboards that let your teams explore real-time data and KPIs with ease.",
  },
  {
    icon: "🔄",
    title: "Seamless AI integration",
    description:
      "Deploy, manage, and scale machine learning models without heavy infrastructure costs.",
  },
  {
    icon: "🛠️",
    title: "Reliable data pipelines",
    description:
      "Automate data cleaning and transformation to ensure accurate analytics.",
  },
  {
    icon: "🌐",
    title: "Tailored AI strategy",
    description:
      "We design AI solutions specific to your industry challenges and business goals.",
  },
];

const AboutService = () => {
  return (
    <section className="w-full relative py-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Glowing Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-br from-blue-100 via-blue-200 to-transparent rounded-full blur-3xl opacity-60 absolute -top-32 -left-32" />
        <div className="w-[40vw] h-[40vw] bg-gradient-to-tr from-blue-200 via-blue-100 to-transparent rounded-full blur-2xl opacity-40 absolute -bottom-24 -right-24" />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-wide text-left">
          Scale your business with AI-driven insights
        </h2>
        <p className="text-lg md:text-xl font-normal text-gray-800 text-left max-w-3xl">
          Our AI and data analytics solutions empower you to unlock hidden
          patterns, predict outcomes, and make smarter decisions—built to grow
          with your business.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 group"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-blue-700 mb-2 group-hover:text-blue-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Platform Preview Banner */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center border border-gray-300 rounded-2xl overflow-hidden shadow-md bg-white">
        {/* Text */}
        <div className="p-8">
          <span className="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-4">
            QUBITNET PLATFORM
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A powerful platform for AI & analytics
          </h3>
          <p className="text-gray-700 text-sm">
            From data ingestion to model deployment, our end-to-end platform
            covers the entire machine learning lifecycle—helping teams innovate
            faster.
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-full">
          <img
            src={assets.servicequbit}
            alt="Platform Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutService;
