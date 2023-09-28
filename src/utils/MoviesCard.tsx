import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export interface MoviesCardType {
  Title?: string;
  Poster?: string;
  imdbID?: string;
}
export interface MoviesCardProp {
  curMovie: MoviesCardType;
}

export function MoviesCard({ curMovie }: MoviesCardProp) {
  const { imdbID, Poster, Title } = curMovie;

  return (
    <Link to={`/movie/${imdbID}`}>
      <Card className="flex flex-wrap bg-gray-400  m-4 p-3 w-50 h-[27rem] hover:shadow-2xl hover:bg-neutral-500">
        <CardHeader shadow={false} floated={false}>
          <img className="m-2 h-[20rem]" src={Poster} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography
            color="blue-gray"
            className="font-medium mb-2 flex items-center justify-center"
          >
            {Title?.split(" ").slice(0, 5).join(" ")}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}
