import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useMovie } from "../context/movieContext";

interface MovieDescriptionCardType {
  Poster?: string;
  Title?: string;
  Year?: string;
  imdbRating?: string;
  Type?: string;
  Plot?: string;
}
export const MovieDescriptionCard = () => {
  const { movies, isLoading } = useMovie();
  console.log(movies);
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    movies?.map((movie: MovieDescriptionCardType) => (
      <div className="flex justify-center items-center h-screen">
        <Card className="flex flex-wrap justify-center items-center w-6/12  bg-neutral-100 gap-1 h-[35rem] hover:shadow-2xl">
          <CardHeader shadow={false} floated={true}>
            <img src={movie.Poster} alt="card-image" />
          </CardHeader>
          <CardBody className="w-[20rem] rounded-xl">
            <Typography color="blue-gray" className="font-medium">
              Title - {movie.Title}
            </Typography>
            <Typography>Year - {movie.Year}</Typography>
            <Typography>IMDB Rating - {movie.imdbRating}</Typography>
            <Typography>Type - {movie.Type}</Typography>
            <Typography className="mt-3">Plot - {movie.Plot}</Typography>
          </CardBody>
        </Card>
      </div>
    ))
  );
};

{
  /* <div className="flex justify-center items-center gap-3 h-screen">
<div className="flex justify-center items-center border-solid border-4 border-black  bg-slate-400 w-4/12 h-[35rem]">
  Hello
</div>
<div className="flex flex-col justify-center items-center  border-solid border-4 border-black  bg-slate-400 w-4/12 h-[35rem]">
  <span>Hello</span>
  <span>My</span>
  <span>My</span>
  <span>My</span>
</div>
</div> */
}
