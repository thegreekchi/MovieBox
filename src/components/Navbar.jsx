import { CiMenuBurger } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="font-Montserrat bg-black p-4 flex justify-between items-center md:grid md:grid-cols-5 ">
      <div className="font-bold text-base md:text-lg md:col-span-2 leading-loose">
        <span className="text-red-700">MOVIE </span>
        <span className="text-blue-700">BOX</span>
      </div>
      <div className="flex justify-around items-center text-white md:col-span-2">
        <div className="text-sm md:text-base cursor-pointer hover:text-orange-600 duration-200 hidden md:block">
          Movies
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
          <VscAccount className="text-xl hover:text-orange-500 duration-200" />
          <p className="hidden lg:group-hover:block text-black/55 absolute text-xs bg-slate-50 p-1 rounded-sm top-6 right-0">
            Account
          </p>
        </div>
        <div className="md:hidden">
          <CiMenuBurger className="text-xl hover:text-orange-600 duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
