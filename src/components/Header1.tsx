import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TiWarningOutline } from "react-icons/ti";

const Header1: React.FC = () => {
  return (
    <>
      <div className="bg-[#fffdfa] flex flex-col">
        <h1 className="font-bold text-3xl pt-11 ml-7">
          Welcome, John Mathew!!
        </h1>
        <div className="flex mt-11 ml-7 mr-24 space-x-1 pb-14">
          <div className="w-full flex-grow p-2">
            <div className="max-w-sm flex flex-col h-full p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                  Order Sync Successful!
                </h2>
              </a>
              <p className="mb-3 font-normal text-s text-gray-500 dark:text-gray-400">
                Your order details from the last 30 days have been successfully
                synced. Check them out now!
              </p>
              <div className="flex-grow"></div>
              <div className="flex justify-start">
                <button
                  type="button"
                  className="text-white bg-gray-800 mt-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-xs px-1 py-1 me-2 mb-4 rounded-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Explore Your Orders
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex-grow p-2">
            <div className="max-w-sm flex flex-col h-full p-6 bg-[#fff8db] border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center">
                <a href="#">
                  <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                    <TiWarningOutline className="mr-2" /> Customize Customer
                    Notification
                  </h2>
                </a>
              </div>
              <p className="mb-3 font-normal text-s text-gray-700 dark:text-gray-400">
                Tailor Your Email Experience: Set the Sender Email and Choose
                Notification Triggers
              </p>
              <div className="flex-grow"></div>
              <div className="flex justify-start">
                <button
                  type="button"
                  className="text-white bg-gray-800 mt-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg font-medium text-xs px-1 py-1 me-2 mb-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Configure Notifications
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex-grow p-2">
            <div className="max-w-sm flex flex-col h-full p-6 bg-[#eaf4ff] border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center">
                <a href="#">
                  <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                    <IoIosInformationCircleOutline className="mr-2" /> Your
                    Tracking Link has been generated
                  </h2>
                </a>
              </div>
              <p className="mb-3 font-normal text-s text-gray-700 dark:text-gray-400">
                Include the{" "}
                <a
                  href="#"
                  className="text-blue-500 underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                >
                  Link
                </a>{" "}
                to Your Store's Navigation Menu.
              </p>
              <div className="flex-grow"></div>
              <div className="flex justify-start">
                <div className="flex">
                  <button
                    type="button"
                    className="text-gray-900 font-medium text-xs px-1 py-1 me-2 mb-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Copy Link
                  </button>
                  <button
                    type="button"
                    className="text-white font-medium text-xs px-1 py-1 me-2 mb-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300  rounded-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Go To Navigation Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
