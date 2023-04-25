import React, { useState, useEffect } from 'react'
import SignedNavbar from "../components/SignedNavbar";
import PreviousEvaluations from "../components/PreviousEvaluations";
import api from "../api/posts";
import axios from 'axios';

var isServiceProvider = true;

export default function Account() {


    //\\--------------------- These are the const to store the account page data --------------------//\\
    const [userData, setUserData] = useState([]);
    const [previousEvaluations, setPreviousEvaluations] = useState([]);
    const [showAccountPage, setShowAccountPage] = useState(false);

    //\\--------------------- End of the const that store the account page data --------------------//\\


    //\\--------------------- These are the functions to get the user data --------------------//\\

    useEffect(() => {

        // This function gets the user data from the database
        const getUserData = async () => {
            let body = {
                access_token: localStorage.getItem('access_token')
            }

            var authOptions = {
                method: "post",
                url: `${api.defaults.baseURL}/profile`,
                data: body,
                headers: {
                    "Content-Type": "application/json",
                },
                json: true,
            };

            axios(authOptions)
                .then((response) => {
                    setUserData(response.data);
                    setShowAccountPage(true);
                })
                .catch((error) => {
                    console.log(error);
                });

        };

        //This function gets the user's previous evaluations from the database
        const getPreviousEvaluation = async () => {
            let body = {
                access_token: localStorage.getItem('access_token')
            }

            var authOptions = {
                method: "post",
                url: `${api.defaults.baseURL}/user-evaluations`,
                data: body,
                headers: {
                    "Content-Type": "application/json",
                },
                json: true,
            };

            axios(authOptions)
                .then((response) => {
                    setPreviousEvaluations(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        getUserData();
        getPreviousEvaluation();
    }, []);

    //\\--------------------- End of the functions that get the user data --------------------//\\


    return (
        <>
            {showAccountPage && previousEvaluations &&
                <div>
                    <SignedNavbar />
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <p className="text-jetBlack font-Montserrat text-2xl font-semibold py-5 mt-10 w-fit block">Profile</p>

                        <div className="md:col-span-2">
                            {/* The form below is for changing the user's first and last name */}
                            <form action="#" method="POST">
                                <div className="overflow-hidden shadow">
                                    <div className="bg-jetBlack bg-opacity-10 rounded p-4">
                                        <div className="grid grid-cols-6 gap-6 ">
                                            {/* NOTE: Add a placeholder with the previous first name */}
                                            <div className="col-span-6 sm:col-span-3 ">
                                                <label htmlFor="first-name" className="block text-md font-medium text-gray-700 font-Montserrat">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    placeholder="given-name"
                                                    value={userData.first_name}
                                                    className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

                                                />
                                            </div>
                                            {/* NOTE: Add a placeholder with the previous last name */}
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-md font-medium text-gray-700 font-Montserrat">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    placeholder="family-name"
                                                    value={userData.last_name}
                                                    className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-jetBlack bg-opacity-10 text-right pr-4 pb-4">
                                        <button
                                            type="submit"
                                            className="active:translate-y-1 font-Montserrat inline-flex justify-center rounded-md border border-transparent bg-mid-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green focus:ring-offset-1 uppercase"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <p className="text-jetBlack font-Montserrat text-2xl font-semibold py-5 mt-10 w-fit block">Change Password</p>

                        <div className="md:col-span-2">
                            {/* The form below is for changing the user's password */}
                            <form action="#" method="POST">
                                <div className="overflow-hidden shadow">
                                    <div className="bg-jetBlack bg-opacity-10 rounded p-4">
                                        <div className="grid grid-cols-6 gap-6 ">
                                            <div className="col-span-6 sm:col-span-3 ">
                                                <label htmlFor="old-Password" className="block text-md font-medium text-gray-700 font-Montserrat">
                                                    Old password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="old-Password"
                                                    id="old-Password"
                                                    className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 gap-6 mt-4">
                                            <div className="col-span-6 sm:col-span-3 ">
                                                <label htmlFor="new-password" className="block text-md font-medium text-gray-700 font-Montserrat">
                                                    New password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="new-password"
                                                    id="new-password"
                                                    className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3 ">
                                                <label htmlFor="confirm-new-password" className="block text-md font-medium text-gray-700 font-Montserrat">
                                                    Confirm new password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="confirm-new-password"
                                                    id="confirm-new-password"
                                                    className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-jetBlack bg-opacity-10 text-right pr-4 pb-4">
                                        <button
                                            type="submit"
                                            className="active:translate-y-1 font-Montserrat inline-flex justify-center rounded-md border border-transparent bg-mid-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green focus:ring-offset-1 uppercase"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* This will be visiable for service providers only */}
                        {isServiceProvider && (
                            <>
                                <p className="text-jetBlack font-Montserrat text-2xl font-semibold py-5 mt-10 w-fit block capitalize">
                                    request adding a service
                                </p>

                                <div className="md:col-span-2">
                                    {/* The form below is for requesting a service [AS A SERVICE PROVIDER ONLY] */}
                                    <form action="#" method="POST">
                                        <div className="overflow-hidden shadow">
                                            <div className="bg-jetBlack bg-opacity-10 rounded p-4">
                                                <div className="grid grid-cols-2 gap-6 ">
                                                    <div className="col-span-1">
                                                        <label htmlFor="service-name" className="block text-md font-medium text-gray-700 font-Montserrat">
                                                            Service name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="service-name"
                                                            id="service-name"
                                                            className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <label htmlFor="service-name" className="mr-4 text-md font-medium text-gray-700 font-Montserrat">
                                                            Type of the service
                                                        </label>
                                                        <input type="radio" name="tos" id="tos" className="mr-2 text-mid-green" />
                                                        <label htmlFor="service-name" className="text-md font-medium text-gray-700 font-Montserrat">
                                                            Service Center
                                                        </label>
                                                        <input type="radio" name="tos" id="tos" className="mr-2 ml-4 text-mid-green" />
                                                        <label htmlFor="service-name" className="text-md font-medium text-gray-700 font-Montserrat">
                                                            E-Platform
                                                        </label>
                                                        <input type="radio" name="tos" id="tos" className="mr-2 ml-4 text-mid-green" />
                                                        <label htmlFor="service-name" className="text-md font-medium text-gray-700 font-Montserrat">
                                                            External Service
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="text-right pr-4 pb-4">
                                                    <button
                                                        type="submit"
                                                        className="active:translate-y-1 font-Montserrat inline-flex justify-center rounded-md border border-transparent bg-mid-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green focus:ring-offset-1 uppercase"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}

                        <p className="text-jetBlack font-Montserrat text-2xl font-semibold py-5 mt-10 w-fit block capitalize">
                            {isServiceProvider ? "Evaluations on your services" : "My Previous Evaluations"}
                        </p>

                        <div className="md:col-span-2">
                            <div className="bg-jetBlack bg-opacity-10 rounded p-4">
                                {/* Previous Evaluations should be implemented here */}
                                {previousEvaluations.map((value, key) => (
                                    <PreviousEvaluations name={previousEvaluations[key].name} created_at={previousEvaluations[key].created_at} condition={previousEvaluations[key].condition} />
                                ))}
                                <p className="text-xl font-Montserrat text-center text-jetBlack">You have not evaluated any service yet!</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
