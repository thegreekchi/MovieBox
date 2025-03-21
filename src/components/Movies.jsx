/* eslint-disable react/prop-types */
import { memo } from "react";

const Movies = ({ movie }) => {
  return (
    <div className="">
      <div className="min-w-32 h-32 sm:min-w-40 sm:h-40 cursor-pointer relative">
        <div className="inset-0 absolute bg-black/60 opacity-0 hover:opacity-100 backdrop-blur-[1px] duration-300" />
        <img
          className="w-full h-full object-cover object-center rounded-sm"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      {/* <img
        className="min-w-32 h-32 sm:min-w-40 sm:h-40 object-cover object-center rounded-sm"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      /> */}
      <div className="text-white line-clamp-2 text-xs sm:text-sm font-Montserrat max-w-[80%] pt-1 pl-2 tracking-tight">
        {movie.title}
      </div>
    </div>
  );
};

export default memo(Movies);
