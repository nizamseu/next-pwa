import Image from "next/image";
import React from "react";

const maincard = () => {
  return (
    <div>
      <h1 className="text-4xl">Main Components</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  ">
        <div className="m-5  border-solid border-2">
          <div className="relative ">
            <div className="flex align-items-center p-2 hover:bg-slate-400">
              <img
                width={20}
                height={15}
                src="https://aamartaka.com/svg-icon/loan-front.svg"
                alt=""
              />
              <p className="pl-6 text-xl">Personal Loan</p>
            </div>
            <div className="flex h-56 left-0 top-0 align-center justify-center absolute bg-green-500 w-full  hover:hidden">
              <img src="https://aamartaka.com/svg-icon/loan-front.svg" alt="" />
              <p className="absolute text-5xl font-bold top-1/2  items-center justify-center">
                Loan
              </p>
            </div>
          </div>
        </div>
        <div className="  m-5 p-5 border-solid border-2 hover:bg-orange-400 ">
          Distinctio fugiat architecto numquam saepe impedit aut nihil
          necessitatibus totam, praesentium incidunt odio. Perferendis deserunt
          iure, amet voluptatum, accusantium eos animi soluta et fugiat maiores
          vero quia, reiciendis iste maxime.
        </div>
        <div className=" m-5 p-5 border-solid border-2 hover:bg-orange-400 ">
          Quia, sunt natus alias accusamus ipsum inventore veritatis dignissimos
          similique ipsa autem facilis id aliquam deserunt amet dolorum tenetur
          blanditiis possimus velit aspernatur molestias soluta? Laborum nostrum
          modi soluta pariatur?
        </div>
        <div className=" m-5 p-5 border-solid border-2 hover:bg-orange-400 ">
          Voluptatibus commodi eos veniam a, repellat aspernatur ipsa
          dignissimos odit error. Reprehenderit similique quasi quod aperiam
          voluptas quaerat natus accusantium rem! Magnam sapiente, error
          quisquam labore nesciunt molestiae cumque ratione!
        </div>
      </div>
    </div>
  );
};

export default maincard;
