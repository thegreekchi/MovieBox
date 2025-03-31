import Hero from "../components/Hero";
import Row from "../components/Row";
import useFetch from "../Hooks/UseFetch";

const Home = () => {
  const { data: movie, loading, error } = useFetch("movie/popular");
  // console.log("Movies: ", movie);

  return (
    <>
      <Hero />
      <Row title="Trending" url="trending/movie/week" />
      <Row title="Upcoming" url="movie/upcoming" />
      <Row title="Popular" url="movie/popular" />
      <Row title="Top Rated" url="movie/top_rated" />
      <div className="flex justify-center items-center font-Montserrat text-lg font-bold">
        PAGE HAS LOADED
      </div>
      {movie &&
        movie.map((movie, index) => (
          <div className="font-Montserrat" key={index}>
            {movie.original_title}
          </div>
        ))}
      {loading && (
        <div className=" flex justify-center items-center font-Montserrat">
          This page is loading
        </div>
      )}
      {error && (
        <div className=" flex justify-center items-center font-Montserrat">
          {error}
        </div>
      )}
    </>
  );
};

export default Home;
