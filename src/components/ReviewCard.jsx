import React, { useEffect, useRef } from 'react'
import ReviewForm from '../components/ReviewForm'

// props contains the card elements [name, rating, evaluators, comments] 
const ReviewCard = (props) => {

    // function to change the color of the rating box
    function ratingBoxColor() {
        console.log('ratingBoxColor')
        if (props.rating >= 4) {
            return "border-green-800 bg-green-200"
        }
        else if (props.rating >= 3) {
            return "border-yellow-400 bg-yellow-200"
        }
        else if (props.rating >= 2) {
            return "border-orange-500 bg-orange-200"
        }
        else {
            return "border-red-800 bg-red-200"
        }
    }

    // function to change the word of the rating
    function ratingWord() {
        if (props.rating >= 4) {
            return "Excellent"
        }
        else if (props.rating >= 3) {
            return "Good"
        }
        else if (props.rating >= 2) {
            return "Fair"
        }
        else {
            return "Poor"
        }
    }

    // const to set the state of the review form
    const [showReviewForm, setShowReviewForm] = React.useState(false)

    // function to display the review form
    function displayReviewForm() {
        setShowReviewForm(!showReviewForm)
    }

    return (
        <>

            {/* start of the card div */}
            <div className="flex flex-col place-self-center bg-jetBlack text-white h-auto w-72 p-6 md:mb-10 xl:mb-0 rounded-lg my-6">

                {/* Name of the place/E-servecies */}
                <div className="flex pb-4">
                    <h4 className="text-2xl font-mono font-semibold uppercase lg:text-3xl">{props.name}</h4>
                </div>

                {/* Rating and rating box percentage */}
                <div className='flex items-center pb-4'>
                    <p className={`border-2 rounded-l ${ratingBoxColor()} text-jetBlack text-sm text-center font-semibold p-1.5 w-1/5`}>{props.rating}</p>
                    <p className="px-2 text-md text-center font-semibold">{ratingWord()}</p>
                </div>

                {/* Number of Evaluators && Number of Comments */}
                <div className="flex flex-row pb-4 font-Roboto">
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                        </svg>
                        <p className="text-white px-2">
                            {props.evaluators}
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
                        </svg>
                        <p className="text-white px-2">
                            {props.comments}
                        </p>
                    </div>
                </div>

                {/* Evaluate button */}
                <div id="evaluateBtn" className="flex">
                    <button type="submit" className='bg-mid-green w-full rounded-md' onClick={displayReviewForm} >Evaluate</button>
                </div>

            </div>
            {/*End of the card div*/}

            {/* if showReviewForm is true, then show the ReviewForm component */}
            {showReviewForm ? <ReviewForm /> : null}

        </>
    )

}

export default ReviewCard;