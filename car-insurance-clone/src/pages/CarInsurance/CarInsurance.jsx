import React, { useRef, useCallback , useEffect } from "react";
import { useSelector } from "react-redux";

/* ========= GLOBAL COMPONENTS ========= */
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

/* ========= CAR INSURANCE COMPONENTS ========= */
import Hero from "../../components/CarInsurance/Hero/Hero";
import Features from "../../components/CarInsurance/Features/Features";
import InfoSection from "../../components/CarInsurance/InfoSection/InfoSection";
import PolicySlider from "../../components/CarInsurance/PolicySlider/PolicySlider";
import ComparisonTable from "../../components/CarInsurance/ComparisonTable/ComparisonTable";
import WhyBuy from "../../components/CarInsurance/WhyBuy/WhyBuy";
import KeyFeatures from "../../components/CarInsurance/KeyFeatures/KeyFeatures";
import CoverageTabs from "../../components/CarInsurance/CoverageTabs/CoverageTabs";
import AddOnCovers from "../../components/CarInsurance/AddOnCovers/AddOnCovers";
import HowItWorks from "../../components/CarInsurance/HowItWorks/HowItWorks";
import HowToChoosePolicy from "../../components/CarInsurance/HowToChoosePolicy/HowToChoosePolicy";
import WhyBuyOnline from "../../components/CarInsurance/WhyBuyPolicyOnline/WhyBuyPolicyOnline";
import CarInsurancePremium from "../../components/CarInsurance/CarInsurancePremium/CarInsurancePremium";
import SaveOnPremium from "../../components/CarInsurance/SaveOnPremium/SaveOnPremium";
import DocumentsRequired from "../../components/CarInsurance/DocumentsRequired/DocumentsRequired";
import CashlessGarage from "../../components/CarInsurance/CashlessGarage/CashlessGarage";

const CarInsurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const show = useSelector((state) => state.auth.showModal);

  /* ========= SCROLL REFS ========= */
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const infoRef = useRef(null);
  const addonsRef = useRef(null);
  const policyRef = useRef(null);
  const premiumRef = useRef(null);
  const saveRef = useRef(null);
  const faqRef = useRef(null);

  const safeScroll = useCallback((ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handlers = {
    hero: () => safeScroll(heroRef),
    features: () => safeScroll(featuresRef),
    info: () => safeScroll(infoRef),
    addons: () => safeScroll(addonsRef),
    policy: () => safeScroll(policyRef),
    premium: () => safeScroll(premiumRef),
    save: () => safeScroll(saveRef),
    faqs: () => safeScroll(faqRef),
  };

  return (
    <>

      <Navbar />

      <section ref={heroRef}>
        <Hero />
      </section>

      <section ref={featuresRef}>
        <Features />
      </section>

      <section ref={infoRef}>
        <InfoSection />
      </section>

      <PolicySlider />
      <ComparisonTable />
      <WhyBuy />
      <KeyFeatures />
      <CoverageTabs />

      <section ref={addonsRef}>
        <AddOnCovers />
      </section>

      <section ref={policyRef}>
        <HowItWorks />
      </section>

      <HowToChoosePolicy />
      <WhyBuyOnline />

      <CashlessGarage />
      <section ref={premiumRef}>
        <CarInsurancePremium />
      </section>

      <section ref={saveRef}>
        <SaveOnPremium />
      </section>

      <section ref={faqRef}>
        <DocumentsRequired />
      </section>

      <Footer />
    </>
  );
};

export default CarInsurance;
