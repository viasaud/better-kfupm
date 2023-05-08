// This component is a table that used to display the reviews for a specefic building/serveice and allow the user to upvote/downvote the review.

import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const ReviewsTable = () => {

    // for useFetch (please add the API link to the useFetch parameter)
    const { data: reviews, isPending, error } = useFetch('http://localhost:8000/blogs');
    const navigate = useNavigate();

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {reviews && (
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3">
                                Evaluator text
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Upvote/Downvote
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">{review.title}</td>
                                <td className="px-6 py-4">{review.id}</td>
                                <td className="px-6 py-4">{review.author}</td>
                                <td className="px-6 py-4 text-center ">
                                    <a href="#" className="hover:underline pr-10">👍🏻</a>
                                    <a href="#" className="hover:underline">👎🏻</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ReviewsTable;