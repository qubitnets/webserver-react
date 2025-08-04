import React from "react";
import { useParams } from "react-router-dom";
import { serviceDynamicContent } from "../assets/serviceContent";
import OutcomeBenefits from "../components/OutcomeBenefits";
import OverviewProcess from "../components/OverviewProcess";
import AnalyticsSolutions from "../components/AnalyticsSolutions";
import WhyChoose from "../components/WhyChoose";
import FinalCTA from "../components/FinalCTA";
import HeroData from "../components/HeroData";
const ServiceDetail = () => {
  const { id } = useParams();
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
      <HeroData />
      <OutcomeBenefits benefits={content.OutcomeBenefits.benefits} />
      <OverviewProcess steps={content.OverviewProcess.steps} />
      <AnalyticsSolutions />
      <WhyChoose />
      <FinalCTA />
    </>
  );
};

export default ServiceDetail;
