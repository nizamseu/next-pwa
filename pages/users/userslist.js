import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "../../Images/personalLoan/man.png";
import Location from "../../Images/Others/location.gif";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";
// import Popup from "reactjs-popup";
import AddUser from "./addUser";
import Update from "./update/[id]";
const deleteConfirrm = () => {
  return Swal.fire({
    icon: "error",
    title: "Are you want DELETE It?",
    showCancelButton: true,
    confirmButtonText: "Yes",
  });
};
export const getServerSideProps = async () => {
  const result = await fetch("http://localhost:3000/api/getuser");
  const data = await result.json();
  return {
    props: {
      users: data,
    },
  };
};
const userslist = ({ users }) => {
  const handleDelete = (id) => {
    deleteConfirrm().then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/api/getuser/?id=${id}`).then((data) => {
          if (data) {
            Router.push("/users/userslist");
          }
        });
        Swal.fire({
          icon: "error",
          title: "DELETED",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const handleEdit = () => {};

  return (
    <div className="mt-2">
      <h1 className="text-4xl text-center p-8">All User List</h1>
      <div className="px-24   grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 g gap-6">
        {users &&
          users.map((item) => {
            return (
              <>
                <div
                  style={{ height: "450px" }}
                  className="shadow-lg border-2 rounded-md"
                >
                  <Link href={`/users`} passHref>
                    <a>
                      <div className=" m-2 p-3 ">
                        {/* image and name  */}
                        <div className=" flex flex-col align-middle items-center justify-center">
                          <div className="p-4">
                            <div className="flex justify-center items-center mb-8 ">
                              <Image
                                height="10px"
                                width="10px"
                                src={Location}
                                alt=""
                              />
                              <h1 className="ml-2 text-center">
                                {item.location}
                              </h1>
                            </div>
                            <Image
                              width="130px"
                              height="130px"
                              className="p-4 border-2 border-emerald-300 rounded-full  "
                              src={UserIcon}
                              alt="Rounded avatar"
                            />
                          </div>
                          <h1
                            className="font-bold text-3xl pb-4 text-center"
                            style={{ color: "#021533" }}
                          >
                            {item.name}
                          </h1>
                          <hr className="divide-y " />
                          <h1 className="text-xl text-center">
                            {item.position}
                          </h1>
                          <h1 className="text-sm text-center my-2">
                            {" "}
                            {item?.email}
                          </h1>
                        </div>
                      </div>
                    </a>
                  </Link>
                  <div className="flex justify-between items-center mx-8 pa-8">
                    {/* <button
                      onClick={() => handleEdit(item)}
                      type="button"
                      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                    >
                      EDIT
                    </button> */}
                    <Link href={`/users/update/${item._id} `} passHref>
                      <a>
                        adit
                        {/* <Popup
                      trigger={<button className="button"> Open Modal </button>}
                      modal
                    >
                      <Update></Update>
                    </Popup> */}
                      </a>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      type="button"
                      className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default userslist;
