import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <>
            <Navbar />
            <div className="bg-background mx-auto py-12 px-2 sm:px-6 lg:px-8">
                <h1 className="text-start font-Montserrat font-semibold text-2xl text-jetBlack md:text-5xl">
                    About BetterKFUPM
                </h1>
                <p className="text-start font-NotoSerif text-l text-dark-green mt-6 md:text-2xl">
                    BetterKFUPM is a website allow KFUPM students to provide feedback to all KFUPM buildings, KFUPM E-services, External services inside the university Campus.
                    <br /><br />
                    BetterKfupm will help KFUPM and external servises providors to receive complaints and positive feedback to their services or product that they provide.
                </p>
            </div>
            <Footer />
            <Outlet />
        </>
    )
}

export default AboutLayout;
