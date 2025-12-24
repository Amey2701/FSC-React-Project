import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import CarInsurance from "./pages/CarInsurance/CarInsurance";
import BikeInsurance from "./pages/BikeInsurance/BikeInsurance";
import MotorInsurance from "./pages/MotorInsurance/MotorInsurance";
import MotorFloater from "./pages/MotorFloater/MotorFloater";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/car-insurance" element={<CarInsurance />} />
      <Route path="/bike-insurance" element={<BikeInsurance />} />
      <Route path="/motor-insurance" element={<MotorInsurance />} />
      <Route path="/motor-floater" element={<MotorFloater />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;