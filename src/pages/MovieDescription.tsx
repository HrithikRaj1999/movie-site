import React, { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { MovieCard, MovieDescriptionCard } from "../utils/MovieDescriptionCard";
import { useMovie } from "../context/movieContext";
import axios from "axios";

const MovieDescription = () => {
  const { movies, setMovies } = useMovie();
  const { id }: Readonly<Params<string>> = useParams();
  console.log(id);
  const IMDB_API_URL = `http://www.omdbapi.com/?i=${id}&apikey=${
    import.meta.env.VITE_REACT_APP_API_KEY
  }`;
  console.log(IMDB_API_URL);
  const getData = async (IMDB_API_URL: string) => {
    try {
      const { data } = await axios.get(IMDB_API_URL);
      console.log(data);
      setMovies([{ ...data }]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(IMDB_API_URL);
  }, [id]);
  return <MovieDescriptionCard />;
};

export default MovieDescription;
