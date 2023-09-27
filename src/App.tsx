import { Route, Routes } from "react-router-dom";

import MovieDescription from "./pages/MovieDescription";
import Error from "./pages/Error";
import { MovieProvider } from "./context/movieContext";
import Movies from "./pages/Movies";
import Search from "./pages/Search";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/movie/:id" element={<MovieDescription />} />
        <Route path="/" element={<Movies />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
