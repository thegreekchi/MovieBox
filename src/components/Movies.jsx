/* eslint-disable react/prop-types */
import { memo } from "react";

const Movies = ({ movie }) => {
  return (
    <div className="">
      <div className="min-w-32 h-32 sm:min-w-40 sm:h-40 md:min-w-44 md:h-44 cursor-pointer relative shadow-lg shadow-black rounded-md">
        <div className="inset-0 absolute bg-black/20 opacity-0 hover:opacity-100  duration-300 rounded-md" />
        <img
          className="w-full h-full object-cover object-center rounded-md"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
          }
          alt={movie.title}
        />
      </div>
      <div className="text-black line-clamp-2 text-xs sm:text-sm font-Montserrat max-w-[80%] pt-3 sm:pt-4 pl-2 tracking-tight font-semibold">
        {movie.title || movie.original_name}
      </div>
    </div>
  );
};

export default memo(Movies);
