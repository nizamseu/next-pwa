import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "../../Images/personalLoan/man.png";
import Location from "../../Images/Others/location.gif";

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
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default userslist;
