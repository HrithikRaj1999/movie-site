import React from "react";
import { useMovie } from "../context/movieContext";

const Search = () => {
  const { query, setQuery } = useMovie();
  return (
    <div className="w-full p-5 bg-black flex justify-center">
      <div className="flex gap-3 flex-row p-2">
        <input
          placeholder="Search a movie"
          className="p-2 rounded-lg"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Search;
