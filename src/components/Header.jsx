import React, { useState } from "react";
import SignInForm from "./SignInForm";
import KFUPMLogo from "../assets/KFUPM_logo.png";

const Header = () => {

    // const to set the state of the review form
    const [showSignInForm, setshowSignInForm] = React.useState(false)

    // function to display the review form
    function displaySignInForm() {
        setshowSignInForm(!showSignInForm)
    }

    return (
        <>
            <header className="bg-background ">
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
                        <button onClick={displaySignInForm} className="text-lg md:text-xl rounded-lg bg-mid-green mt-4 xl:mt-8 py-2 px-5 text-white font-Montserrat hover:bg-dark-green active:translate-y-1">
                            Register Now
                        </button>
                    </div>
                    <img className="hidden xl:block w-80" src={KFUPMLogo} alt="KFUPM Logo" />
                </div>
            </header>

            {/* if showReviewForm is true, then show the ReviewForm component */}
            {showSignInForm ? <SignInForm /> : null}
        </>
    )
}

export default Header;
