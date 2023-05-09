import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutLayout() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar name="About" />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
        <h1 className="font-Montserrat text-jetBlack font-semibold text-3xl md:text-4xl">About BetterKFUPM</h1>
        <p className="font-Roboto text-mid-green text-xl pt-10 pb-3">
          BetterKFUPM is a website allow KFUPM students to provide feedback to all KFUPM buildings, KFUPM E-services, External services
          inside the university Campus.
          <br />
          <br />
          BetterKfupm will help KFUPM and external servises providors to receive complaints and positive feedback to their services or
          product that they provide.
        </p>
      </div>
      <Footer />
    </div>
  );
}
