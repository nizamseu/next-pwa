import React from "react";
import Link from "next/link";
export const getServerSideProps = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  return {
    props: {
      users: data,
    },
  };
};

const index = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>All User List</h1>
      {users &&
        users.map((item) => {
          return (
            <>
              <div className="border-solid border-2 m-2 p-3">
                <Link href={`/users/${item.id}`} passHref>
                  <h1>{item.name}</h1>
                </Link>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default index;
