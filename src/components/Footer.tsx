import React, { useState, ChangeEvent } from 'react';
import Comppany from "../assets/company.png"
const Footer: React.FC = () => {
  const [color1, setColor1] = useState<string>('FF9898');
  const [color2, setColor2] = useState<string>('571010');
  const [color3, setColor3] = useState<string>('FFEAEA');

  const handleColorChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setColor1(event.target.value);
  };
  const handleColorChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setColor2(event.target.value);
  };
  const handleColorChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setColor3(event.target.value);
  };
  return (
    <>
      <div className="bg-[#fffdfa] flex flex-col">
        <h1 className="font-bold text-3xl pt-11 ml-7">
          Discover the Heart of Our Functionality
        </h1>
        <div className="grid grid-cols-10 gap-1 ml-7 pb-14">
          <div className="col-span-3 p-2">
            <div className="flex flex-col h-full p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                  Elevate Your Brand Aesthetics with Custo
                  Tracking Page Styles

                </h2>
              </a>
              <p className="mb-3 font-normal text-s text-gray-500 dark:text-gray-400">
                Immerse your customers in a branded
                experience by personalizing the colors on your
                tracking page.
              </p>

              <div>
                <p className="mt-1 font-normal text-s text-gray-500 dark:text-gray-400">Accent Color
                </p>
                <div className="grid grid-cols-8 gap-4">
                  <div className="col-span-6">
                    <div className="border-2 border-gray-300 rounded-lg px-1 py-1.5">
                      <input
                        className="w-full h-full"

                        value={color1}
                        onChange={handleColorChange1}
                      />
                    </div>
                  </div>
                  <div
                    className="w-16 h-8 col-span-2 rounded-lg"
                    style={{ backgroundColor: `#${color1}` }}
                  >
                  </div>
                </div>
                <p className="mt-4 font-normal text-s text-gray-500 dark:text-gray-400">Text Color
                </p>
                <div className="grid grid-cols-8 gap-4">
                  <div className=" col-span-6">
                    <div className="border-2 border-gray-300 rounded-lg px-1 py-1.5">
                      <input className="w-full h-full" value={color2}
                        onChange={handleColorChange2}
                      />
                    </div>
                  </div>
                  <div
                    className="w-16 h-8 col-span-2 rounded-lg"
                    style={{ backgroundColor: `#${color2}` }}
                  >
                  </div>
                </div>
                <p className="mt-4 font-normal text-s text-gray-500 dark:text-gray-400">Background Color
                </p>
                <div className="grid grid-cols-8 gap-4 mt-1">
                  <div className=" col-span-6">
                    <div className="border-2 border-gray-300 rounded-lg px-1 py-1.5">
                      <input className="w-full h-full" value={color3}
                        onChange={handleColorChange3}
                      />
                    </div>
                  </div>
                  <div
                    className="w-16 h-8 col-span-2 rounded-lg"
                    style={{ backgroundColor: `#${color3}` }}
                  >
                  </div>
                </div>
              </div>






              <div className="flex justify-start mt-4">
                <div className="flex">
                  <button
                    type="button"
                    className="text-gray-900 font-medium text-xs px-2 py-1 me-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="text-white font-medium text-xs px-2 py-1 me-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300  rounded-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Apply Colors
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 p-2">
            <div className="grid grid-rows-7 gap-1">
              <div className="row-span-3">
                <div className="flex flex-col h-full px-6 pt-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                      Exclusive Onboarding Support for High-Volume Brands

                    </h2>
                  </a>
                  <p className="mb-1 font-normal text-s text-gray-500 dark:text-gray-400">
                    Unlock personalized guidance! Book a one-on-one
                    onboarding call to streamline your experience.

                  </p>
                  <div className="flex justify-start">
                    <button
                      type="button"
                      className="text-white bg-gray-800 mt-6 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-xs px-2 py-1 me-2 rounded-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Schedule A Call
                    </button>
                  </div> </div>
              </div>
              <div className="row-span-4">
                <div className="flex flex-col h-full p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                      Explore Our Integrated Ecosystem

                    </h2>
                  </a>
                  <p className="mb-3 font-normal text-s text-gray-500 dark:text-gray-400">
                    Discover a variety of popular integrations tailored for your
                    convenience.
                  </p>
                  <img src={Comppany} alt="" className="w-72 mt-1" />
                  <div className="flex justify-start">
                    <button
                      type="button"
                      className="text-white bg-gray-800 mt-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-xs px-2 py-1 me-2 rounded-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Explore Integrations
                    </button>
                  </div> </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 p-2">
            <div className="flex flex-col h-full p-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h2 className="mb-2 text-m font-bold tracking-tight text-gray-900 dark:text-white">
                  Seamlessly Integrate Custom HTML
                  Elements

                </h2>
              </a>
              <p className="mb-3 font-normal text-s text-gray-500 dark:text-gray-400">
                Unleash creativity with our Custom HTML
                feature. Add links, custom messages, or any
                HTML content to elevate the tracking page
                experience for your customers.
              </p>
              <p className="mt-1 font-normal text-s text-gray-500 dark:text-gray-400">HTML Link</p>
              <div className="flex-grow border-2 border-gray-300 mt-1 mb-4 rounded-lg p-2">
                <textarea className="w-full h-full" placeholder="Value" />
              </div>

              <div className="flex justify-start">
                <div className="flex">
                  <button
                    type="button"
                    className="text-gray-900 font-medium text-xs px-2 py-1 me-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="text-white font-medium text-xs px-2 py-1 me-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300  rounded-lg  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Apply changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  );
};

export default Footer;