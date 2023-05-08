import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQLayout() {
  return (
    <div className="bg-background h-screen">
      <Navbar name="FAQ" />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
        <h1 className="font-Montserrat text-jetBlack font-semibold text-4xl">FAQ</h1>
        <Question text="What is BetterKFUPM and why should I use it?" />
        <Answer text="lorem lorem lorem lorem" />
        <Question text="What is BetterKFUPM and why should I use iM and why should I use iM and why should I use iM and why should I use it?" />
        <Answer text="lorem lorem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem lorem" />
        <Question text="What is BetterKFUPM and why should I use it?" />
        <Answer text="lorem lorem lorem lorem" />
        <Question text="What is BetterKFUPM and why should I use iM and why should I use iM and why should I use iM and why should I use it?" />
        <Answer text="lorem lorem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem lorem" />
        <Question text="What is BetterKFUPM and why should I use it?" />
        <Answer text="lorem lorem lorem lorem" />
        <Question text="What is BetterKFUPM and why should I use iM and why should I use iM and why should I use iM and why should I use it?" />
        <Answer text="lorem lorem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem loremem lorem lorem" />
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
