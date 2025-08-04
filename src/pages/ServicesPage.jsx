import React from "react";
import HeroSection from "../components/HeroSection";
import AboutService from "../components/Aboutservice";
import ServiceCards from "../components/ServiceCards";
import Serviceccta from "../components/Serviceccta";

function ServicesPage() {
  return (
    <>
      <HeroSection />
      <AboutService />
      <ServiceCards />
      <Serviceccta />
    </>
  );
}

export default ServicesPage;
