import TrendingIcon from "../assets/trending-up-outline.svg";
import EvaluationIcon from "../assets/chatbox-outline.svg";
import UpVoteIcon from "../assets/arrow-up-outline.svg";


const Trending = () => {
    return (
        <div className="m-0 px-2 sm:px-6 py-10 bg-jetBlack border-t-2 border-dark-green">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 py-7">

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
    )
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

export default Trending;