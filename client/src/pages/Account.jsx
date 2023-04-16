import SignedNavbar from "../components/SignedNavbar";
import PreviousEvaluations from "../components/PreviousEvaluations";

export default function Account() {
  return (
    <div>
      <SignedNavbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="py-5 mt-10 w-fit">
          <p className="text-jetBlack font-Montserrat text-2xl font-semibold">Profile</p>
        </div>
        <div className="md:col-span-2">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow">
              <div className="bg-jetBlack bg-opacity-10 rounded p-4">
                <div className="grid grid-cols-6 gap-6 ">
                  {/* NOTE: Add a placeholder with the previous first name */}
                  <div className="col-span-6 sm:col-span-3 ">
                    <label htmlFor="first-name" className="block text-md font-medium text-gray-700 font-Montserrat">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="given-name"
                      className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* NOTE: Add a placeholder with the previous last name */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-md font-medium text-gray-700 font-Montserrat">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="family-name"
                      className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-jetBlack bg-opacity-10 text-right pr-4 pb-4">
                <button
                  type="submit"
                  className="active:translate-y-1 font-Montserrat inline-flex justify-center rounded-md border border-transparent bg-mid-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green focus:ring-offset-1 uppercase"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="py-5 mt-10 w-fit">
          <p className="text-jetBlack font-Montserrat text-2xl font-semibold">Change Password</p>
        </div>
        <div className="md:col-span-2">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow">
              <div className="bg-jetBlack bg-opacity-10 rounded p-4">
                <div className="grid grid-cols-6 gap-6 ">
                  <div className="col-span-6 sm:col-span-3 ">
                    <label htmlFor="old-Password" className="block text-md font-medium text-gray-700 font-Montserrat">
                      Old Password
                    </label>
                    <input
                      type="password"
                      name="old-Password"
                      id="old-Password"
                      className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6 mt-4">
                  <div className="col-span-6 sm:col-span-3 ">
                    <label htmlFor="new-password" className="block text-md font-medium text-gray-700 font-Montserrat">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new-password"
                      id="new-password"
                      className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 ">
                    <label htmlFor="confirm-new-password" className="block text-md font-medium text-gray-700 font-Montserrat">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirm-new-password"
                      id="confirm-new-password"
                      className="opacity-70 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-jetBlack bg-opacity-10 text-right pr-4 pb-4">
                <button
                  type="submit"
                  className="active:translate-y-1 font-Montserrat inline-flex justify-center rounded-md border border-transparent bg-mid-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-green focus:outline-none focus:ring-1 focus:ring-dark-green focus:ring-offset-1 uppercase"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="py-5 mt-10 w-fit">
          <p className="text-jetBlack font-Montserrat text-2xl font-semibold">Previous Evaluations</p>
        </div>
        <div className="md:col-span-2">
          <div className="bg-jetBlack bg-opacity-10 rounded p-4">
            {/* Previous Evaluations should be implemented here */}
            <PreviousEvaluations />
            <p className="text-xl font-Montserrat text-center">You have not evaluated any service yet!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
