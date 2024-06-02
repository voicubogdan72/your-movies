import { MovieGrid } from "@/components/grid/MovieGrid";
import { SparklesCore } from "@/components/ui/sparkles";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";

import React, { use } from "react";

async function GetMoviesByUserId(userId: string) {
  try {
    const movieListByUser = await prisma.watchedMovies.findMany({
      where: {
        userId,
      },
    });
    const formattedMovies = movieListByUser.map((movie) => ({
      ...movie,
      daySaw: movie.daySaw ? movie.daySaw.toISOString() : null,
      createdAt: movie.createdAt.toISOString(),
      updatedAt: movie.updatedAt.toISOString(),
    }));
    return {
      message: "List of movie you saw",
      movies: formattedMovies,
    };
  } catch (error) {
    return {
      message: "Internal Server Error",
      status: 500,
    };
  }
}

const YourMovies = async () => {
  const user = await currentUser();
  if (!user) {
    return <NoMoviesMessage />;
  }
  const data = await GetMoviesByUserId(user.id);

  if (!data || !data.movies || data.movies.length === 0) {
    return <NoMoviesMessage />;
  }

  return (
    <div>
      <HeaderMessage text="This is what you saw" />
      <br />
      <br />
      <div>
        <MovieGrid movieList={data.movies} />
      </div>
    </div>
  );
};

const NoMoviesMessage = () => (
  <div>
    <HeaderMessage text="OOPS no movie watched!" />
  </div>
);

const HeaderMessage = ({ text }: any) => (
  <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="md:text-3xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
      {text}
    </h1>
    <div className="w-[40rem] h-40 relative">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  </div>
);

export default YourMovies;
