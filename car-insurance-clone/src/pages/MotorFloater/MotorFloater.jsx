import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MotorInsuranceFloater from "../../components/MotorFloater/MotorInsuranceFloater/MotorInsuranceFloater";
import MotorFloaterIntro from "../../components/MotorFloater/MotorFloaterIntro/MotorFloaterIntro";
import MotorFloaterWhyChoose from "../../components/MotorFloater/MotorFloaterWhyChoose/MotorFloaterWhyChoose";
import MotorFloaterHowItWorks from "../../components/MotorFloater/MotorFloaterHowItWorks/MotorFloaterHowItWorks";

const BikeInsurance = () => {
  return (
    <>
      <Navbar />
      <MotorInsuranceFloater />
      <MotorFloaterIntro />
      <MotorFloaterWhyChoose />
      <MotorFloaterHowItWorks />
      <Footer />
    </>
  );
};

export default BikeInsurance;
