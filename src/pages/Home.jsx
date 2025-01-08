import useFetch from "../Hooks/UseFetch";

const Home = () => {
  const { data: movie, loading, error } = useFetch("movie/popular");
  console.log("Movies: ", movie);

  return (
    <>
      <div className=" flex justify-center items-center font-Montserrat text-lg font-bold">
        PAGE HAS LOADED
      </div>
      {movie &&
        movie.map((movie, index) => (
          <div key={index}>{movie.original_title}</div>
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
