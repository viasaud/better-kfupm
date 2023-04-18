import React, { useState } from "react";
import SignedNavbar from "../components/SignedNavbar";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";

export default function ServiceCentersLayout() {
  return (
    <>
      <div className=" h-screen">
        {/* in SignedNavbar, pass the name of the page as a prop */}
        <SignedNavbar name="Service Centers" />

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
                  className="inline opacity-80 py-3 w-11/12 rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Building . . ."
                  required
                ></input>
                <button
                  type="submit"
                  className="text-white inline bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-3 w-1/12 font-Montserrat shadow-sm"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Rating cards*/}
          <div className="flex flex-row flex-wrap justify-center	md:justify-between">
            <ReviewCard name="BUILDING 54" rating="1.9" evaluators="39" comments="20" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
