import { MdOutlineSmartDisplay } from "react-icons/md";
import useFetch from "../Hooks/UseFetch";
import Conic from "./Conic";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { data: movies, loading, error } = useFetch("movie/now_playing");
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * 19)
  );

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [movies]);

  const movie = movies?.[currentIndex];

  return (
    <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden bg-black/95">
      {loading && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="h-[320px] sm:h-[450px] bg-black/70 relative overflow-hidden">
            <div className="absolute shimmer inset-0 opacity-30 shadow-white bg-gradient-to-r from-black/70 via-white/70 to-black/70" />
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-red-600 font-bold">
          {error}
        </div>
      )}

      <AnimatePresence mode="wait">
        {movie && (
          <motion.div
            key={movie.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Background Image */}
            <motion.img
              className="absolute inset-0 w-full h-full object-cover"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              }
              alt={movie.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />

            {/* Gradient Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />

            {/* Text Content */}
            <motion.div
              className="absolute font-Montserrat text-white top-[26%] md:top-[25%] px-[35px] sm:px-[45px] py-3 sm:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <h1 className="font-bold text-[17px] sm:text-xl md:text-3xl max-w-[80%] pb-1 line-clamp-2">
                {movie.title}
              </h1>
              <h3 className=" text-base sm:text-lg md:xl line-clamp-3 md:line-clamp-4 max-w-[70%] pt-1 sm:pt-2">
                {movie.overview}
              </h3>
              <h3 className="font-semibold text-base sm:text-lg pt-2 ">
                Release date: {movie.release_date}
              </h3>
              <Link to={`/media/movie/${movie.id}`}>
                <button className="bg-red-600 hover:bg-red-800 duration-300 text-xs sm:text-sm md:text-base text-white py-2 px-2 rounded-md font-bold mt-8 hover:ring-1 ring-offset-1">
                  View Trailer
                  <MdOutlineSmartDisplay className="inline-block ml-2 text-lg sm:text-xl md:text-2xl" />
                </button>
              </Link>
            </motion.div>

            {/* Conic Vote Gauge */}
            <motion.div
              className="absolute flex justify-center items-center bottom-[100px] right-10 sm:bottom-[30%] sm:right-[15%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <Conic percentage={`${Math.round(movie.vote_average * 10)}`} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;