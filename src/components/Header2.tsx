import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { LuChevronDownSquare } from "react-icons/lu";
import Hello from "../assets/hello.png"


const Header2: React.FC = () => {
  return (
    <> <div className="bg-[#fff7ee] flex flex-col">
      <h1 className="font-bold text-3xl pt-11 ml-7">
        Instant Dive into Your Performance Metrics
      </h1>
      <div className="flex mt-5 ml-7 mr-24 space-x-4">
        <button
          type="button"
          className=" font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Lifetime
        </button>
        <button
          type="button"
          className="font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Last Week
        </button>
        <button
          type="button"
          className="font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Last Month
        </button>
        <button
          type="button"
          className="font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Last Year
        </button>
        <div className="flex items-center">
          <button className="font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-white  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <span className="flex items-center">
              <MdOutlineDateRange className="mr-1.5" />
              Customize Time Line
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1 ml-7 pb-14">
        <div className="col-span-2 flex-grow p-2">
          <div className="flex flex-col h-full p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="flex justify-between">
              <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                Shipment Updates
              </h2>
              <h2 className="self-end mb-2 text-m font-semibold tracking-tight text-gray-500 dark:text-white">Total Orders : 394</h2>
            </a>

            <div className="flex mt-0.25 pt-1 mr-1 pl-1 space-x-4 overflow-x-auto overflow-hidden snap-x scrollbar-hide">
              <button
                type="button"
                className="font-semibold text-xs px-1 py-2 mb-4 text-gray-900 bg-[#fff1e3] focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff] rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Delivered

              </button>
              <button
                type="button"
                className="font-semibold text-xs px-1 py-2 mb-4 text-gray-900 bg-[#f1f1f1] focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff] rounded-md border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 whitespace-nowrap"
              >
                Out for delivery
              </button>

              <button
                type="button"
                className="font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-[#f1f1f1]  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-md border border-gray-300  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Intransit

              </button>
              <button
                type="button"
                className="font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-[#f1f1f1]  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-md border border-gray-300  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Pending
              </button>
              <button
                type="button"
                className="font-semibold text-xs px-2 py-2 mb-4 text-gray-900 bg-[#f1f1f1]  focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-[#af92ff]  rounded-md border border-gray-300  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Eending
              </button>

            </div>
            <div className="relative">
              <div className="absolute top-28 left-44 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white"></div>
              </div>
              <div className="absolute top-28 left-28 transform -translate-x-1/2 -translate-y-1/2">40</div>

              <img src={Hello} alt="" className="w-60 ml-14 mt-1" />
            </div>


            <div className="flex flex-wrap gap-4 items-center bg-white">
              <div className="h-2 w-4 rounded-full bg-[#eaa200]"></div>
              <span className="font-normal text-s text-gray-700 dark:text-gray-400">Exception </span>

              <div className="h-2 w-4 rounded-full bg-[#c09000]"></div>
              <span className="font-normal text-s text-gray-700 dark:text-gray-400">Intransit </span>

              <div className="h-2 w-4 rounded-full bg-[#ffe0b5]"></div>
              <span className="font-normal text-s text-gray-700 dark:text-gray-400">Pending</span>

              <div className="w-10"></div>

              {/* New div for "Delivered" status with line break */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="h-2 w-4 rounded-full bg-[#ffd184]"></div>
                <span className="font-normal text-s text-gray-700 dark:text-gray-400">Delivered</span>
              </div>

              <div className="h-2 w-4 rounded-full bg-[#ffc000]"></div>
              <span className="font-normal text-s text-gray-700 dark:text-gray-400">Out for delivery</span>
            </div>


          </div>
        </div>
        <div className="col-span-1 flex-grow p-2">
          <div className="flex flex-col h-full p-6 bg-[#956f00] border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
              <a href="#">
                <h2 className="mb-2 text-m font-bold tracking-tight text-gray-100 dark:text-white flex items-center">
                  Star Facts about your
                  orders!!!
                </h2>
              </a>
            </div>
            <p className="z-10 mb-3 font-light text-s text-gray-50 dark:text-gray-400 relative">
              There are 8 shipments
              that have been in out for
              delivery for more than 3
              days.
              <div className="my-4"></div>
              There are 5 shipments in
              exception right now
              <div className="absolute top-40 left-40 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#aa882b]"></div>
              </div>
              <div className="my-4"></div>
              The maximum
              chargebacks are from
              Miami.
            </p>
            <div className="flex-grow"></div>
            <div className="flex justify-start align-bottom mt-2">
              <button
                type="button"
                className="text-gray-900 font-medium text-xs px-1 py-1 me-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Check Orders Page
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex-grow p-2">
          <div className="flex flex-col h-full p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
              <a href="#">
                <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                  Tracking Page Views Vs Orders

                </h2>
              </a>
            </div>
            <p className="mb-3 font-normal text-s text-gray-700 dark:text-gray-400">
              Understand user engagement patterns and optimize your tracking
              page for enhanced customer experiences.
            </p>

            <div className="grid grid-rows-2 gap-0">
              <div className="bg-[#ffebd5] rounded-lg my-5">
                <div className="grid grid-cols-2">
                  <div className="">
                    <div className="px-3 pt-2 font-normal text-s text-gray-700 dark:text-gray-400">Orders</div>
                    <div className="font-bold text-4xl text-gray-700 dark:text-gray-400 p-3">80</div>
                  </div>
                  <div className="pl-24 pt-6"><LuChevronDownSquare className="font-bold text-5xl" /></div>
                </div>
              </div>
              <div className="bg-[#ffc879] rounded-lg mb-9">
                <div className="grid grid-cols-2">
                  <div className="">
                    <div className="px-3 pt-2 font-normal text-s text-gray-700 dark:text-gray-400">Tracking Page Views</div>
                    <div className="font-bold text-4xl text-gray-700 dark:text-gray-400 p-3">44</div>
                  </div>
                  <div className="pl-24 pt-6"><IoEyeOutline className="font-bold text-5xl" /></div>
                </div>
              </div>
              <div className="flex-grow"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header2;




