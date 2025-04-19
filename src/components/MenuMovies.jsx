/* eslint-disable react/prop-types */

const MenuMovies = ({ movie }) => {
  return (
    <>
      <div className="rounded-sm shadow-md shadow-black/20 flex hover:shadow-lg hover:shadow-black/40 duration-300 cursor-pointer">
        <div>
          <img
            className="min-w-28 h-32 sm:min-w-36 sm:h-44 object-fill object-center rounded-sm"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            }
            alt={movie.title}
          />
        </div>
        <div className="p-4">
          <div className="font-semibold text-sm sm:text-base">
            {movie.title || movie.original_name}
          </div>
          <div className="text-xs sm:text-sm line-clamp-3 mt-2 sm:mt-3">
            {movie.overview}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMovies;
