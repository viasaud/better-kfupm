// To do: Add the style to the component

const ContactUs = () => {
  return (
    <div className="bg-background">
      <div className="bg-background mx-auto py-10 px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-Montserrat text-jetBlack font-semibold text-4xl py-5">Contact Us</h1>

          <div className="flex flex-col bg-jetBlack text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-6 md:px-8">
            <h1 className="mb-12 text-2xl md:text-4xl font-Montserrat">Leave us a message</h1>

            <form className="text-white w-full">
              <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-Montserrat">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto"
                  placeholder="name@kfupm.edu.sa"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label for="subject" className="block mb-2 text-sm font-Montserrat">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="font-Roboto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label for="message" className="block mb-2 text-sm font-Montserrat">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="font-Roboto w-full p-2.5 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="mb-6 flex justify-center">
                <button
                  type="submit"
                  className=" text-white bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center font-Montserrat capitalize"
                >
                  Send
                </button>
              </div>
            </form>

            <div className="text-white flex flex-row justify-between w-full">
              <h6 className="flex-row font-Roboto">Average Response Time</h6>
              <h6 className="flex-row font-Roboto">1 working day</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
