// import React from "react";
// import {
//   ArrowTrendingUpIcon,
//   CpuChipIcon,
//   DevicePhoneMobileIcon,
//   CodeBracketIcon,
//   MegaphoneIcon,
//   CloudIcon,
//   PuzzlePieceIcon,
//   ChartBarSquareIcon,
// } from "@heroicons/react/24/outline";

// const services = [
//   {
//     title: "DATA ANALYTICS",
//     desc: "Unlocking valuable insights through advanced data analytics to drive informed decisions and accelerate business success.",
//     icon: <ArrowTrendingUpIcon className="w-7 h-7 text-blue-600" />,
//   },
//   {
//     title: "AI DEVELOPMENT",
//     desc: "Building cutting-edge AI models and tools to enhance productivity, decision-making, and customer experience.",
//     icon: <CpuChipIcon className="w-7 h-7 text-blue-600" />,
//   },
//   {
//     title: "MOBILE APP DEVELOPMENT",
//     desc: "Designing seamless, scalable mobile solutions tailored to business goals across iOS and Android platforms.",
//     icon: <DevicePhoneMobileIcon className="w-7 h-7 text-blue-600" />,
//   },
//   {
//     title: "SOFTWARE DEVELOPMENT",
//     desc: "Delivering custom software solutions to improve operational efficiency and support business innovation.",
//     icon: <CodeBracketIcon className="w-7 h-7 text-blue-600" />,
//   },
//   {
//     title: "DIGITAL MARKETING",
//     desc: "Empowering businesses through data-driven digital strategies that boost engagement, traffic, and ROI.",
//     icon: <MegaphoneIcon className="w-7 h-7 text-blue-600" />,
//   },
//   {
//     title: "CLOUD SERVICES",
//     desc: "Enabling secure, scalable, and flexible cloud architectures to support digital transformation.",
//     icon: <CloudIcon className="w-7 h-7 text-blue-600" />,
//   },
//   {
//     title: "NO CODE SOLUTION",
//     desc: "Offering drag-and-drop solutions to build apps and automate workflows without traditional coding.",
//     icon: <PuzzlePieceIcon className="w-7 h-7 text-blue-600" />,
//   },
//   {
//     title: "AUTOMATION & MONITORING",
//     desc: "Implementing intelligent automation and real-time monitoring to streamline operations and ensure system health.",
//     icon: <ChartBarSquareIcon className="w-7 h-7 text-blue-600" />,
//   },
// ];

// const ServiceCards = () => {
//   return (
//     <section className="w-full relative py-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
//       {/* Background Blobs */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <div className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-br from-blue-100 via-blue-200 to-transparent rounded-full blur-3xl opacity-60 absolute -top-32 -left-32" />
//         <div className="w-[40vw] h-[40vw] bg-gradient-to-tr from-blue-200 via-blue-100 to-transparent rounded-full blur-2xl opacity-40 absolute -bottom-24 -right-24" />
//       </div>

//       {/* Heading */}
//       <div className="max-w-6xl mx-auto mb-20">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-wide text-left">SERVICES</h2>
//         <p className="text-lg md:text-xl font-normal text-gray-800 text-left max-w-3xl">
//           Delivering tailored AI and data-driven solutions to help businesses unlock insights, streamline operations, and drive smarter, strategic decisions forward.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {services.map((service, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-gray-300 rounded-2xl p-7 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-xl hover:scale-[1.03] transition-transform duration-200 group cursor-pointer"
//           >
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 mb-2 uppercase tracking-wide">{service.title}</h3>
//             <p className="text-gray-700 text-base mb-6">{service.desc}</p>

//             <div className="flex items-center mt-auto overflow-hidden">
//               <div className="flex items-center space-x-2 transform transition-all duration-500 ease-in-out opacity-0 translate-x-[-1rem] group-hover:opacity-100 group-hover:translate-x-0">
//                 <span className="text-blue-600 font-semibold underline underline-offset-2 whitespace-nowrap">Learn more</span>
//                 <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServiceCards;
// ServiceCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowTrendingUpIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  MegaphoneIcon,
  CloudIcon,
  PuzzlePieceIcon,
  ChartBarSquareIcon,
   GlobeAltIcon,
   ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    id: "data-analytics",
    title: "DATA ANALYTICS",
    desc: "Unlocking valuable insights through advanced data analytics to drive informed decisions and accelerate business success.",
    icon: <ArrowTrendingUpIcon className="w-7 h-7 text-blue-600" />,
  },
  {
    id: "ai-development",
    title: "AI DEVELOPMENT",
    desc: "Building cutting-edge AI models and tools to enhance productivity, decision-making, and customer experience.",
    icon: <CpuChipIcon className="w-7 h-7 text-blue-600" />,
  },
  {
    id: "mobile-app-development",
    title: "MOBILE APP DEVELOPMENT",
    desc: "Designing seamless, scalable mobile solutions tailored to business goals across iOS and Android platforms.",
    icon: <DevicePhoneMobileIcon className="w-7 h-7 text-blue-600" />,
  },
  {
    id: "software-development",
    title: "SOFTWARE DEVELOPMENT",
    desc: "Delivering custom software solutions to improve operational efficiency and support business innovation.",
    icon: <CodeBracketIcon className="w-7 h-7 text-blue-600" />,
  },
  {
  id: "web-development",
  title: "WEB DEVELOPMENT",
  desc: "Building fast, responsive, and scalable websites to strengthen your digital presence and engage users effectively.",
  icon: <GlobeAltIcon className="w-7 h-7 text-blue-600" />,
},
{
  id: "cyber-security",
  title: "CYBER SECURITY",
  desc: "Protecting digital assets with advanced threat detection, prevention strategies, and regulatory compliance solutions.",
  icon: <ShieldCheckIcon className="w-7 h-7 text-blue-600" />,
},
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    desc: "Empowering businesses through data-driven digital strategies that boost engagement, traffic, and ROI.",
    icon: <MegaphoneIcon className="w-7 h-7 text-blue-600" />,
  },
  {
    id: "cloud-services",
    title: "CLOUD SERVICES",
    desc: "Enabling secure, scalable, and flexible cloud architectures to support digital transformation.",
    icon: <CloudIcon className="w-7 h-7 text-blue-600" />,
  },
  {
    id: "no-code-solution",
    title: "NO CODE SOLUTION",
    desc: "Offering drag-and-drop solutions to build apps and automate workflows without traditional coding.",
    icon: <PuzzlePieceIcon className="w-7 h-7 text-blue-600" />,
  },
  {
    id: "automation-monitoring",
    title: "AUTOMATION & MONITORING",
    desc: "Implementing intelligent automation and real-time monitoring to streamline operations and ensure system health.",
    icon: <ChartBarSquareIcon className="w-7 h-7 text-blue-600" />,
  },
];

const ServiceCards = () => {
  return (
    <section className="w-full relative py-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* ...background and heading omitted for brevity */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/service/${service.id}`}
            className="group cursor-pointer"
          >
            <div className="bg-white border border-gray-300 rounded-2xl p-7 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-xl hover:scale-[1.03] transition-transform duration-200">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-700 mb-2 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base mb-6">{service.desc}</p>
              <div className="flex items-center mt-auto overflow-hidden">
                <div className="flex items-center space-x-2 transform transition-all duration-500 ease-in-out opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-blue-600 font-semibold underline underline-offset-2 whitespace-nowrap">
                    Learn more
                  </span>
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
