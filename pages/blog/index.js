import React from "react";
import { useSelector } from "react-redux";
import { useGetAllUserQuery, useGetAllPostQuery } from "../../Redux/ownApi";

const Index = () => {
  // const user = useSelector((state) => console.log(state));
  const getData = useGetAllUserQuery();
  const { data } = useGetAllPostQuery();

  return (
    <div>
      <h1>This Blog Section</h1>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
        {data &&
          data.map((item) => {
            return (
              <>
                <div className="max-w-sm w-full lg:max-w-full lg:flex m-3">
                  <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                      backgroundImage: "url(https://i.ibb.co/gRtd84Z/1-24.jpg)",
                    }}
                    title="Woman holding a mug"
                  ></div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center">
                        <img
                          className="fill-current text-gray-500 w-3 h-3 mr-2"
                          src="https://i.ibb.co/gRtd84Z/1-24.jpg"
                        ></img>
                        Members only
                      </p>
                      <div className="text-gray-900 font-bold text-xl mb-2">
                        {item.title}
                      </div>
                      <p className="text-gray-700 text-base">{item.body}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="https://i.ibb.co/gRtd84Z/1-24.jpg"
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                          Jonathan Reinink
                        </p>
                        <p className="text-gray-600">Aug 18</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Index;
