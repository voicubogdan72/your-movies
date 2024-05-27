import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ result }: any) => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 my-12">
      <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {result.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
