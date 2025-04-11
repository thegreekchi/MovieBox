import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuMovies from "../../components/MenuMovies";

const PopularMovies = () => {
  const { data: popularMovies, loading } = useFetch("movie/popular");
  console.log("Popular movie menu :", popularMovies);
  return (
    <div className="p-8 md:w-[90%] w-[95%] mx-auto font-Montserrat">
      <div className=" font-semibold sm:font-bold tracking-tight text-base sm:text-xl">
        Popular Movies
      </div>
      <div className="pt-8">
        <div>{loading && <div>Loading...</div>}</div>
        <div className="space-y-8">
          {popularMovies &&
            popularMovies.map((popular) => (
              <MenuMovies key={popular.id} movie={popular} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default memo(PopularMovies);
