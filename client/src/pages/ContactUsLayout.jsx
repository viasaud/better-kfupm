import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function ContactUsLayout() {
  return (
    <>
    <div className="bg-background min-h-screen">
        <Navbar name="Contact Us" />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
