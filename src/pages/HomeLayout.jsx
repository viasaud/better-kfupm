import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Trending from "../components/Trending";

export default function HomeLayout() {

  return (
    <div className="bg-background h-screen">
      <Navbar name="Home" />
      <div className="z-1">
        <Header />
        <Trending />
      </div>
      <Footer />
    </div>
  );
}