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
        <div>{loading && <div>Loading...</div>}</div>
        <div className="space-y-8">
          {data &&
            data.map((trending) => (
              <MenuMovies key={trending.id} movie={trending} />
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
