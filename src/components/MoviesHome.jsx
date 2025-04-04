import Row from "./Row";
import Title from "./Title";

const MoviesHome = () => {
  return (
    <div>
      <Title title="Movies" url="trending/movie/week" />
      <Row title="Trending" url="trending/movie/week" />
      <Row title="Upcoming" url="movie/upcoming" />
      <Row title="Popular" url="movie/popular" />
      <Row title="Top Rated" url="movie/top_rated" />
    </div>
  );
};

export default MoviesHome;
