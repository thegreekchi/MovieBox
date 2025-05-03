import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
// import MenuMovies from "../../components/MenuMovies";s
import MenuPages from "../../components/MenuPages";

const UpcomingMovies = () => {
  const {
    data: upcomingMovies,
    loading,
    currentPage,
    nextPage,
    prevPage,
  } = useFetch("movie/upcoming");
  const Title = "Upcoming Movies";
  console.log("Upcoming movie menu :", upcomingMovies);
  return (
    <MenuPages
      data={upcomingMovies}
      loading={loading}
      currentPage={currentPage}
      nextPage={nextPage}
      prevPage={prevPage}
      Title={Title}
      type="movie"
    />
  );
};

export default memo(UpcomingMovies);
