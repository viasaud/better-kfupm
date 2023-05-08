import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import api from "../api/posts";


const SignInForm = () => {

    //\\--------------------- These are the functions to GET/POST the data for SignIn --------------------//\\

    // state variables to store the first & last name, email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const [nameFeildVisible, setNameFeildVisible] = React.useState(false);

    // naviget to the user main page
    const navigate = useNavigate()

    // // object contains information about the entire form state 
    const {
        register,
        formState: { errors }
    } = useForm();


    // function to handle the submit event of the form for the Login user
    const handleSignInSubmit = useCallback(async (e) => {

        e.preventDefault();

        // post email to the database if it is not already in the database
        api.post('/login', {
            email: email,
            password: password
        })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('userID', response.data.userID);
                if (response.data.role == "authenticated") {
                    localStorage.setItem('role', "authenticated");
                    window.location.href = "/service-centers";
                }
                else if (response.data.role == "provider") {
                    localStorage.setItem('role', "provider");
                    window.location.href = "/provider-service-centers";
                }
                else if (response.data.role == "admin") {
                    localStorage.setItem('role', "admin");
                    window.location.href = "/admin-service-centers";
                }
            })
            .catch((error) => {
                // This function will desplay the first name and last name field for the user because the user does not have an account yest
                setNameFeildVisible(true);
            })
    })

    // function to handle the submit event of the form for the Signup user
    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        // if the user enter the fisrt name and last name then post the data to the database
        api.post('/signup', {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('userID', response.data.userID);
                window.location.href = "/service-centers";
            })
            .catch((error) => {
                console.log(error);
            })
    }



    //\\--------------------- These are the functions for the SignIn Form to show/disappear --------------------//\\

    // const to set the state of the review form
    const [showSignInForm, setShowSignInForm] = React.useState(true)

    // This function is used to close the sign in form when the user click outside the form div
    const refClose = useRef(null)

    useEffect(() => {
        document.addEventListener('click', handleShowSignInForm, true);
    }, []);

    const handleShowSignInForm = (e) => {
        if (!refClose.current.contains(e.target)) {
            refClose.current.style.visibility = "hidden"
        }
        if (refCloseButton.current.contains(e.target)) {
            refClose.current.style.visibility = "hidden"
        }
    }


    return (
        <>

            {!nameFeildVisible &&
                < div ref={refClose} id="signInDiv" className="flex-col bg-jetBlack/[.9] border-2 border-[#DAD7CD] text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-4 md:px-8">
                    <h1 className="mb-8 text-sm text-center md:text-4xl font-Montserrat">Sign In to your account</h1>

                    <form className="text-white w-full" onSubmit={handleSignInSubmit}>

                        {/* This div is for the Email input field */}
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-Montserrat">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto"
                                placeholder="s201811111@kfupm.edu.sa"
                                required
                            // {...register("email", {
                            //     required: true, pattern: /^[a-zA-Z0-9._-]+@kfupm.edu.sa/
                            // })}
                            />
                            {errors.email && <div><span className="text-sm  text-red-500" >Invalid email</span></div>}
                        </div>

                        {/* This div is for the Password input field */}
                        {/* {!errors.email && passwordFeildVisible && */}
                        <div className="mb-6">
                            <label for="password" className="block mb-2 text-sm font-Montserrat">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="font-Roboto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
                                placeholder='••••••••'
                                required
                            ></input>
                        </div>
                        {/* } */}

                        {/* This div is for the Sign In/ Sign Up button */}
                        <div className="mb-6 flex justify-center">
                            <button
                                type="submit"
                                className=" text-white bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center font-Montserrat capitalize"
                            >
                                Sign In
                            </button>
                        </div>

                    </form>
                </div >
            }

            {!errors.email && !errors.password && nameFeildVisible &&
                <div ref={refClose} id="signInDiv" className="flex-col bg-jetBlack/[.9] border-2 border-[#DAD7CD] text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-4 md:px-8">
                    <h1 className="mb-8 text-sm text-center md:text-4xl font-Montserrat">Sign In to your account</h1>

                    <form className="text-white w-full" onSubmit={handleSignUpSubmit}>

                        {/* This div is for the Email input field */}
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-Montserrat">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto"
                                placeholder="s201811111@kfupm.edu.sa"
                                required
                                {...register("email", {
                                    required: true, pattern: /^[a-zA-Z0-9._-]+@kfupm.edu.sa/
                                })}
                            />
                            {errors.email && <div><span className="text-sm  text-red-500" >Invalid email</span></div>}
                        </div>

                        {/* This div is for the Password input field */}
                        <div className="mb-6">
                            <label for="password" className="block mb-2 text-sm font-Montserrat">
                                Password
                            </label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 right-0 flex items-center px-2">
                                    <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                                    <label class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                                        for="toggle" >show</label>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className="font-Roboto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
                                    placeholder='••••••••'
                                    required
                                ></input>
                            </div>
                        </div>
                        {/* } */}



                        {/* This div is for the First name and Last name input fields */}
                        <div className="md:flex justify-between ">
                            <div className="mb-6">
                                <label for="firstName" className="block mb-2 text-sm font-Montserrat">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    onChange={(e) => { setfirstName(e.target.value); }}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto md:w-half"
                                    placeholder="first name"
                                    required
                                />
                                {errors.firstName && <div><span className="text-sm text-red-500 ">Invalid first name</span></div>}
                            </div>

                            <div className="mb-6">
                                <label for="lastName" className="block mb-2 text-sm font-Montserrat">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    onChange={(e) => { setlastName(e.target.value); }}
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto md:w-half"
                                    placeholder="last name"
                                    required
                                />
                                {errors.lastName && <div><span className="text-sm  text-red-500">Invalid last name</span></div>}
                            </div>
                        </div>


                        {/* This div is for the Sign In/ Sign Up button */}
                        <div className="mb-6 flex justify-center">
                            <button
                                type="submit"
                                className=" text-white bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center font-Montserrat capitalize"
                            >
                                Sign Up
                            </button>
                        </div>

                    </form>
                </div>
            }

        </>
    )
}

export default SignInForm;