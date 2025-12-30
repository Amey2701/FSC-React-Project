import React from "react";
import "./MotorInsurance.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import MotorHero from "../../components/MotorInsurance/HeroSection/MotorHero";
import VehicleInsuranceInfo from "../../components/MotorInsurance/VehicleInsuranceInfo/VehicleInsuranceInfo";
import PlanComparison from "../../components/MotorInsurance/PlanComparison/PlanComparison";
import WhatIsCovered from "../../components/MotorInsurance/WhatIsCovered/WhatIsCovered";
import OnlineBenefits from "../../components/MotorInsurance/OnlineBenefits/OnlineBenefits";
import WhyBuyInsurance from "../../components/MotorInsurance/WhyBuyInsurance/WhyBuyInsurance";
import HowToBuyAndClaim from "../../components/MotorInsurance/HowToBuyAndClaim/HowToBuyAndClaim";
import DocumentsAndRenewalBenefits from "../../components/MotorInsurance/DocumentsAndRenewalBenefits/DocumentsAndRenewalBenefits";
import FAQ from "../../components/MotorInsurance/FAQ/MotorInsuranceFAQ";
import ReviewsAndRatings from "../../components/MotorInsurance/ReviewsAndRatings/ReviewsAndRatings";

const MotorInsurance = () => {
  return (
    <>
    <Navbar />
      <MotorHero/>
      <VehicleInsuranceInfo/>
      <PlanComparison/>
      <WhatIsCovered/>
      <WhyBuyInsurance/>
      <OnlineBenefits/>
      <HowToBuyAndClaim/>
      <DocumentsAndRenewalBenefits/>
      <FAQ/>
      <ReviewsAndRatings/>
      <Footer />
    </>
  );
};

export default MotorInsurance;
