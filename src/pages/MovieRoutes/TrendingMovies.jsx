import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuMovies from "../../components/MenuMovies";

const TrendingMovies = () => {
  const { data: trendingMovies, loading } = useFetch("trending/movie/week");
  console.log("Trending movie menu :", trendingMovies);
  return (
    <div className="p-8 md:w-[90%] w-[95%] mx-auto font-Montserrat">
      <div className=" font-semibold sm:font-bold tracking-tight text-base sm:text-xl">
        Trending Movies
      </div>
      <div className="pt-8">
        <div>{loading && <div>Loading...</div>}</div>
        <div className="space-y-8">
          {trendingMovies &&
            trendingMovies.map((trending) => (
              <MenuMovies key={trending.id} movie={trending} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TrendingMovies);
