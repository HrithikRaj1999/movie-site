import { useMovie } from "../context/movieContext";
import useBackButton from "../hooks/useBackButton";
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
          {movies?.map((curMovie: MoviesCardType) => {
            const { Title, imdbID, Poster } = curMovie;
            return (
              <MoviesCard
                key={curMovie.imdbID}
                Title={Title}
                imdbID={imdbID}
                Poster={Poster}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Movies;
