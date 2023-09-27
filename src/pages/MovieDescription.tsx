import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import MovieDescriptionCard, {
  MovieDescriptionCardType,
} from "../utils/MovieDescriptionCard";
import axios from "axios";

const MovieDescription = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const [movieData, setMovieData] = useState<MovieDescriptionCardType | null>(
    {}
  );

  const IMDB_API_URL = `http://www.omdbapi.com/?i=${id}&apikey=${
    import.meta.env.VITE_REACT_APP_API_KEY
  }`;
  const getData = async (IMDB_API_URL: string) => {
    try {
      const { data } = await axios.get(IMDB_API_URL);
      setMovieData({ ...data });
    } catch (error) {}
  };
  useEffect(() => {
    getData(IMDB_API_URL);
  }, [id]);
  return <MovieDescriptionCard movieData={movieData} />;
};

export default MovieDescription;
