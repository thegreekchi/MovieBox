import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuMovies from "../../components/MenuMovies";
const TopRatedMovies = () => {
  const { data: topRatedMovies, loading } = useFetch("movie/top_rated");
  console.log("TopRated movie menu :", topRatedMovies);
  return (
    <div className="p-8 md:w-[90%] w-[95%] mx-auto font-Montserrat">
      <div className=" font-semibold sm:font-bold tracking-tight text-base sm:text-xl">
        Top Rated Movies
      </div>
      <div className="pt-8">
        <div>{loading && <div>Loading...</div>}</div>
        <div className="space-y-8">
          {topRatedMovies &&
            topRatedMovies.map((topRated) => (
              <MenuMovies key={topRated.id} movie={topRated} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TopRatedMovies);
