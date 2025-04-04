import Row from "./Row";
import Title from "./Title";

const TvHome = () => {
  return (
    <div>
      <Title title="Tv Shows" url="trending/movie/week" />
      <Row title="Currently Airing" url="tv/on_the_air" />
      <Row title="Popular" url="tv/popular" />
      <Row title="Top Rated" url="tv/top_rated" />
    </div>
  );
};

export default TvHome;
