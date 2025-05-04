/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cast = ({ cast }) => {
  return (
    <>
      <Link to="">
        <div className="min-w-28 h-28 sm:h-32 sm:min-w-32  md:min-w-40 md:h-40 cursor-pointer relative shadow-md shadow-black rounded-full mt-2">
          <div className="inset-0 absolute bg-black/30 opacity-50 hover:opacity-100  duration-300 rounded-full" />
          <img
            className="w-full h-full object-fill object-center rounded-full"
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
                : ""
            }
            alt={cast.name}
          />
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
