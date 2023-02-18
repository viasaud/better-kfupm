import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const FAQLayout = () => {
    return (
        <>
            <Navbar />
            <div className="bg-background mx-auto px-2 md:px-6 py-12 lg:px-8">
                <h1 className="text-start font-Montserrat font-semibold text-2xl text-jetBlack pb-1 md:text-5xl pb-2">
                    FAQ
                </h1>
                <div className="py-2 md:py-4">
                    <h1 className="text-start font-Montserrat font-semibold text-l text-jetBlack md:text-xl">
                        What is the role of “BetterKFUPM” in Measuring beneficiaries satisfaction with KFUPM Services and E-platform?
                    </h1>
                    <p className="text-start font-NotoSerif text-sm text-dark-green mt-2 md:text-base">
                        BetterKfupm will help KFUPM and external servises providors to receive complaints and positive feedback to their services or product that they provide.
                    </p>
                </div>
                <div className="py-2 md:py-4">
                    <h1 className="text-start font-Montserrat font-semibold text-l text-jetBlack md:text-xl">
                        What is the role of “BetterKFUPM” in Measuring beneficiaries and E-platform?
                    </h1>
                    <p className="text-start font-NotoSerif text-sm text-dark-green mt-2 md:text-base">
                        BetterKfupm will help KFUPM and external servises providors to receive complaints and positive feedback to their services or product that they provide.
                    </p>
                </div>
                <div className="py-2 md:py-4">
                    <h1 className="text-start font-Montserrat font-semibold text-l text-jetBlack md:text-xl">
                        What is Measuring beneficiaries satisfaction with KFUPM Services and E-platform?
                    </h1>
                    <p className="text-start font-NotoSerif text-sm text-dark-green mt-2 md:text-base">
                        BetterKfupm will help KFUPM and external servises providors to receive complaints and positive feedback to their services or product that they provide.
                    </p>
                </div>
            </div>
            <Footer />
            <Outlet />
        </>
    )
}

export default FAQLayout;
