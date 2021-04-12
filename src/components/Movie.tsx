import React from "react";
import placeholder from "../assets/default.jpg";

interface movieObj {
  movie: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
}

const DEFAULT_PLACEHOLDER_IMAGE:string = placeholder;

const Movie: React.FC<movieObj> = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <h2>{movie.Title}</h2>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
