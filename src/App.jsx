import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import "@heroui/theme";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Return from "./pages/Return";
import TandC from "./pages/TandC";
import Attribution from "./pages/Attribution";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/returnPolicy" element={<Return />} />
        <Route path="/t&c" element={<TandC />} />
        <Route path="/attribution" element={<Attribution />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
