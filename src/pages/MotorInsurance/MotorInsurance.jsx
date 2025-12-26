import React from "react";
import "./MotorInsurance.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import MotorHero from "../../components/MotorInsurance/HeroSection/MotorHero";
import VehicleInsuranceInfo from "../../components/MotorInsurance/VehicleInsuranceInfo/VehicleInsuranceInfo";
import PlanComparison from "../../components/MotorInsurance/PlanComparison/PlanComparison";
import WhatIsCovered from "../../components/MotorInsurance/WhatIsCovered/WhatIsCovered";

const MotorInsurance = () => {
  return (
    <>
    <Navbar />
      <MotorHero/>
      <VehicleInsuranceInfo/>
      <PlanComparison/>
      <WhatIsCovered/>
    </>
  );
};

export default MotorInsurance;
