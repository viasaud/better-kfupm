import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQLayout() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar name="FAQ" />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
        <h1 className="font-Montserrat text-jetBlack font-semibold text-4xl">FAQ</h1>
        <Question text="What is BetterKFUPM and why should I use it?" />
        <Answer text=" BetterKFUPM is a website allow KFUPM students to provide feedback to all KFUPM buildings, KFUPM E-services, External services
          inside the university Campus." />
        <Question text="What is the benifet of using BetterKFUPM?" />
        <Answer text="BetterKfupm will help KFUPM and external servises providors to receive complaints and positive feedback to their services or
          product that they provide." />
        <Question text="What is BetterKFUPM and why should I use it?" />
        <Answer text=" BetterKFUPM is a website allow KFUPM students to provide feedback to all KFUPM buildings, KFUPM E-services, External services
          inside the university Campus." />
        <Question text="What is the benifet of using BetterKFUPM?" />
        <Answer text="BetterKfupm will help KFUPM and external servises providors to receive complaints and positive feedback to their services or
          product that they provide." />
      </div>
      <Footer />
    </div>
  );
}
/* INPUT: text = text of the question */
function Question(props) {
  return <p className="font-Roboto text-jetBlack text-xl pt-10 pb-3 font-semibold">{props.text}</p>;
}
/* INPUT: text = text of the answer*/
function Answer(props) {
  return <p className="font-Roboto text-mid-green text-xl pl-5">{props.text}</p>;
}
