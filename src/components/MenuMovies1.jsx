/* eslint-disable react/prop-types */

import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context";
import { useContext } from "react";

const MenuMovies1 = ({ movie, type }) => {
  const { removeBookmark } = useContext(AuthContext);
  return (
    <div className="relative">
      <div
        className="absolute right-6 sm:right-8 bottom-3 sm:bottom-5 md:text-lg text-base p-1 text-red-600 cursor-pointer"
        onClick={() => removeBookmark(movie)}
      >
        <FaTrash className="" />
      </div>
      <Link to={`/media/${type}/${movie.id}`}>
        <div className="rounded-sm shadow-md shadow-black/20 flex hover:shadow-lg hover:shadow-black/40 duration-300 cursor-pointer mb-8">
          <div>
            <img
              className="min-w-28 h-[137px] sm:min-w-36 sm:h-44 object-fill object-center rounded-sm"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              }
              alt={movie.title}
            />
          </div>
          <div className="p-4">
            <div className="font-semibold text-sm sm:text-base line-clamp-2">
              {movie.title || movie.name}
            </div>
            <div className="text-xs sm:text-sm line-clamp-3 mt-2 sm:mt-3">
              {movie.overview}
            </div>

            {/* <div className="flex justify-end mt-3 mr-3 md:text-lg text-sm sm:text-base">
              <FaTrash
                className="text-red-600"
                onClick={() => removeBookmark(movie)}
              />
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuMovies1;
