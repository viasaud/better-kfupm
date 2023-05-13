import React, { useState, useEffect, useRef, useCallback } from "react";
import api from "../api/posts";
import axios from 'axios';

// props contains the card elements [name, service id]
const AdminReviewCard = (props) => {

    //\\--------------------- These are the function to GET the data for the Review Card --------------------//\\

    // This const data has all the data of the card evaluation and it is used to calculate the average rating, number of evaluators and number of comments, ALSO WILL BE USED TO DISPLAY THE PREVIOUS EVALUATIONS
    const [data, setData] = useState([]);

    // This useEffect fetches the data from the database
    const fetchData = async () => {
        try {
            const response = await api.get(`/evaluations/${props.id}`);
            setData(response.data);
        } catch (error) {
            setData([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // These are the constatnt for the card evaluation [average rating, number of evaluators, number of comments]
    const [rating, setRating] = useState("");
    const [evaluators, setEvaluators] = useState("");
    const [comment, setComment] = useState("");

    // This useEffect function to calculate the average rating from data and count the number of evaluators and comments
    useEffect(() => {
        // function to calculate the average rating
        const averageRating = () => {
            let sum = 0;
            let count = 0;
            data.map((value, key) => {
                sum += value.rating;
                count++;
            });
            if (count === 0) {
                setRating("0.0");
                setEvaluators(0);
            } else {
                // round the average rating to 1 decimal place
                setRating(Math.round((sum / count) * 10) / 10);
                setEvaluators(count);
            }
        };

        // function to count the number of comments
        const countComment = () => {
            let count = 0;
            data.map((value, key) => {
                if (value.review !== null) {
                    count++;
                }
            });
            setComment(count);
        };
        averageRating();
        countComment();
    }, [data]);

    // function to change the color of the rating box
    function ratingBoxColor() {
        if (rating >= 4) {
            return "border-indigo-400 bg-indigo-200";
        } else if (rating >= 3) {
            return "border-green-400 bg-green-200";
        } else if (rating >= 2) {
            return "border-orange-400 bg-orange-200";
        } else if (rating >= 1) {
            return "border-red-400 bg-red-200";
        } else {
            return "border-gray-400 bg-gray-200";
        }
    }

    // function to change the word of the rating
    function ratingWord() {
        if (rating >= 4) {
            return "Excellent";
        } else if (rating >= 3) {
            return "Very Good";
        } else if (rating >= 2) {
            return "Good";
        } else if (rating >= 1) {
            return "Fair";
        } else {
            return "Not Rated Yet";
        }
    }

    //\\--------------------- End of the function to GET the data for the Review Card --------------------//\\

    //\\--------------------- These are the functions for the evaluation Review Form to show/disappear --------------------//\\


    //\\----------------------------------------------- START Previous Evaluations -----------------------------------------------//\\

    //\\--------------------- Function to get the Previous Evaluations for the service --------------------//\\

    //\\--------------------- This function is already created above at the begining of the code, [data,setData] --------------------//\\

    // function to hide the evaluation
    const hideEvaluation = async (id, condition, access_token) => {
        let body = {
            evaluation_id: id,
            condition: condition,
            access_token: access_token
        }

        var authOptionsUpvote = {
            method: "post",
            url: `${api.defaults.baseURL}/update-evaluation`,
            data: body,
            headers: {
                "Content-Type": "application/json",
            },
            json: true,
        };

        axios(authOptionsUpvote)
            .then((response) => {
                fetchPreviousData();
            })
            .catch((error) => {

            });
    };

    //\\--------------------- End of the function to get the Previous Evaluations for the service --------------------//\\

    //\\--------------------- These are the functions for the Previous evaluation to show/disappear --------------------//\\

    const [previousData, setPreviousData] = useState([]);

    // This useEffect fetches the data from the database
    const fetchPreviousData = async () => {
        try {
            const response = await api.get(`/evaluations/${props.id}&${localStorage.getItem("access_token")}`);
            setPreviousData(response.data);
            console.log(localStorage.getItem("access_token"))
        } catch (error) {
            setPreviousData([]);
        }
    };

    useEffect(() => {
        fetchPreviousData();
    }, []);

    // const to set the state of the review form
    const [showPreviousEvaluations, setShowPreviousEvaluations] = React.useState(false);

    // function to display the review form
    function displayPreviousEvaluations() {
        setShowPreviousEvaluations(!showPreviousEvaluations);
    }

    // This function is used to close the review form when the user click outside the form div
    const refPreviousEvaluationsClose = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleShowPreviousEvaluations, true);
    }, []);

    const handleShowPreviousEvaluations = (e) => {
        if (!refPreviousEvaluationsClose?.current?.contains(e.target)) {
            setShowPreviousEvaluations(false);
        }
    };

    //\\--------------------- End of the functions that handle the evaluation Review Form show/disappear  --------------------//\\

    //\\----------------------------------------------- End of the Previous Evaluations -----------------------------------------------//\\

    return (
        <>
            {/* //\\--------------------- Start of the card div --------------------//\\ */}

            <div className="shadow-lg flex flex-col place-self-center bg-jetBlack text-white h-auto w-72 p-6 md:mb-10 xl:mb-0 rounded-lg my-6">
                {/* Name of the place/E-servecies */}
                <div className="flex pb-4">
                    <a className="text-2xl font-mono font-semibold uppercase lg:text-2xl truncate cursor-pointer">{props.name}</a>
                </div>

                {/* Rating and rating box percentage */}
                <div className="flex items-center pb-4">
                    <p className={`border-2 rounded-lg ${ratingBoxColor()} text-jetBlack text-sm text-center font-semibold p-1.5 w-1/5`}>{rating}</p>
                    <p className="px-2 text-md text-center font-semibold">{ratingWord()}</p>
                </div>

                {/* Number of Evaluators && Number of Comments */}
                <div className="flex flex-row pb-4 font-Roboto">
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path
                                fillRule="evenodd"
                                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                clipRule="evenodd"
                            />
                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                        </svg>
                        <p className="text-white px-2">{evaluators}</p>
                    </div>
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path
                                fillRule="evenodd"
                                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-white px-2">{comment}</p>
                    </div>
                </div>

                {/* Evaluate button */}
                <div id="evaluateBtn" className="flex">
                    <button type="submit" className="bg-mid-green w-full rounded-sm py-1" onClick={displayPreviousEvaluations}>
                        Manage
                    </button>
                </div>
            </div>

            {/* //\\--------------------- End of the card div --------------------//\\ */}

            {/* //\\---------------------------------------------------------------------------------------------------------------------//\\ */}

            {/* //\\--------------------- Start of the Previous Evaluations div --------------------//\\ */}

            {/* if showPreviousEvaluations is true, then show the Previous Evaluations component */}
            {showPreviousEvaluations ? (
                <div
                    ref={refPreviousEvaluationsClose}
                    id="previousEvaluationsDiv"
                    className={`flex-col bg-jetBlack/[.9] border-2 border-[#DAD7CD] text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-4 md:px-8`}
                >
                    <h1 className="mb-6 text-sm text-center md:text-4xl font-Montserrat">Previous Evaluations</h1>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="text-center">
                                    <th scope="col" className="px-6 py-3">
                                        Review Text
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rating
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Hide Request
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* map through the reviews array and display the reviews */}
                                {previousData.map((value, key) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                                        <td className="px-6 py-4">{previousData[key].review}</td>
                                        <td className="px-6 py-4">{previousData[key].rating}</td>
                                        <td className="px-6 py-4">{previousData[key].created_at.substring(0, 10).split('-').reverse().join('-')}</td>
                                        <td className="px-6 py-4">{previousData[key].condition}</td>
                                        <a href="" onClick={() => {
                                            if (previousData[key].condition === 'hidden') {
                                                if (window.confirm("Are you sure you want to show this evaluation?")) {
                                                    hideEvaluation(previousData[key].id, 'shown', localStorage.getItem('access_token'));
                                                }
                                            }
                                            else {
                                                if (window.confirm("Are you sure you want to hide this evaluation?")) {
                                                    hideEvaluation(previousData[key].id, 'hidden', localStorage.getItem('access_token'));
                                                }
                                            }
                                        }}><td className="px-6 py-4 underline text-blue-500 decoration-blue-500">change evaluation state</td></a>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div >
            ) : null}

            {/* //\\--------------------- End of the Previous Evaluations div --------------------//\\ */}

        </>
    );
};

export default AdminReviewCard;
