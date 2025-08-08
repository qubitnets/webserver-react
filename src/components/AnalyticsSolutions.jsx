

import React from "react";
import { FaBrain, FaChartPie, FaCloud, FaRobot, FaProjectDiagram, FaLayerGroup, FaEye, FaTools } from "react-icons/fa";

const solutions = [
  {
    icon: <FaChartPie size={32} className="text-purple-600" />,
    title: "Business Intelligence",
    description: "Visual dashboards and reports for real-time business performance monitoring.",
  },
  {
    icon: <FaBrain size={32} className="text-purple-600" />,
    title: "Predictive Analytics",
    description: "Forecast trends and behaviors using statistical models and machine learning.",
  },
  {
    icon: <FaCloud size={32} className="text-purple-600" />,
    title: "Cloud Data Engineering",
    description: "Design data lakes and scalable pipelines on AWS, Azure, or GCP platforms.",
  },
  {
    icon: <FaRobot size={32} className="text-purple-600" />,
    title: "MLOps & Model Deployment",
    description: "Deploy and monitor ML models at scale with CI/CD, A/B testing, and drift detection.",
  },
  {
    icon: <FaProjectDiagram size={32} className="text-purple-600" />,
    title: "AIOps & Automation",
    description: "Use AI for anomaly detection, predictive maintenance, and system auto-healing.",
  },
  {
    icon: <FaLayerGroup size={32} className="text-purple-600" />,
    title: "Data Warehousing",
    description: "Consolidate data into structured repositories for high-performance queries.",
  },
  {
    icon: <FaEye size={32} className="text-purple-600" />,
    title: "Customer Analytics",
    description: "Analyze user behavior and personalize experiences through segmentation.",
  },
  {
    icon: <FaTools size={32} className="text-purple-600" />,
    title: "Operational Analytics",
    description: "Optimize internal operations using performance metrics and KPIs.",
  },
];

const AnalyticsSolutions = () => {
  return (
    <section className="py-16 px-6 bg-white" id="analytics-solutions">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Our Analytics Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-[#f9f9ff] rounded-xl shadow-sm p-6 hover:shadow-lg transition text-left"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSolutions;


// import React from "react";

// const AnalyticsSolutions = ({ solutions }) => {
//   if (!solutions || solutions.length === 0) return null;

//   return (
//     <section className="py-16 px-6 bg-white" id="analytics-solutions">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
//           Our Analytics Solutions
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((solution, index) => (
//             <div
//               key={index}
//               className="bg-[#f9f9ff] rounded-xl shadow-sm p-6 hover:shadow-lg transition text-left"
//             >
//               <div className="mb-4">{solution.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
//               <p className="text-gray-600">{solution.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnalyticsSolutions;


// const AnalyticsSolutions = ({ solutions }) => {
//   if (!solutions || solutions.length === 0) return null;

//   return (
//     <section className="py-16 px-4 bg-white" id="analytics-solutions">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-12 text-gray-900">
//           Our Analytics Solutions
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
//           {solutions.map((solution, index) => {
//             const Icon = solution.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-[#f9f9ff] rounded-xl shadow-sm p-6 hover:shadow-md transition"
//               >
//                 <div className="text-3xl text-purple-700 mb-4">
//                   {Icon && <Icon />} {/* ← THIS renders it properly */}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {solution.title}
//                 </h3>
//                 <p className="text-sm text-gray-700">{solution.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnalyticsSolutions;


