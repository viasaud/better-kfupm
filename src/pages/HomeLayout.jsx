import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KFUPMLogo from "../assets/KFUPM_logo.png";
import TrendingIcon from "../assets/trending-up-outline.svg";
import EvaluationIcon from "../assets/chatbox-outline.svg";
import UpVoteIcon from "../assets/arrow-up-outline.svg";


const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <div className="z-1">
                <Header />
                <Trending />
            </div>
            <Footer />
        </>
    )
}

export default HomeLayout;

function Header() {
    return (
        <header className="bg-background">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 py-16 xl:flex xl:flex-row">
                <div className=" md:pt-4 xl:pt-12 text-center xl:text-start mr-auto">
                    <h1 className="text-center xl:text-start font-Montserrat font-semibold text-4xl md:text-7xl text-jetBlack ">
                        Rate KFUPM Services
                    </h1>
                    <p className="hidden xl:block text-start font-Roboto text-2xl text-dark-green py-6">
                        BetterKFUPM Platform enables KFUPM community, and the visitor, <br /> to evaluate the service centers and E-Platforms of KFUPM
                        facilites <br />
                        and share opinions to improve and develop them.
                    </p>
                    <p className="xl:hidden text-center font-Roboto text-lg md:text-2xl text-dark-green px-2 md:px-6 py-6 md:py-12">
                        BetterKFUPM Platform enables KFUPM community, and the visitor, to evaluate the service centers and E-Platforms of KFUPM
                        facilites and share opinions to improve and develop them.
                    </p>
                    <button className="text-lg md:text-xl rounded-lg bg-mid-green mt-4 xl:mt-8 py-2 px-5 text-white font-Montserrat hover:bg-dark-green active:translate-y-1">
                        Register Now
                    </button>
                </div>
                <img className="hidden xl:block w-80" src={KFUPMLogo} alt="KFUPM Logo" />
            </div>
        </header>
    );
}

function Trending() {
    return (
        <div className="m-0 px-2 sm:px-6 py-10 bg-jetBlack border-t-2 border-dark-green h-">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 py-6">
                <div className="flex flex-row justify-center pb-10">
                    <img src={TrendingIcon} alt="Trending Icon" width="30px" />
                    <h1 className="text-white font-Montserrat text-2xl px-2 capitalize">Trending on BetterKFUPM</h1>
                </div>
                <div className="flex flex-col xl:flex-row justify-center items-center">
                    <div className="md:flex md:flex-row">
                        <TrendingComponent number="01" name="building 54" evaluations="25" upvotes="21" />
                        <TrendingComponent number="02" name="building 76" evaluations="45" upvotes="41" />
                    </div>
                    <div className="md:flex md:flex-row">
                        <TrendingComponent number="03" name="building 24" evaluations="43" upvotes="31" />
                        <TrendingComponent number="04" name="building 21" evaluations="67" upvotes="25" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TrendingComponent(props) {
    return (
        <div className="bg-mid-green w-72 md:mx-3 mb-10 xl:mb-0 h-32 rounded-lg ">
            <p className="pl-3 pt-2 text-2xl font-Montserrat font-bold text-jetBlack opacity-80">{props.number}</p>
            <p className="pl-3 py-1 text-3xl font-mono text-jetBlack font-semibold uppercase">{props.name}</p>
            <div className="flex flex-row py-1 pl-3 font-Roboto">
                <img src={EvaluationIcon} alt="Evaluation Icon" width="25px" className="opacity-60" />
                <p className="text-white px-2">
                    <span className="text-xl font-bold">{props.evaluations}</span> Today
                </p>
                <img src={UpVoteIcon} alt="UpVote Icon" width="25px" className="opacity-60" />
                <p className="text-white px-2">
                    <span className="text-xl font-bold">{props.upvotes}</span> Today
                </p>
            </div>
        </div>
    );
}
