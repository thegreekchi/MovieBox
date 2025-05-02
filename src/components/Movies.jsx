/* eslint-disable react/prop-types */
import { memo } from "react";
import ConicRow from "./ConicRow";
import { Link } from "react-router-dom";

const Movies = ({ movie, type }) => {
  return (
    <div className="">
      <Link to={`/${type}/${movie.id}`}>
        <div className="min-w-32 h-36 sm:min-w-40 sm:h-44 md:min-w-40 md:h-48 cursor-pointer relative shadow-lg shadow-black rounded-md">
          <div className="absolute flex justify-center items-center bottom-[5%] right-[5%] ">
            <ConicRow percentage={`${Math.round(movie.vote_average * 10)}`} />
          </div>
          <div className="inset-0 absolute bg-black/20 opacity-0 hover:opacity-100  duration-300 rounded-md" />
          <img
            className="w-full h-full object-fill object-center rounded-md"
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
      </Link>
    </div>
  );
};

export default memo(Movies);
