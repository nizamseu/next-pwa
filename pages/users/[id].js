import { useRouter } from "next/router";
import React from "react";
import UserIcon from "../../Images/personalLoan/man.png";
import Image from "next/image";
export const getServerSideProps = async (ctx) => {
  const { params } = ctx;

  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
};

const singleUser = ({ data }) => {
  /* eslint-disable */
  const router = useRouter();
  const id = router.query.id;
  console.log(data);
  {
    /* <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.username}</h1>
        <h1>{data.phone}</h1>
        <h1>{data.website}</h1>
        <h1>{data.name}</h1> */
  }
  return (
    <div className="flex flex-col mt-8">
      {/* <h1 className="text-5xl text-center mb-5">Single User {id}</h1> */}
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        className="grid lg:grid-cols-2 md:grid-cols justify-center align-center mx-auto shadow-xl rounded p-6"
      >
        <div className="m-4 p-4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              width="200"
              height="200"
              className="p-4 border-2 border-emerald-300 rounded-full "
              src={UserIcon}
              alt="Rounded avatar"
            />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-8">
            <div
              className="bg-blue-600 h-2.5 rounded-full my-2"
              style={{ width: "85%" }}
            ></div>
          </div>
          <div className="flex justify-between items-center my-4">
            <div className="mx-4">
              <h1 className="my-2 text-neutral-400 text-3xl">Your Rating</h1>
              <h1 className="text-center font-bold text-5xl">51%</h1>
            </div>
            <div className="mx-4">
              <h1 className="my-2 text-neutral-400 text-3xl">Your Activity</h1>
              <h1 className="text-center font-bold text-5xl">81%</h1>
            </div>
          </div>
        </div>
        {/* information section  */}
        <div>
          {/* nae and address  */}
          <div className="m-4 p-4">
            <h1 className="text-5xl font-bold text-cyan-700">{data.name}</h1>
            <h1 className="text-xl ">{`${data.address.street} ,${data.address.city}`}</h1>
            <hr className="my-4" />
          </div>

          {/* personal info  */}
          <div>
            <div className="grid grid-cols-2 my-1">
              <h1 className="text-xl text-left">Email</h1>
              <h1 className="text-xl text-left">{data.email}</h1>
            </div>
            <div className="grid grid-cols-2 my-1">
              <h1 className="text-xl text-left">User Name</h1>
              <h1 className="text-xl text-left">{data.username}</h1>
            </div>
            <div className="grid grid-cols-2 my-1">
              <h1 className="text-xl text-left">Web Site</h1>
              <h1 className="text-xl text-left">{data.website}</h1>
            </div>
            <div className="grid grid-cols-2 my-1">
              <h1 className="text-xl text-left">Address</h1>
              <h1 className="text-xl text-left">{`${data.address.street} ,${data.address.city}`}</h1>
            </div>
            <div className="grid grid-cols-2 my-1">
              <h1 className="text-xl text-left">Phone</h1>
              <h1 className="text-xl text-left">{data.phone}</h1>
            </div>
            <div className="grid grid-cols-2 my-1">
              <h1 className="text-xl text-left">Company</h1>
              <div>
                <h1 className="text-xl text-left">{data.company.name}</h1>
                <button
                  onClick={() => router.back()}
                  type="button"
                  className="w-24 my-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleUser;
