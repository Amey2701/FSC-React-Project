import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BikeHero from "../../components/BikeInsurance/Hero/BikeHero";
import WhatIsBikeInsurance from "../../components/BikeInsurance/WhatIsBikeInsurance/WhatIsBikeInsurance";
import WhyCustomersLoveUs from "../../components/BikeInsurance/WhyCustomersLoveUs/WhyCustomersLoveUs";
import WhyChooseBikeInsurance from "../../components/BikeInsurance/WhyChooseBikeInsurance/WhyChooseBikeInsurance";
import WhatIsCovered from "../../components/BikeInsurance/WhatIsCovered/WhatIsCovered";
import KeyFeatures from "../../components/BikeInsurance/KeyFeatures/KeyFeatures";
import HowToChoosePolicy from "../../components/BikeInsurance/HowToChoosePolicy/HowToChoosePolicy";
import PremiumAndBuyingGuide from "../../components/BikeInsurance/PremiumAndBuyingGuide/PremiumAndBuyingGuide";
import IdvAndZeroDepreciation from "../../components/BikeInsurance/IdvAndZeroDepreciation/IdvAndZeroDepreciation";

const BikeInsurance = () => {
  return (
    <>
      <Navbar />
      <BikeHero />
      <WhyCustomersLoveUs />
      <WhatIsBikeInsurance />
      <WhyChooseBikeInsurance />
      <KeyFeatures />
      <WhatIsCovered />
      <HowToChoosePolicy />
      <PremiumAndBuyingGuide />
      <IdvAndZeroDepreciation />
      <Footer />
    </>
  );
};

export default BikeInsurance;
