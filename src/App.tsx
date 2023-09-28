import { Route, Routes } from "react-router-dom";

import MovieDescription from "./pages/MovieDescription";
import Error from "./pages/Error";
import { MovieProvider } from "./context/movieContext";
import Movies from "./pages/Movies";
import SpinnerLoading from "./utils/Spinner";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/movie/:id" element={<MovieDescription />} />
        <Route path="/" element={<Movies />} />
        <Route path="*" element={<Error />} />
        <Route path="/hello" element={<SpinnerLoading />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
