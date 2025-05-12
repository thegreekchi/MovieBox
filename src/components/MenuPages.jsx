/* eslint-disable react/prop-types */
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import MenuMovies from "./MenuMovies";

const MenuPages = ({
  Title,
  loading,
  prevPage,
  nextPage,
  currentPage,
  data,
  type,
}) => {
  return (
    <div className="p-8 md:w-[95%] w-[100%] mx-auto font-Montserrat">
      <div className="flex justify-between items-center">
        <div className=" font-semibold sm:font-bold tracking-tight text-base sm:text-xl">
          {Title}
        </div>
        <div>
          {/* <select
            onChange={setGenId}
            name=""
            id=""
            className="text-xs sm:text-sm md:text-base bg-slate-300 p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-offset-1 cursor-pointer"
          >
            <option value="">All Genres</option>
            {genre?.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select> */}
        </div>
      </div>
      <div className="pt-8">
        <div className="space-y-8">
          {loading &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <div key={num}>
                <div className="rounded-md shadow-md shadow-black/20 h-32 sm:h-44 bg-black/70 relative overflow-hidden">
                  <div className="absolute shimmer inset-0 opacity-30 shadow-white bg-gradient-to-r from-black/70 via-white/70 to-black/70" />
                </div>
              </div>
            ))}
        </div>
        <div className="space-y-8">
          {data &&
            data.map((trending) => (
              <MenuMovies key={trending.id} movie={trending} type={type} />
            ))}
        </div>
        <div className="flex w-[60%] mx-auto justify-between mt-16 mb-8">
          <FaCircleChevronLeft
            onClick={prevPage}
            size={24}
            className="text-[#679267] z-10 cursor-pointer hover:scale-125 duration-100  rounded-full ring-2 ring-[#679267] ring-offset-1"
          />
          <span className="font-bold"> {currentPage}</span>
          <FaCircleChevronRight
            onClick={nextPage}
            size={24}
            className="text-[#679267] z-10 cursor-pointer hover:scale-125 duration-100  rounded-full ring-2 ring-[#679267] ring-offset-1"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPages;
