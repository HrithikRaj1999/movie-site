import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export interface MovieDescriptionCardType {
  Poster?: string;
  Title?: string;
  Year?: string;
  imdbRating?: string;
  Type?: string;
  Plot?: string;
}

// MovieDescriptionCard.tsx

interface MovieDescriptionCardProps {
  movieData: MovieDescriptionCardType | null;
}

const MovieDescriptionCard = ({ movieData }: MovieDescriptionCardProps) => {
  if (!movieData) {
    // Handle the case where movieData is null or undefined
    return <div>Loading...</div>;
  }

  // Access properties of movieData
  const { Poster, Title, Year, imdbRating, Type, Plot } = movieData;

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="flex flex-wrap justify-center items-center w-6/12  bg-neutral-100 gap-1 h-[35rem] hover:shadow-2xl">
        <CardHeader shadow={false} floated={true}>
          <img src={Poster} alt="card-image" />
        </CardHeader>
        <CardBody className="w-[20rem] rounded-xl">
          <Typography color="blue-gray" className="font-medium">
            Title - {Title}
          </Typography>
          <Typography>Year - {Year}</Typography>
          <Typography>IMDB Rating - {imdbRating}</Typography>
          <Typography>Type - {Type}</Typography>
          <Typography className="mt-3">Plot - {Plot}</Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieDescriptionCard;
