import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import AboutLayout from "./pages/AboutLayout";
import ContactUsLayout from "./pages/ContactUsLayout";
import FAQLayout from "./pages/FAQLayout";
import EPlatformsLayout from "./pages/EPlatformsLayout";
import ServiceCentersLayout from "./pages/ServiceCentersLayout";
import ExternalPlatformsLayout from "./pages/ExternalPlatformsLayout";
import Account from "./pages/Account";

export default function App() {
  return (
    <Router>
      <div class="bg-background">
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>
          <Route path="/about" element={<AboutLayout />}></Route>
          <Route path="/contact-us" element={<ContactUsLayout />}></Route>
          <Route path="/faq" element={<FAQLayout />}></Route>
          <Route path="/service-centers" element={<ServiceCentersLayout />}></Route>
          <Route path="/external-platforms" element={<ExternalPlatformsLayout />}></Route>
          <Route path="/e-platforms" element={<EPlatformsLayout />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

// axios
