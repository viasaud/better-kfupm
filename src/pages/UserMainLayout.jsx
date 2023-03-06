import React, { useState } from 'react'
import SignedNavbar from '../components/SignedNavbar'
import ReviewCard from '../components/ReviewCard'
import Footer from '../components/Footer'

const UserMainLayout = () => {

    return (
        <>
            <div className=" h-screen">
                <SignedNavbar name="User Home" />


                <div className="bg-background flex flex-col justify-center overflow-auto mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">

                    {/* Search area */}
                    <div className='py-10'>
                        <form>
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                            <div className="relative w-100 border-2 border-jetBlack rounded-lg">
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-dark-green" placeholder="Search" required>
                                </input>
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                            </div>
                        </form>
                    </div>

                    {/* Rating cards*/}
                    <div className='flex flex-row flex-wrap justify-center	md:justify-between'>
                        <ReviewCard name="KFUPM mall" rating="1.0" evaluators="39" comments="20" />
                        <ReviewCard name="KFUPM mall" rating="1.0" evaluators="39" comments="20" />
                        <ReviewCard name="KFUPM mall" rating="1.0" evaluators="39" comments="20" />
                        <ReviewCard name="KFUPM mall" rating="1.0" evaluators="39" comments="20" />
                    </div>
                </div>

                <Footer />
            </div >
        </>
    )
}

export default UserMainLayout;