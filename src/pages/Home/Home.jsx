import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
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