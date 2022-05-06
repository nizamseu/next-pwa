import { useState } from "react";
import Image from "next/image";
import MenuIcon from "../../Images/Icon/menu.png";
import Logo from "../../Images/Icon/logoWeb.png";
import Layer from "../../Images/Icon/Layer-6.png";
import Offer from "../../Images/Icon/offers.svg";
import Link from "next/link";
import useAuth from "../../Hooks/useAuth";
export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const { user, logOut } = useAuth();
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="bg-white shadow xl:block hidden pb-1">
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
                  {/* <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3">
                    Aamar Taka
                  </h2> */}
                  <Image height={"58px"} width={"173px"} src={Logo} alt="" />
                </div>
                <div className="flex items-center pl-24">
                  <Image height={"26px"} width={"24px"} src={Layer} alt="" />
                  <p className="phone">09609122122</p>
                </div>
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16 justify-center items-center">
                  <a
                    href="javascript: void(0)"
                    className="flex nav_tracking px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    <span className=" mr-2"> Tracking Application</span>
                  </a>
                  <a
                    href="javascript: void(0)"
                    className="flex nav_tracking  px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Trending Offers
                  </a>
                  {user?.email ? (
                    <div className="flex items-center">
                      <h1>{user.displayName}</h1>{" "}
                      <button onClick={logOut} className="ml-2">
                        Log Out
                      </button>{" "}
                    </div>
                  ) : (
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  )}
                </div>
                <div className="hidden xl:flex items-center mr-2">
                  <p className="py-2">Menu</p>
                </div>

                <button>
                  <Image width={20} height={20} src={MenuIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
