import Image from "next/image";
import React from "react";

const maincard = () => {
  return (
    <div>
      <h1 className="title-text text-4xl text-center pb-16">
        Compare Rates, Check Eligibility & Apply
      </h1>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 place-content-center place-items-center mx-auto">
        {/* Loan Component */}
        <div className="itemHover border-solid border-2 relative">
          <div className=" flex align-items-center p-2 hover:bg-slate-400">
            <img
              width={20}
              height={15}
              src="https://aamartaka.com/svg-icon/loan-front.svg"
              alt=""
            />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="box-option flex h-full left-0 top-0  absolute w-full ">
            <img src="https://aamartaka.com/svg-icon/loan-front.svg" alt="" />
            <p className="cardTitle absolute top-4 left-4  text-2xl font-bold text-white">
              Loan
            </p>
          </div>
        </div>

        {/* Deposite Components */}
        <div className="itemHover border-solid border-2 relative">
          <div className=" flex align-items-center p-2 hover:bg-slate-400">
            <img
              width={20}
              height={15}
              src="https://aamartaka.com/svg-icon/loan-front.svg"
              alt=""
            />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="box-option flex h-full left-0 top-0  absolute w-full ">
            <img src="https://aamartaka.com/svg-icon/loan-front.svg" alt="" />
            <p className="absolute text-2xl font-bold text-white">Loan</p>
          </div>
        </div>

        {/*Credit cart Component */}
        <div className="itemHover border-solid border-2 relative">
          <div className=" flex align-items-center p-2 hover:bg-slate-400">
            <img
              width={20}
              height={15}
              src="https://aamartaka.com/svg-icon/loan-front.svg"
              alt=""
            />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="box-option flex h-full left-0 top-0  absolute w-full ">
            <img src="https://aamartaka.com/svg-icon/loan-front.svg" alt="" />
            <p className="absolute text-2xl font-bold text-white">Loan</p>
          </div>
        </div>

        {/* Insurance Component */}
        <div className="itemHover border-solid border-2 relative">
          <div className=" flex align-items-center p-2 hover:bg-slate-400">
            <img
              width={20}
              height={15}
              src="https://aamartaka.com/svg-icon/loan-front.svg"
              alt=""
            />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="box-option flex h-full left-0 top-0  absolute w-full ">
            <img src="https://aamartaka.com/svg-icon/loan-front.svg" alt="" />
            <p className="absolute text-2xl font-bold text-white">Loan</p>
          </div>
        </div>

        {/* Price Bond */}
        <div className="itemHover border-solid border-2 relative">
          <div className=" flex align-items-center p-2 hover:bg-slate-400">
            <img
              width={20}
              height={15}
              src="https://aamartaka.com/svg-icon/loan-front.svg"
              alt=""
            />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="box-option flex h-full left-0 top-0  absolute w-full ">
            <img src="https://aamartaka.com/svg-icon/loan-front.svg" alt="" />
            <p className="absolute text-2xl font-bold text-white">Loan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default maincard;
