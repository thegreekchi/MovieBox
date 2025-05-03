import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuPages from "../../components/MenuPages";

const TvTopRated = () => {
  const {
    data: topRated,
    loading,
    currentPage,
    nextPage,
    prevPage,
  } = useFetch("tv/top_rated");
  const Title = "Top Rated Tv Shows";
  console.log("Top Rated tv :", topRated);
  return (
    <MenuPages
      data={topRated}
      loading={loading}
      currentPage={currentPage}
      nextPage={nextPage}
      prevPage={prevPage}
      Title={Title}
      type="tv"
    />
  );
};

export default memo(TvTopRated);
