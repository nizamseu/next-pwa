import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import TestCart from "../Components/Test/testCart";
const Test = () => {
  const [page, setPage] = useState(7);
  const [characterData, setCharacterData] = useState([]);
  const [inputData, setInputrData] = useState("");
  const [status, setStatus] = useState("");

  // const fetchCharacters = async ({ queryKey }) => {
  //   const response = await fetch(
  //     `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
  //   );
  //   return response.json();
  // };

  // const result = useQuery(["charater", page], fetchCharacters);

  const fetchCharacters = async () => {
    let url = `https://rickandmortyapi.com/api/character`;
    if (inputData) {
      url = `https://rickandmortyapi.com/api/character/?name=${inputData}`;
    }
    if (inputData && status) {
      url = `https://rickandmortyapi.com/api/character/?name=${inputData}&status=${status}`;
    }
    // if (!inputData || !status) {
    //   url = `https://rickandmortyapi.com/api/character`;
    // }
    console.log(url);
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setCharacterData(result.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, [inputData, status]);

  // if (result.status === "loading")
  //   return <div className="text-center text-5xl">Loading...</div>;
  // if (result.status === "error")
  //   return <div className="text-center text-5xl text-red-700">Error</div>;

  const handleChange = (e) => {
    const text = e.target.value;
    setInputrData(text);
    // const result = characterData.filter((item) => item.name === text);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value.toLowerCase());
  };
  console.log("status", status, inputData);

  return (
    <div>
      <h1 className="text-5xl my-8 text-center">This is Test components</h1>
      <div className="flex justify-center items-center ">
        <input
          className="my-3 mx-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          type="text"
          name="seach"
          id=""
          placeholder="Enter Yout Text"
        />
        <select
          onChange={handleStatus}
          id="status"
          className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Dead</option>
          <option>Alive</option>
          <option>Unknown</option>
        </select>
      </div>
      <div className="characters">
        {characterData?.map((character) => {
          return (
            <>
              <TestCart character={character}></TestCart>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
