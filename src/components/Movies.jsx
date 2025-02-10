import { memo } from "react";

// eslint-disable-next-line react/prop-types
const Movies = ({ movie }) => {
  return (
    <>
      <img
        className="min-w-32 h-32 object-cover object-center rounded-sm"
        // eslint-disable-next-line react/prop-types
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        // eslint-disable-next-line react/prop-types
        alt={movie.title}
      />
    </>
  );
};

export default memo(Movies);
