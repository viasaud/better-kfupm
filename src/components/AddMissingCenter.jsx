// This component is a table that used to display the Added Missing Center for the user in my profile page.

import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const AddMissingCenter = () => {

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
                                Center/services
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                                <td className="px-6 py-4">{review.title}</td>
                                <td className="px-6 py-4">{review.id}</td>
                                <td className="px-6 py-4">{review.author}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default AddMissingCenter;