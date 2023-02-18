// To do: Add the style to the component

const ContactUs = () => {
    return (
        <>
            <div className="bg-background mx-auto py-10 px-2 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-6 text-2xl md:text-4xl">Contact Us</h1>

                    <div class="flex flex-col bg-jetBlack text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-6 md:px-8">
                        <h1 className="mb-12 text-2xl md:text-4xl">Leave us a message</h1>

                        <form className="text-white w-full">
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium ">Email</label>
                                <input type="email" id="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5" placeholder="name@kfupm.edu.sa" required>
                                </input>
                            </div>
                            <div className="mb-6">
                                <label for="password" className="block mb-2 text-sm font-medium">Subject</label>
                                <input type="password" id="password" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required>
                                </input>
                            </div>
                            <div className="mb-6">
                                <label for="message" className="block mb-2 text-sm font-medium">Message</label>
                                <textarea id="message" rows="4" className="w-full p-2.5 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
                            </div>
                            <div className="mb-6 flex justify-center">
                                <button type="submit" className="text-white bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">Send</button>
                            </div>
                        </form>

                        <div className="text-white flex flex-row justify-between w-full">
                            <h6 className="flex-row">Average Response Time</h6>
                            <h6 className="flex-row">1 working day</h6>
                        </div>

                    </div >
                </div>
            </div>
        </>
    )
}


export default ContactUs;