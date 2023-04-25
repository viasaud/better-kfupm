import React, { useState, useEffect } from "react";
import api from "../api/posts";

const PreviousEvaluations = (props) => {

    //\\--------------------- These are the functions to get the data for Previous Evaluations --------------------//\\

    const [service_id, setService_id] = useState("");
    const [created_at, setCreated_at] = useState("");
    const [condition, setCondition] = useState("");

    //\\--------------------- End of the functions that get the data for Previous Evaluations --------------------//\\

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-center">
                        <th scope="col" className="px-6 py-3">
                            Evaluation
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                        <td className="px-6 py-4">{props.service_id}</td>
                        <td className="px-6 py-4">{props.created_at}</td>
                        <td className="px-6 py-4">{props.condition}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PreviousEvaluations;