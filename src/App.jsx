import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import AboutLayout from "./pages/AboutLayout";
import ContactUsLayout from "./pages/ContactUsLayout";
import FAQLayout from "./pages/FAQLayout";

export default function App() {
  return (
    <Router>
      <div class="bg-background">
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>
          <Route path="/about" element={<AboutLayout />}></Route>
          <Route path="/contact-us" element={<ContactUsLayout />}></Route>
          <Route path="/faq" element={<FAQLayout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
