import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function ContactUsLayout() {
  return (
    <>
      <Navbar name="Contact Us" />
      <ContactUs />
      <Footer />
    </>
  );
}
