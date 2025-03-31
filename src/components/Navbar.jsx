import { CiMenuBurger } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-Montserrat bg-black backdrop-blur-md p-2 sm:p-4 flex justify-between items-center md:grid md:grid-cols-5 relative z-10">
      <div className="font-bold text-base md:text-lg md:col-span-1 leading-loose cursor-pointer">
        <Link to="/">
          <span className="text-red-700">MOVIE </span>
          <span className="text-blue-700">BOX</span>
        </Link>
      </div>
      <div className="flex justify-around items-center text-white md:col-span-3">
        <div className="text-sm md:text-base cursor-pointer hover:text-orange-600 duration-200 hidden md:block group">
          Movies
          <div className="group-hover:block hidden text-sm text-white bg-gradient-to-r from-blue-950 to-black fixed rounded-md">
            <ul>
              <li className="px-3 py-1 hover:bg-gradient-to-r from-blue-800 to-black rounded-sm">
                Popular Movies
              </li>
              <li className="px-3 py-1 hover:bg-gradient-to-r from-blue-800 to-black rounded-sm">
                Top Rated
              </li>
              <li className="px-3 py-1 hover:bg-gradient-to-r from-blue-800 to-black rounded-sm">
                Upcoming Movies
              </li>
              <li className="px-3 py-1 hover:bg-gradient-to-r from-blue-800 to-black rounded-sm">
                Now Playing
              </li>
            </ul>
          </div>
        </div>
        <div className="text-sm md:text-base cursor-pointer hover:text-orange-600 duration-200 hidden md:block group">
          TV Shows
          <div className="group-hover:block hidden text-sm text-white bg-gradient-to-r from-blue-950 to-black fixed rounded-md">
            <ul>
              <li className="px-3 py-1 hover:bg-gradient-to-r from-blue-800 to-black rounded-sm">
                Popular TV Shows
              </li>
              <li className="px-3 py-1 hover:bg-gradient-to-r from-blue-800 to-black rounded-sm">
                Top Rated TV Shows
              </li>
              <li className="px-3 py-1 hover:bg-gradient-to-r from-blue-800 to-black rounded-sm">
                Currently Airing
              </li>
            </ul>
          </div>
        </div>
        <div>
          <input
            type="search"
            name=""
            id=""
            placeholder="search"
            className=" bg-white/80 rounded-xl text-xs focus:outline-none text-black p-2 max-h-5 placeholder-black/80 w-32 md:w-36"
          />
        </div>
      </div>
      <div className="text-white flex justify-end items-center pr-4">
        <div className="relative group hidden md:block">
          <VscAccount className="text-xl hover:text-orange-500 duration-200 cursor-pointer" />
          <p className="hidden lg:group-hover:block text-black/55 absolute text-[10px] bg-slate-50 p-1 rounded-sm top-5 right-0 z-100">
            Account
          </p>
        </div>
        <div className="md:hidden">
          <CiMenuBurger className=" text-base sm:text-xl hover:text-orange-600 duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
