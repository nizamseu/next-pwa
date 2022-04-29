import React from "react";
import { useSelector } from "react-redux";
import { useGetAllUserQuery } from "../../Redux/ownApi";

const Index = () => {
  // const user = useSelector((state) => console.log(state));
  const getData = useGetAllUserQuery();
  console.log(getData);
  return (
    <div>
      <h1>This Blog Section</h1>
    </div>
  );
};

export default Index;
