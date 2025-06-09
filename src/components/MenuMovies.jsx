/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { AuthContext } from "../Context";
import { useContext } from "react";
import { FaBookmark } from "react-icons/fa";

const MenuMovies = ({ movie, type }) => {
  const { isBookmarked, toggleBookmarks, isAuth } = useContext(AuthContext);
  return (
    <div className="relative">
      <div
        className={`${
          isAuth && isBookmarked(movie) ? "text-[#ffca37]" : "text-gray-700"
        } absolute  duration-200 right-6 sm:right-8 bottom-3 sm:bottom-5 md:text-lg text-base cursor-pointer p-1`}
        onClick={() => toggleBookmarks(movie, type)}
      >
        <FaBookmark />
      </div>
      <Link to={`/media/${type}/${movie.id}`}>
        <div className="rounded-sm shadow-md shadow-black/20 flex hover:shadow-lg hover:shadow-black/40 duration-300 cursor-pointer mb-8">
          <div>
            {movie.poster_path ? (
              <img
                className="min-w-28 h-[137px] sm:min-w-36 sm:h-44 object-fill object-center rounded-sm"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                }
                alt={movie.title}
              />
            ) : (
              <img
                className="min-w-28 h-[137px] sm:min-w-36 sm:h-44 object-cover object-center rounded-sm"
                src="/notfound.png"
                alt={movie.title}
              />
            )}
          </div>
          <div className="p-4">
            <div className="font-semibold text-sm sm:text-base line-clamp-2">
              {movie.title || movie.name}
            </div>
            <div className="text-xs sm:text-sm line-clamp-3 mt-2 sm:mt-3">
              {movie.overview}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuMovies;
