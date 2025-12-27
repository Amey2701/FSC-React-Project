import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoginModal from "../../components/CarInsurance/LoginModal/LoginModal";

const Home = () => {
  const show = useSelector((state) => state.auth.showModal);

  return (
    <>
      {show && <LoginModal />}

      <Navbar />

      <div style={{ paddingTop: "140px", textAlign: "center" }}>
        <h1>ICICI Lombard Insurance</h1>
        <p>Select an insurance category from the menu</p>
      </div>

      <Footer />
    </>
  );
};

export default Home;
