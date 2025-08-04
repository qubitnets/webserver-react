


// import React from "react";

// const OverviewProcess = ({ steps }) => {
//   if (!steps || steps.length === 0) return null; // Optional: render nothing if no steps provided

//   return (
//    <section className="bg-white py-16 px-4 text-center">
//   <div className="max-w-6xl mx-auto">
//     {/* Updated Heading for Flexibility Across Services */}
//     <h2 className="text-4xl font-bold mb-12 text-gray-900">
//       Our Proven Development Process
//     </h2>

//     {/* Desktop View */}
//     <div className="relative hidden lg:flex flex-row justify-between items-start space-x-8">
//       {steps.map((step, index) => (
//         <div key={step.id} className="flex-1 text-left">
//           <div className="flex items-center mb-4">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md">
//               {step.icon}
//             </div>
//             {index < steps.length - 1 && (
//               <div className="flex-1 h-1 bg-blue-200 mx-4"></div>
//             )}
//           </div>
//           <h3 className="font-semibold text-lg mb-2 text-gray-800">{`${step.id}. ${step.title}`}</h3>
//           <p className="text-sm text-gray-700">{step.description}</p>
//         </div>
//       ))}
//     </div>

//     {/* Mobile & Tablet View */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mt-10">
//       {steps.map((step) => (
//         <div
//           key={step.id}
//           className="p-6 bg-blue-50 rounded-xl shadow-md text-left"
//         >
//           <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md mb-3">
//             {step.icon}
//           </div>
//           <h3 className="font-semibold text-lg mb-1 text-gray-800">{`${step.id}. ${step.title}`}</h3>
//           <p className="text-sm text-gray-700">{step.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// };

// export default OverviewProcess;
import React from "react";

const OverviewProcess = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
          Our Proven Development Process
        </h2>

        {/* Desktop: Horizontal Scroll Timeline with Icons */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="flex space-x-8 min-w-max px-4 relative items-start">
            {/* Connector Line */}
            <div
              className="absolute left-0 right-0 bg-gradient-to-r from-blue-200 to-indigo-200"
              style={{
                top: "52px", // center with icon
                height: "4px",
                zIndex: 1,
              }}
            />
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center w-72 flex-shrink-0 z-20"
              >
                {/* Icon & Number */}
                <div style={{ marginTop: "20px", marginBottom: "18px" }} className="relative z-20">
                  <div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-2xl font-bold shadow-xl border-4 border-white mx-auto"
                  >
                    {step.icon}
                  </div>
                  <span className="absolute -bottom-2 -right-2 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white shadow">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-md border border-blue-100 px-6 py-6 w-full hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Clean Card Layout (No Icons or Lines) */}
        <div className="lg:hidden flex flex-col gap-8 mt-10 px-3">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl shadow-md border border-blue-100 px-5 py-6">
              <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white inline-block mb-3">
                Step {step.id}
              </span>
              <h3 className="text-base font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewProcess;
