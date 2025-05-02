import Row from "./Row";
import Title from "./Title";

const MoviesHome = () => {
  return (
    <div>
      <Title title="Movies" url="trending/movie/week" />
      <Row
        title="Trending"
        url="trending/movie/week"
        link="trendingMovies"
        type="movie"
      />
      <Row
        title="Upcoming"
        url="movie/upcoming"
        link="upcomingMovies"
        type="movie"
      />
      <Row
        title="Popular"
        url="movie/popular"
        link="popularMovies"
        type="movie"
      />
      <Row
        title="Top Rated"
        url="movie/top_rated"
        link="topRatedMovies"
        type="movie"
      />
    </div>
  );
};

export default MoviesHome;
