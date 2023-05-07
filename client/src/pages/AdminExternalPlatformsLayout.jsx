import React, { useState, useEffect } from "react";
import SignedNavbar from "../components/SignedNavbar";
import AdminReviewCard from "../components/AdminReviewCard";
import Footer from "../components/Footer";
import api from "../api/posts";

export default function AdminExternalPlatformsLayout() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("service/ext");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="bg-background">
                {/* in SignedNavbar, pass the name of the page as a prop */}
                <SignedNavbar name="External Platforms" />

                <div className="bg-background flex flex-col justify-center overflow-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
                    {/* Search area */}
                    <div className="py-10">
                        <form>
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">
                                Search
                            </label>
                            <div className="relative w-100 rounded-lg">
                                <input
                                    type="search"
                                    id="default-search"
                                    className="inline opacity-80 py-3 w-9/12 rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm md:w-11/12"
                                    placeholder="Building . . ."
                                    required
                                ></input>
                                <button
                                    type="submit"
                                    className="text-white inline bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-3 w-3/12 font-Montserrat shadow-sm md:w-1/12"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Rating cards*/}
                    <div className="flex flex-row flex-wrap justify-center	md:justify-between">
                        {/* fitch the data from fetchData() fuction */}
                        {data.map((value, key) => (
                            <AdminReviewCard id={data[key].id} name={data[key].name} />
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
