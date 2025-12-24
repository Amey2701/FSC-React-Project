import React, { useRef, useCallback } from "react";
import { useSelector } from "react-redux";

/* ========= GLOBAL COMPONENTS ========= */
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoginModal from "../../components/CarInsurance/LoginModal/LoginModal";

/* ========= CAR INSURANCE COMPONENTS ========= */
import ScrollNav from "../../components/CarInsurance/ScrollNav/ScrollNav";
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

const CarInsurance = () => {
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
      {show && <LoginModal />}

      <Navbar />
      <ScrollNav links={handlers} />

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

      <section ref={addonsRef} style={{ paddingTop: 120 }}>
        <AddOnCovers />
      </section>

      <section ref={policyRef} style={{ paddingTop: 120 }}>
        <HowItWorks />
      </section>

      <HowToChoosePolicy />
      <WhyBuyOnline />

      <section ref={premiumRef} style={{ paddingTop: 120 }}>
        <CarInsurancePremium />
      </section>

      <section ref={saveRef} style={{ paddingTop: 120 }}>
        <SaveOnPremium />
      </section>

      <section ref={faqRef} style={{ paddingTop: 120 }}>
        <DocumentsRequired />
      </section>

      <Footer />
    </>
  );
};

export default CarInsurance;
