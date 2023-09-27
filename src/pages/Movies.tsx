import { useEffect } from "react";
import { useMovie } from "../context/movieContext";
import { MoviesCard, MoviesCardType } from "../utils/MoviesCard";
import Search from "./Search";
import { Spinner } from "@material-tailwind/react";

const Movies = () => {
  const { movies, isLoading, setQuery } = useMovie();
  useEffect(() => {
    setQuery("titanic");
  }, []);
  return (
    <>
      <Search />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap justify-center  bg-neutral-100 items-center">
          {movies?.map((curMovie: MoviesCardType) => {
            console.log({ curMovie });
            return <MoviesCard key={curMovie.imdbID} curMovie={curMovie} />;
          })}
        </div>
      )}
    </>
  );
};

export default Movies;
