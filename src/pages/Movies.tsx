import { useEffect } from "react";
import { useMovie } from "../context/movieContext";
import useBackButton from "../hooks/useBackButton";
import { MoviesCard, MoviesCardType } from "../utils/MoviesCard";
import Search from "./Search";

const Movies = () => {
  const { movies, isLoading, setQuery } = useMovie();
  useEffect(() => {
    setQuery("titanic");
  }, []);
  return (
    <>
      <Search />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap justify-center  bg-neutral-100 items-center">
          {movies?.map((curMovie: MoviesCardType) => {
            return <MoviesCard key={curMovie.imdbID} curMovie={curMovie} />;
          })}
        </div>
      )}
    </>
  );
};

export default Movies;
