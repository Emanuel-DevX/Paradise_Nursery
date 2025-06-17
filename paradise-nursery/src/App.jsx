import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";
// import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/products" element={<ProductPage />} /> */}
    </Routes>
  );
}

export default App;
