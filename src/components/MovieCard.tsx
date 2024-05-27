const MovieCard = ({ movie }: any) => {
  return (
    <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
      <div className="p-8 sm:p-10">
        <h3
          className="text-lg font-semibold leading-8 tracking-tight text-orange-600"
          id="tier-hobby"
        >
          Release date: {movie.release_date}
        </h3>
        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
          {movie.title}
        </div>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {movie.overview}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
          <ul role="list" className="space-y-6">
            <li className="flex items-start">
              <p className="text-sm leading-6 text-gray-600">
                Popularity: {movie.popularity}
              </p>
            </li>
            <li className="flex items-start">
              <p className="text-sm leading-6 text-gray-600">
                Average vote: {movie.vote_average}
              </p>
            </li>
            <li className="flex items-start">
              <p className="text-sm leading-6 text-gray-600">
                Original language: {movie.original_language}
              </p>
            </li>
            <li className="flex items-start">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "70%",
                  border: "8px solid black",
                }}
              />
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="/login"
              className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
              aria-describedby="tier-team"
            >
              Mark the movie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
