import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdLiveTv, MdLocalMovies } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink, useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { AuthContext } from "../Context";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [subMenu, setSubMenu] = useState({
    subMenu1: false,
    subMenu2: false,
  });
  console.log(subMenu);

  const provider = new GoogleAuthProvider();

  const { isAuth } = useContext(AuthContext);
  console.log("isAuth", isAuth);

  const signIn = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      console.log("second", user.user.displayName.split(" ")[0]);
    } catch (error) {
      console.log(error.message, error);
    }
  };

  const logOut = () => signOut(auth);

  const toggleNav = () => {
    setNav(!nav);
    setSubMenu({
      subMenu1: false,
      subMenu2: false,
    });
  };
  const toggleSubMenu = (submenu) => {
    setSubMenu((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [nav]);

  const location = useLocation();
  useEffect(() => {
    setNav(false);
  }, [location.pathname]);

  return (
    <div className="font-Montserrat">
      <div className=" bg-black backdrop-blur-md p-3 py-2 sm:p-4 flex justify-between items-center md:grid md:grid-cols-5 relative z-10 border-b-2 border-orange-500">
        <div className="font-bold text-lg tracking-tighter md:tracking-wide scale-y-110 sm:text-xl md:text-2xl md:col-span-1 leading-loose cursor-pointer border-1">
          <Link to="/">
            <div className="flex items-center">
              <span className="">
                <BsCameraReelsFill className="text-red-700 text-lg sm:text-xl" />
              </span>
              <span className="text-red-700 pt-1">film</span>
              <span className="text-blue-700 pt-1">BOX</span>
            </div>
          </Link>
        </div>
        <div className="flex justify-around items-center text-white md:col-span-3">
          <div>
            <form action="">
              <input
                type="search"
                name=""
                id=""
                placeholder="search"
                className=" bg-white/80 rounded-md text-sm focus:outline-none text-black sm:p-3 md:p-4 p-2 max-h-5 placeholder-black/80 w-[175px] mt-1 sm:w-52 md:w-64 mx-auto"
              />
            </form>
          </div>
        </div>

        <div className="text-white flex justify-between items-center pr-4">
          <div className="relative group hidden md:block">
            <VscAccount className="text-xl hover:text-orange-500 duration-200 cursor-pointer" />
            <p className="hidden lg:group-hover:block text-black/55 absolute text-[10px] bg-slate-50 p-1 rounded-sm top-5 right-0 z-100">
              Account
            </p>
          </div>
          <CiMenuBurger
            className=" text-lg sm:text-xl cursor-pointer"
            onClick={toggleNav}
          />
        </div>
      </div>
      {nav ? (
        <div
          className="bg-black/80 fixed inset-0 w-full h-screen z-20 duration-200 transition-all backdrop-blur-sm"
          onClick={toggleNav}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed w-[70%] sm:w-[40%] md:w-[30%] h-screen top-0 right-0 bg-white z-20 duration-200 transition-all overflow-y-scroll"
            : "fixed w-[40%] h-screen top-0 right-[-100%] bg-white z-20 p-2 duration-500 transition-all"
        }
      >
        <div className="w-full p-6 pl-4 bg-gradient-to-r from-blue-800 to-black relative text-white border-b-4 border-red-500">
          {isAuth && (
            <div className=" italic font-semibold text-white/80 tracking-tighter text-sm w-[60%]">
              Hello, {isAuth?.displayName.split(" ")[0]}{" "}
            </div>
          )}
          <AiOutlineClose
            onClick={toggleNav}
            className={`text-lg sm:text-xl cursor-pointer duration-200 absolute ${
              !isAuth ? "top-4" : "top-6"
            }  right-4`}
          />
        </div>

        <div className="w-[78%] sm:w-[80%] mx-4 bg-black/40 rounded-sm mt-5">
          <form action="">
            <input
              type="search"
              name=""
              id=""
              aria-label="search movie"
              placeholder="search..."
              className="w-full bg-transparent text-white italic placeholder-white px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:rounded-sm"
            />
          </form>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4 pl-2 mt-4 font-semibold overflow-y-auto">
            <li className="" onClick={() => toggleSubMenu("subMenu1")}>
              <div className="flex items-center hover:bg-gray-300 duration-100 p-1 cursor-pointer">
                <MdLocalMovies className="mr-2 text-sm ml-2 text-gray-600" />{" "}
                Movies
                <span className="font-thin ml-1 sm:ml-2">
                  {subMenu.subMenu1 ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              <ul
                className={`transition-all duration-200 ease-in-out overflow-hidden font-light ml-10 ${
                  subMenu.subMenu1 ? "max-h-32" : "max-h-0"
                }`}
              >
                <Link to="trendingMovies">
                  <li className="hover:bg-gray-300 duration-100 p-1 hover:translate-x-3 font-normal">
                    Trending
                  </li>
                </Link>
                <Link to="upcomingMovies">
                  <li className="hover:bg-gray-300 duration-100 p-1 hover:translate-x-3 font-normal">
                    Upcoming
                  </li>
                </Link>
                <Link to="popularMovies">
                  <li className="hover:bg-gray-300 duration-100 p-1 hover:translate-x-3 font-normal">
                    Popular
                  </li>
                </Link>
                <Link to="topRatedMovies">
                  <li className="hover:bg-gray-300 duration-100 p-1 hover:translate-x-3 font-normal">
                    Top Rated
                  </li>
                </Link>
              </ul>
            </li>
            <li onClick={() => toggleSubMenu("subMenu2")}>
              <div className="flex items-center hover:bg-gray-300 duration-100 p-1 cursor-pointer">
                <MdLiveTv className="mr-2 text-sm ml-2 text-gray-600" />
                Tv Shows
                <span className="font-thin ml-1 sm:ml-2">
                  {subMenu.subMenu2 ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              <ul
                className={`transition-all duration-200 ease-in-out overflow-hidden font-light ml-10 ${
                  subMenu.subMenu2 ? "max-h-24" : "max-h-0"
                }`}
              >
                <Link to="tvAiring">
                  <li className="hover:bg-gray-300 duration-100 p-1 hover:translate-x-3 font-normal">
                    Currently Airing
                  </li>
                </Link>
                <Link to="tvPopular">
                  <li className="hover:bg-gray-300 duration-100 p-1 hover:translate-x-3 font-normal">
                    Popular
                  </li>
                </Link>
                <Link to="tvTopRated">
                  <li className="hover:bg-gray-300 duration-100 p-1 hover:translate-x-3 font-normal">
                    Top Rated
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <NavLink
                to=""
                className="flex items-center
              hover:bg-gray-300
              duration-100 p-1"
              >
                <FaBookmark className="mr-2 text-sm ml-2 text-gray-600" />
                Watchlist
              </NavLink>
            </li>
            <li className="mb-4">
              {!isAuth ? (
                <button
                  onClick={signIn}
                  className="flex items-center justify-center bg-gray-800  hover:shadow-md shadow-black duration-200 p-2 w-[78%] sm:w-[85%] text-white/70 hover:text-white rounded-sm text-sm ml-2 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:rounded-sm focus:ring-offset-1 mb-1 mt-2"
                >
                  <FcGoogle className="mr-2 text-lg " />
                  Sign in with Google
                </button>
              ) : (
                <button
                  onClick={logOut}
                  className="flex items-center justify-center bg-gray-800  hover:shadow-md shadow-black duration-200 p-2 w-[78%] sm:w-[85%] text-white/70 hover:text-white rounded-sm text-sm ml-2 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:rounded-sm focus:ring-offset-1 mb-1 mt-2"
                >
                  <PiSignOutBold className="mr-2 text-lg" />
                  Sign Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
