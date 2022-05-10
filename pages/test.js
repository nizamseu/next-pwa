import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import TestCart from "../Components/Test/testCart";
const Test = () => {
  const [page, setPage] = useState(7);
  const [characterData, setCharacterData] = useState([]);

  const fetchCharacters = async ({ queryKey }) => {
    console.log(queryKey);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  const result = useQuery(["charater", page], fetchCharacters);

  if (result.status === "loading")
    return <div className="text-center text-5xl">Loading...</div>;
  if (result.status === "error")
    return <div className="text-center text-5xl text-red-700">Error</div>;
  return (
    <div>
      <h1 className="text-5xl my-8 text-center">This is Test components</h1>

      <div className="characters">
        {result.data?.results?.map((character) => {
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
