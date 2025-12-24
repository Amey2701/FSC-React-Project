import React, { useRef, useCallback } from "react";
import { useSelector } from "react-redux";

/* Existing Components */
import Navbar from "./components/Navbar/Navbar.jsx";
import ScrollNav from "./components/ScrollNav/ScrollNav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Features from "./components/Features/Features.jsx";
import InfoSection from "./components/InfoSection/InfoSection.jsx";
import PolicySlider from "./components/PolicySlider/PolicySlider.jsx";
import ComparisonTable from "./components/ComparisonTable/ComparisonTable.jsx";
import WhyBuy from "./components/WhyBuy/WhyBuy.jsx";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures.jsx";
import CoverageTabs from "./components/CoverageTabs/CoverageTabs.jsx";
import AddOnCovers from "./components/AddOnCovers/AddOnCovers.jsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.jsx";
import HowToChoosePolicy from "./components/HowToChoosePolicy/HowToChoosePolicy.jsx";
import WhyBuyOnline from "./components/WhyBuyPolicyOnline/WhyBuyPolicyOnline.jsx";
import CarInsurancePremium from "./components/CarInsurancePremium/CarInsurancePremium.jsx";
import SaveOnPremium from "./components/SaveOnPremium/SaveOnPremium.jsx";
import DocumentsRequired from "./components/DocumentsRequired/DocumentsRequired.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginModal from "./components/LoginModal/LoginModal.jsx";

function App() {

  const show = useSelector((state) => state.auth.showModal);

  /* Refs for scroll */
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const infoRef = useRef(null);
  const addonsRef = useRef(null);
  const policyRef = useRef(null);
  const premiumRef = useRef(null);
  const saveRef = useRef(null);
  const faqRef = useRef(null);
  const reviewsRef = useRef(null);

  /* Safe scroll function */
  const safeScroll = useCallback((ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  /* Navigation handlers */
  const handlers = {
    hero: () => safeScroll(heroRef),
    features: () => safeScroll(featuresRef),
    info: () => safeScroll(infoRef),
    addons: () => safeScroll(addonsRef),
    policy: () => safeScroll(policyRef),
    premium: () => safeScroll(premiumRef),
    save: () => safeScroll(saveRef),
    faqs: () => safeScroll(faqRef),
    reviews: () => safeScroll(reviewsRef),
  };

  return (
    <>

      {show && <LoginModal />}

      <Navbar />

      <ScrollNav links={handlers} />

      <section ref={heroRef} style={{ paddingTop: "120px" }}>
        <Hero />
      </section>

      <section ref={featuresRef} style={{ paddingTop: "120px" }}>
        <Features />
      </section>

      <section ref={infoRef} style={{ paddingTop: "120px" }}>
        <InfoSection />
      </section>

      <PolicySlider />
      <ComparisonTable />
      <WhyBuy />
      <KeyFeatures />

      <section ref={addonsRef} style={{ paddingTop: "120px" }}>
        <AddOnCovers />
      </section>

      <section ref={policyRef} style={{ paddingTop: "120px" }}>
        <HowItWorks />
      </section>

      <HowToChoosePolicy />
      <WhyBuyOnline />

      <section ref={premiumRef} style={{ paddingTop: "120px" }}>
        <CarInsurancePremium />
      </section>

      <section ref={saveRef} style={{ paddingTop: "120px" }}>
        <SaveOnPremium />
      </section>

      <section ref={faqRef} style={{ paddingTop: "120px" }}>
        <DocumentsRequired />
      </section>

      <Footer />

    </>
  );
}

export default App;
