import Hero from "../components/Hero";
import MoviesHome from "../components/MoviesHome";
import TvHome from "../components/TvHome";
// import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <Hero />
      <MoviesHome />
      <TvHome />
      {/* <Row title="Trending" url="trending/movie/week" />
      <Row title="Upcoming" url="movie/upcoming" />
      <Row title="Popular" url="movie/popular" />
      <Row title="Top Rated" url="movie/top_rated" /> */}
    </>
  );
};

export default Home;
