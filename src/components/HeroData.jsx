// import React from "react";
// import heroImage from "../assets/servicequbit.jpeg"; // use a modern dashboard image

// const HeroDataAnalytics = () => {
//   return (
//     <section className="w-full bg-white py-20 px-6 md:px-20 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//             Unlock Insights with <span className="text-[#fa9c07]">Data Analytics</span>
//           </h1>
//           <p className="text-lg text-gray-700 mb-6">
//             Discover how your data can drive business growth, improve efficiency, and enhance customer experiences.
//           </p>
//           <button className="bg-[#fa9c07] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition">
//             Get a Free Consultation
//           </button>
//         </div>
//         <div>
//           <img
//             src={heroImage}
//             alt="Data Dashboard Preview"
//             className="rounded-xl shadow-xl w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroDataAnalytics;

import React from "react";
import assets from "../assets/assets";
const HeroData = () => {
  return (
    <section
      className="relative h-[90vh] w-full flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${assets.services_common_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/37  z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Data into Strategic Business Intelligence
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We provide end-to-end data solutions from engineering and science to
          advanced analytics, MLOps, and AI-powered operations that drive
          intelligent decision-making and business growth.
        </p>
        {/* <a
          href="#solutions"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Get Your Data Assessment
        </a> */}
      </div>
    </section>
  );
};

export default HeroData;
