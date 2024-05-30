import { MovieGrid } from "@/components/grid/MovieGrid";
import { SparklesCore } from "@/components/ui/sparkles";
import { currentUser } from "@clerk/nextjs";
import React, { use } from "react";

async function GetMoviesByUserId(userId: any) {
  const urlProd = process.env.AWS_URL;
  const urlGet = `${urlProd}/api/get-movies-by-userId?userId=${userId}`;
  //const url = `http://localhost:3000/api/get-movies-by-userId?userId=${userId}`;
  const response = await fetch(urlGet, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

const YourMovies = async () => {
  const user = await currentUser();

  // if (user) {
  //   const data = await GetMoviesByUserId(user?.id);
  //   return (
  //     <div>
  //       <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
  //         <h1 className="md:text-3xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
  //           This is what you saw
  //         </h1>
  //         <div className="w-[40rem] h-40 relative">
  //           {/* Gradients */}
  //           <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
  //           <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
  //           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
  //           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

  //           {/* Core component */}
  //           <SparklesCore
  //             background="transparent"
  //             minSize={0.4}
  //             maxSize={1}
  //             particleDensity={1200}
  //             className="w-full h-full"
  //             particleColor="#FFFFFF"
  //           />

  //           {/* Radial Gradient to prevent sharp edges */}
  //           <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
  //         </div>
  //       </div>
  //       <br />
  //       <br />
  //       <div>
  //         <MovieGrid movieList={data.movies} />
  //       </div>
  //     </div>
  //   );
  // } else {
  if (user) {
    const data = await GetMoviesByUserId(user?.id);

    return (
      <div>
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-3xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            This is what you saw
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
        <br />
        <br />
        <div>
          <MovieGrid movieList={data.movies} />
        </div>
      </div>
    );
  }
};
//};
export default YourMovies;
