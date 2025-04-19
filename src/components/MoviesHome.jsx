import Row from "./Row";
import Title from "./Title";

const MoviesHome = () => {
  return (
    <div>
      <Title title="Movies" url="trending/movie/week" />
      <Row title="Trending" url="trending/movie/week" link="trendingMovies" />
      <Row title="Upcoming" url="movie/upcoming" link="upcomingMovies" />
      <Row title="Popular" url="movie/popular" link="popularMovies" />
      <Row title="Top Rated" url="movie/top_rated" link="topRatedMovies" />
    </div>
  );
};

export default MoviesHome;
