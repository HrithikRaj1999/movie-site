import { useMovie } from "../context/movieContext";
import { MoviesCard, MoviesCardType } from "../utils/MoviesCard";
import Search from "./Search";

const Movies = () => {
  const { movies, isLoading } = useMovie();
  console.log(movies);
  return (
    <>
      <Search />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap justify-center  bg-neutral-100 items-center">
          {movies?.map((curMovie) => (
            <MoviesCard
              key={curMovie.imdbID}
              Title={curMovie.Title}
              imdbID={curMovie.imdbID}
              Poster={curMovie.Poster}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
