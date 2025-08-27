import { memo } from "react";
import useFetch from "../../Hooks/UseFetch";
import MenuPages from "../../components/MenuPages";
const TvAiring = () => {
  const {
    data: currentlyAiring,
    loading,
    currentPage,
    nextPage,
    prevPage,
  } = useFetch("tv/on_the_air");
  const Title = "Currently Airing Tv Shows";
  return (
    <MenuPages
      data={currentlyAiring}
      loading={loading}
      currentPage={currentPage}
      nextPage={nextPage}
      prevPage={prevPage}
      Title={Title}
      type="tv"
    />
  );
};

export default memo(TvAiring);
