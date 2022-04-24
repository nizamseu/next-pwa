import Image from "next/image";
import React from "react";
import Loan from "../../Images/Icon/loan-front.svg";
import Deposit from "../../Images/Icon/deposit-font.svg";
import Credit from "../../Images/Icon/credit-card-front.svg";
import Insurance from "../../Images/Icon/insurance-font.svg";
import Prize from "../../Images/Icon/prize-bond.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
const Maincard = () => {
  return (
    <div className="mainCard">
      <h1 className="title-text text-4xl  text-center py-16 text-white">
        Compare Rates, Check Eligibility & Apply
      </h1>

      <div className="container px-14 gap-4 grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 place-content-center place-items-center mx-auto pb-24">
        {/* Loan Component */}
        <div className="loan single_card_item  relative">
          <Link href={"/personalLoan"}>
            <a className="singleItem flex align-items-center p-2 z-50 ">
              <Image width={20} height={15} src={Loan} alt="" />
              <p className="pl-6 text-xl ">Personal Loan </p>
            </a>
          </Link>

          <div className="loan_test flex h-full left-0 top-0  absolute w-full ">
            <div
              style={{ position: "absolute", bottom: "0", left: "10%" }}
              className="flex justify-center align-bottom mx-auto"
            >
              <Image height={300} width={300} src={Loan} alt="" />
            </div>
            <p className="cardTitle absolute top-4 left-4  text-2xl font-bold text-white">
              Loan 22
            </p>
          </div>
        </div>

        {/* Deposite Components */}
        <div className="deposite single_card_item  relative">
          <div className="single_card_item_header flex align-items-center p-2 hover:bg-slate-400">
            <Image width={20} height={15} src={Deposit} alt="" />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="loan_test flex h-full left-0 top-0  absolute w-full ">
            <div
              style={{ position: "absolute", bottom: "0", left: "10%" }}
              className="flex justify-center align-bottom mx-auto"
            >
              <Image height={300} width={300} src={Deposit} alt="" />
            </div>
            <p className="cardTitle absolute top-4 left-4  text-2xl font-bold text-white">
              Deposite
            </p>
          </div>
        </div>

        {/*Credit cart Component */}
        <div className="credit_card single_card_item  relative">
          <div className="single_card_item_header flex align-items-center p-2 hover:bg-slate-400">
            <Image width={20} height={15} src={Credit} alt="" />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="loan_test flex h-full left-0 top-0  absolute w-full ">
            <div
              style={{ position: "absolute", bottom: "0", left: "10%" }}
              className="flex justify-center align-bottom mx-auto"
            >
              <Image height={300} width={300} src={Credit} alt="" />
            </div>
            <p className="cardTitle absolute top-4 left-4  text-2xl font-bold text-white">
              Credit Card
            </p>
          </div>
        </div>

        {/* Insurance Component */}
        <div className="insurance single_card_item  relative">
          <div className="single_card_item_header flex align-items-center p-2 hover:bg-slate-400">
            <Image width={20} height={15} src={Insurance} alt="" />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="loan_test flex h-full left-0 top-0  absolute w-full ">
            <div
              style={{ position: "absolute", bottom: "0", left: "10%" }}
              className="flex justify-center align-bottom mx-auto"
            >
              <Image height={300} width={300} src={Insurance} alt="" />
            </div>
            <p className="cardTitle absolute top-4 left-4  text-2xl font-bold text-white">
              Insurance
            </p>
          </div>
        </div>

        {/* Price Bond */}
        <div className="prize single_card_item  relative">
          <div className="single_card_item_header flex align-items-center p-2 hover:bg-slate-400">
            <Image width={20} height={15} src={Prize} alt="" />
            <p className="pl-6 text-xl">Personal Loan</p>
          </div>
          <div className="loan_test flex h-full left-0 top-0  absolute w-full ">
            <div
              style={{ position: "absolute", bottom: "0", left: "10%" }}
              className="flex justify-center align-bottom mx-auto"
            >
              <Image height={300} width={300} src={Prize} alt="" />
            </div>
            <p className="cardTitle absolute top-4 left-4  text-2xl font-bold text-white">
              Prize Bond
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincard;
