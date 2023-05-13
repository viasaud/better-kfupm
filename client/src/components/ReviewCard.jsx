import React, { useState, useEffect, useRef, useCallback } from "react";
import api from "../api/posts";
import axios from 'axios';

// props contains the card elements [name, service id]
const ReviewCard = (props) => {

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


  //\\----------------------------------------------- START Review Form -----------------------------------------------//\\

  //\\--------------------- These are the function to POST the data for the Review FORM --------------------//\\
  const [reviewText, setReviewText] = useState("");
  const [ratingStar, setRatingStar] = useState("");

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const postEvaluation = async () => {
      let body = {
        service_id: props.id,
        review: reviewText,
        rating: ratingStar,
        access_token: localStorage.getItem('access_token')
      };

      var authOptions = {
        method: "post",
        url: `${api.defaults.baseURL}/addEvaluation`,
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
        json: true,
      };

      axios(authOptions)
        .then((response) => {
          displayReviewForm();
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    postEvaluation();
  };



  // render function


  //\\--------------------- End of the function to POST the data for the Review FORM --------------------//\\

  //\\--------------------- These are the functions for the evaluation Review Form to show/disappear --------------------//\\

  // const to set the state of the review form
  const [showReviewForm, setShowReviewForm] = React.useState(false);

  // function to display the review form
  function displayReviewForm() {
    setShowReviewForm(!showReviewForm);
  }

  // This function is used to close the review form when the user click outside the form div
  const refClose = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleShowReviewForm, true);
  }, []);

  const handleShowReviewForm = (e) => {
    if (!refClose?.current?.contains(e.target)) {
      setShowReviewForm(false);
    }
  };

  //\\--------------------- End of the functions that handle the evaluation Review Form show/disappear  --------------------//\\

  //\\----------------------------------------------- End of the Review Form -----------------------------------------------//\\

  //\\----------------------------------------------- START Previous Evaluations -----------------------------------------------//\\

  //\\--------------------- Function to get the Previous Evaluations for the service --------------------//\\

  //\\--------------------- This function is already created above at the begining of the code, [data,setData] --------------------//\\

  // TODO: create a function to get the previous evaluations for the service
  // upvote function for the previous evaluations

  const upvote = async (id, access_token) => {

    let body = {
      evaluation_id: id,
      access_token: access_token
    }

    var authOptionsUpvote = {
      method: "post",
      url: `${api.defaults.baseURL}/upvote`,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    };

    axios(authOptionsUpvote)
      .then((response) => {
        fetchData();
      })
      .catch((error) => {

      });
  };

  // TODO: create a function to get the previous evaluations for the service
  // downvote function for the previous evaluations
  const downvote = async (id, access_token) => {

    let body = {
      evaluation_id: id,
      access_token: access_token
    }

    var authOptions = {
      method: "post",
      url: `${api.defaults.baseURL}/unvote`,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    };

    axios(authOptions)
      .then((response) => {
        fetchData();
      })
      .catch((error) => {
      });
  };

  //\\--------------------- End of the function to get the Previous Evaluations for the service --------------------//\\

  //\\--------------------- These are the functions for the Previous evaluation to show/disappear --------------------//\\

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
          <a className="text-2xl font-mono font-semibold uppercase lg:text-2xl truncate cursor-pointer" onClick={displayPreviousEvaluations}>{props.name}</a>
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
          <button type="submit" className="bg-mid-green w-full rounded-sm py-1" onClick={displayReviewForm}>
            Evaluate
          </button>
        </div>
      </div>

      {/* //\\--------------------- End of the card div --------------------//\\ */}

      {/* //\\---------------------------------------------------------------------------------------------------------------------//\\ */}

      {/* //\\--------------------- Start of the review Form div --------------------//\\ */}

      {/* if showReviewForm is true, then show the ReviewForm component */}
      {showReviewForm ? (
        <div
          ref={refClose}
          id="reviewCardDiv"
          className={`flex-col bg-jetBlack/[.9] border-2 border-[#DAD7CD] text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-4 md:px-8`}
        >
          <h1 className="mb-6 text-sm text-center md:text-4xl font-Montserrat">{props.name}</h1>
          <form className="text-white w-full" onSubmit={handleReviewSubmit}>
            {/*Start Rating start and text area div*/}
            <div className="mb-6">
              {/*Start Rating start div*/}
              <div className="text-center mb-4">
                <div className="rating">
                  <input type="radio" name="rating" id="rating1" onClick={(e) => { setRatingStar(1) }} className="radio-lg mask mask-star-2 bg-green-500 text-green-500" />
                  <input type="radio" name="rating" id="rating2" onClick={(e) => { setRatingStar(2) }} className="radio-lg mask mask-star-2 bg-green-500 text-green-500" />
                  <input type="radio" name="rating" id="rating3" onClick={(e) => { setRatingStar(3) }} className="radio-lg mask mask-star-2 bg-green-500 text-green-500" />
                  <input type="radio" name="rating" id="rating4" onClick={(e) => { setRatingStar(4) }} className="radio-lg mask mask-star-2 bg-green-500 text-green-500" />
                  <input type="radio" name="rating" id="rating5" onClick={(e) => { setRatingStar(5) }} className="radio-lg mask mask-star-2 bg-green-500 text-green-500" />
                </div>
              </div>

              {/*End Rating start div*/}

              {/*Start evaluation Text area div*/}
              <div className="flex flex-col justify-center items-center">
                <textarea
                  className="text-gray-900 w-80 h-40 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  id="reviewTextArea"
                  maxlength="500"
                  placeholder="Write your evaluation here"
                  name="text"
                  onChange={(e) => { setReviewText(e.target.value) }}
                />
                <div className="flex justify-end w-80">
                  <p className="text-gray-500 text-sm">/500</p>
                </div>
              </div>
              {/*End evaluation Text area div*/}
            </div>
            {/*End Rating start and text area div*/}

            {/*Start submit button div*/}
            <div className="mb-6 flex justify-center">
              <button
                type="submit"
                className=" text-white bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center font-Montserrat capitalize "
              >
                SUBMIT
              </button>
            </div>
            {/*End submit button div*/}
          </form>
        </div>
      ) : null}

      {/* //\\--------------------- End of the review Form div --------------------//\\ */}

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
                    Upvote
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* map through the reviews array and display the reviews */}
                {data.map((value, key) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                    <td className="px-6 py-4">{data[key].review}</td>
                    <td className="px-6 py-4">{data[key].rating}</td>
                    <td className="px-6 py-4">{data[key].created_at.substring(0, 10).split('-').reverse().join('-')}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className="w-8 h-8 rounded-full"
                          onClick={() => {
                            upvote(data[key].id, localStorage.getItem('access_token'));
                          }}
                        >
                          <svg id="thumbsUpVote" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                          </svg>
                        </button>

                        <button
                          type="button"
                          className=" w-8 h-8 rounded-full"
                          onClick={() => {
                            downvote(data[key].id, localStorage.getItem('access_token'));
                          }}
                        >
                          <svg id="thumbsDownVote" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                          </svg>
                        </button>

                      </div>
                      <div className="flex justify-center">
                        <p className="mx-2" id="upVoteCount">{data[key].upvotes[0].count}</p>
                        <p className="mx-2" id="downVoteCount">{data[key].downvotes[0].count}</p>
                      </div>
                    </td>
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

export default ReviewCard;
