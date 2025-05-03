import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuPages from "../../components/MenuPages";

const TvPopular = () => {
  const {
    data: popular,
    loading,
    currentPage,
    nextPage,
    prevPage,
  } = useFetch("tv/popular");
  const Title = "Popular Tv Shows";
  console.log("Popular tv :", popular);
  return (
    <MenuPages
      data={popular}
      loading={loading}
      currentPage={currentPage}
      nextPage={nextPage}
      prevPage={prevPage}
      Title={Title}
      type="tv"
    />
  );
};

export default memo(TvPopular);
