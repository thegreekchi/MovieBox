/* eslint-disable react/prop-types */
import { memo, useRef } from "react";
import useFetch from "../Hooks/UseFetch";
import Movies from "./Movies";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Row = ({ title, url }) => {
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
            <div className="w-20 h-4 rounded-sm bg-black/80 relative overflow-hidden mb-6">
              <div className="absolute shimmer inset-0 opacity-30  shadow-white bg-gradient-to-r from-black via-white/70 to-black" />
            </div>
            <div className="flex gap-3 sm:gap-5 md:gap-6 w-full overflow-x-scroll scrollbar-hide">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className="min-w-32 h-32 sm:min-w-40 sm:h-40 rounded-md bg-black relative overflow-hidden"
                >
                  <div className="absolute shimmer inset-0 opacity-30  shadow-white bg-gradient-to-r from-black via-white/70 to-black" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {error && <h1>{error}</h1>}
      {movies && (
        <div className="bg-gradient-to-r via-[#000a23] from-black to-black pt-4">
          <div className=" w-[90%] mx-auto ">
            <h2 className="text-white font-bold text-base pb-2">{title}</h2>
            <div className="flex relative group duration-200">
              <FaCircleChevronLeft
                onClick={scrollLeft}
                size={24}
                className="text-[#6A7966] z-10 cursor-pointer absolute -left-3 top-[30%] hover:scale-110 duration-100 hidden group-hover:block rounded-full ring-2 ring-[#6C7C59] ring-offset-2 hover:ring-[#679267] hover:text-[#679267]"
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
                className="text-[#6A7966] z-10 cursor-pointer absolute -right-3 top-[30%] hover:scale-110 duration-100 hidden group-hover:block rounded-full ring-2 ring-[#6C7C59] ring-offset-2 hover:ring-[#679267] hover:text-[#679267]"
              />
            </div>
            <div className="text-center font-Montserrat p-2">
              <button className="text-white text-sm sm:text-base border-2 bg-[#679267] hover:bg-[#6ea96e] duration-150 rounded-md px-2 hover:scale-95">
                Load More
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Row);
