import React, { useState, useEffect } from "react";
import SignedNavbar from "../components/SignedNavbar";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";
import api from "../api/posts";


export default function ServiceCentersLayout() {

  // fetch data from the backend
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("service/bld");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    setFilteredData(filterData(data, searchTerm));
  }, [data, searchTerm]);


  const filterData = (data, searchTerm) => {
    if (searchTerm === "") {
      return data;
    }
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.elements.search.value);
  };


  return (
    <>
      <div className="bg-background min-h-screen">
        <SignedNavbar name="Service Centers" />
        <div className="bg-background flex flex-col justify-center overflow-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
          <div className="py-10">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative w-100 rounded-lg">
                <input
                  type="search"
                  id="default-search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="inline opacity-80 py-3 w-9/12 rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm md:w-11/12"
                  placeholder="Building . . ."
                  required
                />
                <button
                  type="submit"
                  className="text-white inline bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-3 w-3/12 font-Montserrat shadow-sm md:w-1/12"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {searchTerm.length > 0 && filteredData.length > 0 && (
            <div className="flex flex-row flex-wrap justify-center md:justify-between">

              {filteredData.map((value, key) => (
                <ReviewCard
                  key={key}
                  id={value.id}
                  name={value.name}
                />
              ))}
            </div>
          )}

          {searchTerm.length === 0 && (
            <div className="flex flex-row flex-wrap justify-center md:justify-between">
              {/* fitch the data from fetchData() fuction */}
              {data.map((value, key) => (
                <ReviewCard id={data[key].id} name={data[key].name} />
              ))}
            </div>
          )}

        </div>
        <Footer />
      </div>
    </>
  );
}
