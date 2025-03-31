import { MdOutlineSmartDisplay } from "react-icons/md";
import useFetch from "../Hooks/UseFetch";

const Hero = () => {
  const { randomMovie, loading, error } = useFetch("movie/now_playing");
  console.log("Hero section:", randomMovie);

  return (
    <div className="relative">
      {loading && (
        <div className="h-[250px] sm:h-[450px] bg-black/90 relative overflow-hidden">
          <div className="absolute shimmer inset-0 opacity-40  shadow-white bg-gradient-to-r from-black/60 via-white/30 to-black/60" />
        </div>
      )}

      {error && (
        <div className="text-center font-bold text-red-600">{error}</div>
      )}
      {randomMovie && (
        <>
          <div className="relative">
            <img
              className="w-full h-[250px] sm:h-[450px] object-cover object-center"
              src={
                randomMovie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`
                  : `https://image.tmdb.org/t/p/original/${randomMovie?.poster_path}`
              }
              alt={randomMovie.title}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/10" />
          </div>
          <div>
            <div className="absolute font-Montserrat text-white top-[13%] md:top-[20%] px-5 py-3 sm:p-10">
              <h1 className="font-bold text-base sm:text-xl md:text-3xl max-w-[80%]">
                {randomMovie.title}
              </h1>
              <h3 className="font-semi-bold text-sm sm:text-base md:xl line-clamp-2 sm:line-clamp-3 md:line-clamp-none max-w-[80%] pt-1 sm:pt-2">
                {randomMovie.overview}
              </h3>
              <h3 className="font-bold text-xs sm:text-lg pt-2">
                Release date: {randomMovie.release_date}
              </h3>
              <button className="bg-red-600 hover:bg-red-800 duration-300 text-xs sm:text-sm md:text-base text-white py-1 px-2 rounded-md font-bold mt-4 hover:ring-1 ring-offset-1">
                View Trailer
                <MdOutlineSmartDisplay className="inline-block ml-2 text-lg sm:text-xl md:text-2xl" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
