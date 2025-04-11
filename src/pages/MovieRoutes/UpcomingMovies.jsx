import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuMovies from "../../components/MenuMovies";

const UpcomingMovies = () => {
  const { data: upcomingMovies, loading } = useFetch("movie/upcoming");
  console.log("Upcoming movie menu :", upcomingMovies);
  return (
    <div className="p-8 md:w-[90%] w-[95%] mx-auto font-Montserrat">
      <div className=" font-semibold sm:font-bold tracking-tight text-base sm:text-xl">
        Upcoming Movies
      </div>
      <div className="pt-8">
        <div>{loading && <div>Loading...</div>}</div>
        <div className="space-y-8">
          {upcomingMovies &&
            upcomingMovies.map((upcoming) => (
              <MenuMovies key={upcoming.id} movie={upcoming} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(UpcomingMovies);
