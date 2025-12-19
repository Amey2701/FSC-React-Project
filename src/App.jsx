import React from "react";

/* ==================== LOGIN MODAL ==================== */
import LoginModal from "./components/LoginModal/LoginModal.jsx";
import { useSelector } from "react-redux";

/* ==================== HOME COMPONENTS – DO NOT ROUTE ==================== */
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import InfoSection from './components/InfoSection/InfoSection.jsx';
import PolicySlider from './components/PolicySlider/PolicySlider.jsx';
import ComparisonTable from './components/ComparisonTable/ComparisonTable.jsx';
import WhyBuy from './components/WhyBuy/WhyBuy.jsx';
import KeyFeatures from './components/KeyFeatures/KeyFeatures.jsx';
import CoverageTabs from './components/CoverageTabs/CoverageTabs.jsx';
import AddOnCovers from './components/AddOnCovers/AddOnCovers.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import HowToChoosePolicy from './components/HowToChoosePolicy/HowToChoosePolicy.jsx';
import WhyBuyOnline from './components/WhyBuyPolicyOnline/WhyBuyPolicyOnline.jsx';
import CarInsurancePremium from './components/CarInsurancePremium/CarInsurancePremium.jsx';
import SaveOnPremium from './components/SaveOnPremium/SaveOnPremium.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {

  /* this is the only addition */
  const show = useSelector((state) => state.auth.showModal);

  return (
    <>

      {/* ==================== LOGIN MODAL RENDER ==================== */}
      {show && <LoginModal />}

      {/* ==================== HOME PAGE ==================== */}
      <Navbar />

      {/* ---------------- HOME PAGE – ALWAYS RENDERED, NO ROUTING ---------------- */}
      <Hero />
      <Features />
      <InfoSection />
      <PolicySlider />
      <ComparisonTable />
      <WhyBuy />
      <KeyFeatures />
      <CoverageTabs />
      <AddOnCovers />
      <HowItWorks />
      <HowToChoosePolicy />
      <WhyBuyOnline />
      <CarInsurancePremium />
      <SaveOnPremium />
      <Footer />

    </>
  );
}

export default App;
