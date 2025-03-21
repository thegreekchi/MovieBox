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
    <div className="bg-black">
      <div className=" w-[90%] mx-auto py-4 px-2">
        <h2 className="text-white font-bold text-base">{title}</h2>
        <div className="flex relative group duration-200">
          <FaCircleChevronLeft
            onClick={scrollLeft}
            size={24}
            className="text-gray-100 z-10 cursor-pointer absolute -left-3 top-[30%] hover:scale-110 duration-100 hidden group-hover:block"
          />
          <div
            className="flex gap-4 w-full overflow-x-scroll scrollbar-hide scroll-smooth"
            ref={scrollRef}
          >
            {movies &&
              movies.map((movie) => <Movies key={movie.id} movie={movie} />)}
          </div>
          <FaCircleChevronRight
            onClick={scrollRight}
            size={24}
            className="text-gray-100 z-10 cursor-pointer absolute -right-3 top-[30%] hover:scale-110 duration-100 hidden group-hover:block"
          />
        </div>
        <div>{loading && <h1>The page is loading </h1>}</div>
        <div>{error && <h1>{error}</h1>}</div>
      </div>
    </div>
  );
};

export default memo(Row);
