// import React from "react";
// import { useParams } from "react-router-dom";
// import { serviceDynamicContent } from "../assets/serviceContent";
// import OutcomeBenefits from "../components/OutcomeBenefits";
// import OverviewProcess from "../components/OverviewProcess";
// import AnalyticsSolutions from "../components/AnalyticsSolutions";
// import WhyChoose from "../components/WhyChoose";
// import FinalCTA from "../components/FinalCTA";
// import HeroData from "../components/HeroData";
// const ServiceDetail = () => {
//   const { id } = useParams();
//   const content = serviceDynamicContent[id];

//   if (!content) {
//     return (
//       <div className="text-center p-8 text-red-600 font-bold">
//         Service not found.
//       </div>
//     );
//   }

//   return (
//     <>
//       <HeroData />
//       <OutcomeBenefits benefits={content.OutcomeBenefits.benefits} />
//       <OverviewProcess steps={content.OverviewProcess.steps} />
//       <AnalyticsSolutions />
//       <WhyChoose />
//       <FinalCTA />
//     </>
//   );
// };

// export default ServiceDetail;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { serviceDynamicContent } from "../assets/serviceContent";
import OutcomeBenefits from "../components/OutcomeBenefits";
import OverviewProcess from "../components/OverviewProcess";
import AnalyticsSolutions from "../components/AnalyticsSolutions";
import WhyChoose from "../components/WhyChoose";
import FinalCTA from "../components/FinalCTA";
import HeroData from "../components/HeroData";

import assets from "../assets/assets";


const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const content = serviceDynamicContent[id];

  if (!content) {
    return (
      <div className="text-center p-8 text-red-600 font-bold">
        Service not found.
      </div>
    );
  }

  return (
    <>
      <HeroData hero={content.HeroData} />
      <OutcomeBenefits benefits={content.OutcomeBenefits.benefits} />
      <OverviewProcess steps={content.OverviewProcess.steps} />
      <AnalyticsSolutions />
      <WhyChoose />
      <FinalCTA />

      {/* Floating Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 right-2 backdrop-blur-md bg-white/20 border border-white/30 aspect-square w-10 p-2 rounded-xl hover:bg-white/30 shadow-md transition z-50"
        aria-label="Go Back"
      >
        <img
          src={assets.blackarrow}
          alt="Go back"
          className="h-full w-full object-contain rotate-180"
        />
      </button>
    </>
  );
};

export default ServiceDetail;
