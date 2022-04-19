import { useState } from "react";
export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="bg-white shadow xl:block hidden">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <div className="hidden close-m-menu text-gray-700">
                    <svg
                      aria-label="Close"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center">
                  <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3">
                    Aamar Taka
                  </h2>
                </div>
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16">
                  <a
                    href="javascript: void(0)"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2"></span>
                    Tracking Application
                  </a>
                  <a
                    href="javascript: void(0)"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className="mr-2"></span>
                    Trending Offers
                  </a>
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="relative md:mr-6 my-2">
                    <p className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">
                      Manu
                    </p>
                  </div>
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="relative md:mr-6 my-2">
                    <p className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">
                      Manu2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          {/* Hidden */}
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
            <div className="w-24"></div>
            <div className="flex items-center">
              <div className="relative mr-6 ">
                <button className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">
                  Manageee
                </button>
              </div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          {/* start */}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <p className="text-base md:text-2xl text-gray-800 ml-3">
                            The North
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800 "
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* List */}
                  <p>List 1</p>
                  <p>List 2</p>
                  <p>List 3</p>
                </div>
              </div>
            </div>
            {/* the end */}
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
