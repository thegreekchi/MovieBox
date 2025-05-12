import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Cast from "./Cast";
import { useRef } from "react";

/* eslint-disable react/prop-types */
const Casts = ({ data }) => {
  console.log("Cast:", data?.cast);
  const scrollRef = useRef();
  const scrollLeft = () => {
    scrollRef.current.scrollBy(-240, 0);
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy(240, 0);
  };
  return (
    <div className="w-[97%] sm:w-[90%] mx-auto md:mt-6 mt-4">
      {data?.cast && (
        <div>
          <p className="font-bold sm:text-lg text-base ">Top Cast</p>
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
              {data?.cast.map((cast) => (
                <Cast key={cast.id} cast={cast} />
              ))}
            </div>
            <FaCircleChevronRight
              onClick={scrollRight}
              size={24}
              className="text-[#679267] z-10 cursor-pointer absolute -right-3 top-[30%] hover:scale-125 duration-100  rounded-full ring-2 ring-[#679267] ring-offset-1"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Casts;
