/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ConicRow from "./ConicRow";

const Recomended = ({ recommendations, type, id }) => {
  return (
    <>
      <Link to={`/media/${type}/${id}`}>
        <div className="min-w-[124px] h-48 sm:h-56 sm:min-w-44  md:min-w-48 md:h-64 cursor-pointer relative shadow-md shadow-black rounded-md mt-2">
          <div className="absolute flex justify-center items-center bottom-[5%] right-[5%] ">
            <ConicRow
              percentage={`${Math.round(recommendations.vote_average * 10)}`}
            />
          </div>
          <div className="inset-0 absolute bg-black/30 opacity-50 hover:opacity-100  duration-300 rounded-md" />
          <img
            className="w-full h-full object-fill object-center rounded-md"
            src={
              recommendations.poster_path
                ? `https://image.tmdb.org/t/p/w500/${recommendations.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${recommendations.backdrop_path}`
            }
            alt={recommendations.title || recommendations.name}
          />
        </div>
        <div className="text-black  text-xs sm:text-sm font-Montserrat  pt-3 sm:pt-4 tracking-tight font-bold text-center ">
          {recommendations.name || recommendations.title} (
          {recommendations?.release_date?.slice(0, 4) ||
            recommendations?.first_air_date?.slice(0, 4)}
          )
        </div>
      </Link>
    </>
  );
};

export default Recomended;
