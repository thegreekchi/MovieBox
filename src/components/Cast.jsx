/* eslint-disable react/prop-types */

import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";

const Cast = ({ cast }) => {
  return (
    <>
      <Link to="">
        <div className="min-w-24 h-32 sm:h-36 sm:min-w-28  md:min-w-32 md:h-44 cursor-pointer relative shadow-md shadow-black rounded-md mt-2">
          <div className="inset-0 absolute bg-black/30 opacity-50 hover:opacity-100  duration-300 rounded-md" />
          {cast.profile_path ? (
            <img
              className="w-full h-full object-fill object-center rounded-md"
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
                  : ""
              }
              alt={cast.name}
            />
          ) : (
            <MdAccountBox className="w-full h-full" />
          )}
        </div>
        <div className="text-black  text-xs sm:text-xs font-Montserrat  pt-3 sm:pt-4 tracking-tight font-bold text-center line-clamp-1">
          {cast.name}
        </div>
        <div className="text-black line-clamp-2 text-xs  font-Montserrat pt-2 tracking-tight font-normal text-center">
          {cast.character}
        </div>
      </Link>
    </>
  );
};

export default Cast;
