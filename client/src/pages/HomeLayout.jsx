import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Trending from "../components/Trending";

export default function HomeLayout() {
  return (
    <div className="bg-background min-h-screen">
      {/* INPUT: name = MUST be equal to the names on navigation constant found on the Navbar component */}
      <Navbar name="Home" />
      <div className="z-1">
        <Header />
        <Trending />
      </div>
      <Footer />
    </div>
  );
}
