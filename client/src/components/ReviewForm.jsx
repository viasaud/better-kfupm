import React, { useState, useEffect, useRef } from 'react';

const ReviewForm = (evaluateBtnState) => {

    const [review, setReview] = useState({
        repositoryName: '',
        ownerName: '',
        rating: '',
        text: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(review);
    };

    // // This function is used to close the review form when the user click outside the form div
    const refClose = useRef(null)

    useEffect(() => {
        document.addEventListener('click', handleShowReviewForm, true);
    }, []);

    const handleShowReviewForm = (e) => {
        if (!refClose.current.contains(e.target)) {
            refClose.current.style.visibility = "hidden"
        }
        if (refCloseButton.current.contains(e.target)) {
            refClose.current.style.visibility = "hidden"
        }
    }

    // This function is used to close the review form when the user clicks on the close button
    const handlCloseBtn = () => {
        refClose.current.style.visibility = "hidden"
    }


    return (

        <div ref={refClose} id="reviewCardDiv" className={`flex-col bg-jetBlack/[.9] border-2 border-[#DAD7CD] text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-4 md:px-8`}>

            <h1 className="mb-8 text-sm text-center md:text-4xl font-Montserrat">KFUPM mall</h1>
            <form className="text-white w-full" onSubmit={handleSubmit}>

                {/*Start Rating start and text area div*/}
                <div className="mb-6">

                    {/*Start Rating start div*/}
                    <div className="flex flex-row pb-4">
                        <span>Rate out of 5</span>
                        <span className="flex flex-row-reverse px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    {/*End Rating start div*/}

                    {/*Start evaluation Text area div*/}
                    <div className="flex flex-col justify-center items-center">
                        <textarea
                            className="text-gray-900 w-80 h-40 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                            maxlength="500"
                            placeholder="Write your evaluation here"
                            name="text"
                            value={review.text}
                            onChange={handleChange}
                        />
                        <div className="flex justify-end w-80">
                            <p className="text-gray-500 text-sm">{review.text.length}/500</p>
                        </div>
                    </div>
                    {/*End evaluation Text area div*/}

                </div>
                {/*End Rating start and text area div*/}

                {/*Start submit button div*/}
                <div className="mb-6 flex justify-center">
                    <button
                        type="submit"
                        className=" text-white bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center font-Montserrat capitalize"
                    >
                        SUBMIT
                    </button>
                </div>
                {/*End submit button div*/}

            </form>
        </div>

    )
}

export default ReviewForm;


