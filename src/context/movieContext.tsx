import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import useBackButton from "../hooks/useBackButton";

const API_URL = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_REACT_APP_API_KEY
}&s=`;
interface MovieProviderPropsType {
  children: ReactNode;
}

interface MovieContextType {
  movies: object[] | null;
  isLoading: boolean;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setMovies: React.Dispatch<React.SetStateAction<object[] | null>>;
}

const MovieContext = createContext({} as MovieContextType);

const MovieProvider = ({ children }: MovieProviderPropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useLocalStorage<object[] | null>("movie", null);
  const [query, setQuery] = useState<string>("titanic");
  console.log({ movies });
  const fetchMovies = async (API_URL: string) => {
    try {
      const { data } = await axios.get(API_URL);
      setMovies([...data.Search]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timerOut = setTimeout(() => {
      setIsLoading(true);
      fetchMovies(API_URL + query);
    }, 500);
    return () => clearTimeout(timerOut);
  }, [query]);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, isLoading, query, setQuery }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = () => useContext(MovieContext);

export { useMovie, MovieProvider };
