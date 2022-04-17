import { useRouter } from "next/router";
import React from "react";

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

  return (
    <div className="flex flex-col ">
      <h1 className="text-5xl text-center mb-5">Single User {id}</h1>
      <div className="justify-center align-center mx-auto">
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.username}</h1>
        <h1>{data.phone}</h1>
        <h1>{data.website}</h1>
        <h1>{data.name}</h1>
      </div>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
};

export default singleUser;
