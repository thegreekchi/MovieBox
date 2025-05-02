import Row from "./Row";
import Title from "./Title";

const TvHome = () => {
  return (
    <div>
      <Title title="Tv Shows" url="trending/movie/week" />
      <Row
        title="Currently Airing"
        url="tv/on_the_air"
        link="tvAiring"
        type="tv"
      />
      <Row title="Popular" url="tv/popular" link="tvPopular" type="tv" />
      <Row title="Top Rated" url="tv/top_rated" link="tvTopRated" type="tv" />
    </div>
  );
};

export default TvHome;
