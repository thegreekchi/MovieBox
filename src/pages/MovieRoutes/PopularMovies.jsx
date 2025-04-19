import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
// import MenuMovies from "../../components/MenuMovies";
import MenuPages from "../../components/MenuPages";

const PopularMovies = () => {
  const {
    data: popularMovies,
    loading,
    currentPage,
    nextPage,
    prevPage,
  } = useFetch("movie/popular");
  const Title = "Popular Movies";
  console.log("Popular movie menu :", popularMovies);
  return (
    <MenuPages
      data={popularMovies}
      loading={loading}
      currentPage={currentPage}
      nextPage={nextPage}
      prevPage={prevPage}
      Title={Title}
    />
  );
};
export default memo(PopularMovies);
