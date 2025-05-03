import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuPages from "../../components/MenuPages";
// import MenuMovies from "../../components/MenuMovies";
const TopRatedMovies = () => {
  const {
    data: topRatedMovies,
    loading,
    currentPage,
    nextPage,
    prevPage,
  } = useFetch("movie/top_rated");
  const Title = "Top Rated Movies";
  console.log("TopRated movie menu :", topRatedMovies);
  return (
    <MenuPages
      data={topRatedMovies}
      loading={loading}
      currentPage={currentPage}
      nextPage={nextPage}
      prevPage={prevPage}
      Title={Title}
      type="movie"
    />
  );
};

export default memo(TopRatedMovies);
