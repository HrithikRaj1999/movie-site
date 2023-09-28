
import { useMovie } from "../context/movieContext";

const Search = () => {
  const { setQuery } = useMovie();
  return (
    <div className="w-full p-5  flex justify-center">
      <div className="flex gap-3 flex-row p-2">
        <input
          placeholder="Search a movie"
          className="p-2 w-[25rem] border-4 rounded-2xl hover:bg-zinc-100  "
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Search;
