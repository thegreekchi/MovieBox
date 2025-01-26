import { MdOutlineSmartDisplay } from "react-icons/md";
import useFetch from "../Hooks/UseFetch";

const Hero = () => {
  const { data: movie, randomMovie } = useFetch("movie/now_playing");
  console.log("Now playing:", movie);

  return (
    <div className="relative">
      <div className="relative">
        <img
          className="w-full md:h-[450px] object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
          alt={randomMovie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/10" />
      </div>
      <div>
        {randomMovie && (
          <div className="absolute font-Montserrat text-white top-[10%] sm:top-[13%] md:top-[20%] px-5 py-3 sm:p-10">
            <h1 className="font-bold text-base sm:text-xl md:text-3xl max-w-[80%]">
              {randomMovie.title}
            </h1>
            <h3 className="font-semi-bold text-sm sm:text-base md:xl line-clamp-2 sm:line-clamp-3 md:line-clamp-none max-w-[80%] pt-1 sm:pt-2">
              {randomMovie.overview}
            </h3>
            <h3 className="font-semi-bold text-xs sm:text-sm pt-2">
              Release date: {randomMovie.release_date}
            </h3>
            <button className="bg-red-600 hover:bg-red-800 duration-200 text-xs sm:text-sm md:text-base text-white py-1 px-2 rounded-md font-bold mt-4">
              View Trailer
              <MdOutlineSmartDisplay className="inline-block ml-2 text-lg sm:text-xl md:text-2xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
