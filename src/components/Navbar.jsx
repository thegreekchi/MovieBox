import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import { BsCameraReelsFill } from "react-icons/bs";
// import { CiMenuBurger } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdLiveTv, MdLocalMovies } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { AuthContext } from "../Context";
import { PiSignOutBold } from "react-icons/pi";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const [subMenu, setSubMenu] = useState({
    subMenu1: false,
    subMenu2: false,
  });
  console.log(subMenu);
  const initialQuery = new URLSearchParams(location.search).get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const provider = new GoogleAuthProvider();

  const { isAuth } = useContext(AuthContext);
  console.log("isAuth", isAuth);

  const signIn = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      toast.success("You're signed in");
      console.log("second", user.user.displayName.split(" ")[0]);
    } catch (error) {
      toast.error("Login failed");
      console.log(error.message, error);
    }
  };

  const logOut = () =>
    signOut(auth).then(() => toast.success("You're signed out"));

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

  useEffect(() => {
    setNav(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    setQuery(initialQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="font-Montserrat">
      <div className=" bg-black backdrop-blur-md p-2 py-[10px] sm:p-3 flex justify-between items-center md:grid md:grid-cols-5  z-30  border-[#D2AC47] fixed top-0 w-full">
        <div className="font-bold text-lg tracking-tighter md:tracking-wide scale-y-110 sm:text-xl md:text-2xl md:col-span-1 leading-loose cursor-pointer border-1">
          <Link to="/">
            <div className="flex items-center">
              <img
                src="/filmBoxbg2.png"
                alt=""
                className=" md:h-[55px] h-[42px] sm:h-[50px] object-contain pl-3 sm:pl-5"
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-around items-center text-white md:col-span-3">
          <div>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="search"
                name=""
                id=""
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="hidden md:block bg-[#1E1E1E] border border-[#D2AC47] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#D2AC47] text-white sm:p-3 md:p-4 p-2 max-h-5 placeholder-gray-400 w-[175px] mt-1 sm:w-52 md:w-64 mx-auto"
              />
            </form>
          </div>
        </div>

        <div className="text-white flex justify-between items-center md:pr-8 pr-6">
          <Link to="chat">
            <div className="relative pr-12">
              <img
                src="/Gpt11.png"
                title="AI Chat"
                alt=""
                className="w-auto h-[22px] sm:h-[26px] cursor-pointer"
              />
            </div>
          </Link>
          <RiMenuFill
            className=" text-xl sm:text-2xl cursor-pointer text-[#D2AC47]"
            onClick={toggleNav}
          />
        </div>
      </div>
      {nav ? (
        <div
          className="bg-black/80 fixed inset-0 w-full h-screen  duration-1000 transition-all backdrop-blur-sm z-40"
          onClick={toggleNav}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed w-[70%] sm:w-[40%] md:w-[30%] h-screen top-0 right-0 bg-white  duration-500 transition-all overflow-y-scroll z-50"
            : "fixed w-[40%] h-screen top-0 right-[-100%] bg-white z-50  duration-500 transition-all"
        }
      >
        <div className="w-full p-4 pl-6 bg-gradient-to-r from-black via-black/90 to-blue-900 relative text-[#f0c243] border-b-2 border-orange-500 flex justify-between items-center">
          <img
            src="/filmBoxbg2.png"
            alt=""
            className="border-1 border-white
          md:h-[39px] h-[29px] sm:h-[34px] object-contain"
          />

          <AiOutlineClose
            onClick={toggleNav}
            className="text-xl sm:text-2xl cursor-pointer duration-200"
          />
        </div>
        {isAuth ? (
          <motion.div
            className=" font-semibold text-black tracking-tighter text-sm w-[60%] p-2 mt-2 md:mt-4 pl-6"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello, {isAuth?.displayName.split(" ")[0]}{" "}
          </motion.div>
        ) : (
          <div className="md:h-12 h-8"></div>
        )}
        <div className="w-[78%] sm:w-[80%] mx-4 bg-black/40 rounded-md mt-4">
          <form action="" className="" onSubmit={handleSubmit}>
            <input
              type="search"
              name=""
              id=""
              aria-label="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full text-white italic placeholder-gray-400 p-2 text-sm focus:rounded-md bg-gray-600 border border-[#D2AC47] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2AC47] "
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
                to="bookmarks"
                className="flex items-center
              hover:bg-gray-300
              duration-100 p-1"
              >
                <FaBookmark className="mr-2 text-sm ml-2 text-gray-600" />
                Watchlist
              </NavLink>
            </li>
            <li>
              <NavLink
                to="chat"
                className="flex items-center
              hover:bg-gray-300
              duration-100 p-1"
              >
                <img src="chatgpt3.png" alt="" className="h-[20px] mx-2" />
                AI Chat
              </NavLink>
            </li>
            <li className="mb-4">
              {!isAuth ? (
                <button
                  onClick={signIn}
                  className="flex items-center justify-center bg-gray-800  hover:shadow-md shadow-black duration-200 p-2 w-[78%] sm:w-[85%] text-[#D2AC47] hover:text-white/70 rounded-sm text-sm ml-2 focus:outline-none focus:ring-1 focus:ring-[#D2AC47] focus:rounded-sm focus:ring-offset-1 mb-1 mt-2 border border-[#D2AC47]"
                >
                  <FcGoogle className="mr-2 text-lg " />
                  Sign in with Google
                </button>
              ) : (
                <button
                  onClick={logOut}
                  className="flex items-center justify-center bg-gray-800  hover:shadow-md shadow-black duration-200 p-2 w-[78%] sm:w-[85%]  text-[#D2AC47] hover:text-white/70 rounded-sm text-sm ml-2 focus:outline-none focus:ring-1 focus:ring-[#D2AC47] focus:rounded-sm focus:ring-offset-1 mb-1 mt-2 "
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
