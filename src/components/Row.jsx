/* eslint-disable react/prop-types */
import { memo, useRef } from "react";
import useFetch from "../Hooks/UseFetch";
import Movies from "./Movies";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Row = ({ title, url, link }) => {
  const { data: movies, loading, error } = useFetch(url);
  const scrollRef = useRef();
  const scrollLeft = () => {
    scrollRef.current.scrollBy(-240, 0);
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy(240, 0);
  };
  console.log(`${title}:`, movies);

  return (
    <>
      {loading && (
        <div className="bg-white pt-4">
          <div className="w-[90%] mx-auto p-5">
            <div className="w-20 h-4 rounded-md bg-black/50 relative overflow-hidden mb-6">
              <div className="absolute shimmer inset-0 opacity-30  shadow-white bg-gradient-to-r from-black/50 via-white/70 to-black/50" />
            </div>
            <div className="flex gap-3 sm:gap-5 md:gap-6 w-full overflow-x-scroll scrollbar-hide">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className="min-w-32 h-32 sm:min-w-40 sm:h-40 rounded-md bg-black/50 relative overflow-hidden"
                >
                  <div className="absolute shimmer inset-0 opacity-30  shadow-white bg-gradient-to-r from-black/50 via-white/60 to-black/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {error && <h1>{error}</h1>}
      {movies && (
        <div className="bg-slate-50 pt-2 sm:pt-3 ">
          <div className=" w-[90%] mx-auto md:pt-4 pb-4 sm:pb-6">
            <h2 className="text-black font-semibold text-base sm:text-lg pb-2 sm:tracking-wider tracking-wide font-Montserrat">
              {title}
            </h2>
            <div className="flex relative group duration-200">
              <FaCircleChevronLeft
                onClick={scrollLeft}
                size={24}
                className="text-[#679267] z-10 cursor-pointer absolute -left-3 top-[30%] hover:scale-125 duration-100  rounded-full ring-2 ring-[#679267] ring-offset-1"
              />
              <div
                className="flex gap-4 w-full overflow-x-scroll scrollbar-hide scroll-smooth p-1"
                ref={scrollRef}
              >
                {movies.map((movie) => (
                  <Movies key={movie.id} movie={movie} />
                ))}
              </div>
              <FaCircleChevronRight
                onClick={scrollRight}
                size={24}
                className="text-[#679267] z-10 cursor-pointer absolute -right-3 top-[30%] hover:scale-125 duration-100  rounded-full ring-2 ring-[#679267] ring-offset-1"
              />
            </div>
            <div className="flex justify-center font-Montserrat p-2">
              <Link to={link}>
                <button className="text-white font-light text-xs sm:text-sm border-2 bg-black/60 hover:bg-black/80 duration-200 rounded-md py-1 px-2 md:px-3 tracking-tight hover:scale-95 sm:hover:scale-90 flex justify-center items-center gap-2 group">
                  <span>More</span>
                  <FaArrowRight className=" group-hover:animate-pulse" />
                </button>
              </Link>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-black/70 to-black/70 via-white" />
        </div>
      )}
    </>
  );
};

export default memo(Row);
