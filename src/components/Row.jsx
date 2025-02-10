/* eslint-disable react/prop-types */
import { memo } from "react";
import useFetch from "../Hooks/UseFetch";
import Movies from "./Movies";

const Row = ({ title, url }) => {
  const { data: movies, loading, error } = useFetch(url);
  console.log(`${title}:`, movies);
  return (
    <div className="bg-black">
      <div className=" w-[90%] mx-auto py-4 px-2">
        <h2 className="text-white font-bold text-base">{title}</h2>
        <div className="flex gap-4 w-full overflow-x-scroll ">
          {movies &&
            movies.map((movie) => <Movies key={movie.id} movie={movie} />)}
        </div>
        <div>{loading && <h1>The page is loading </h1>}</div>
        <div>{error && <h1>{error}</h1>}</div>
      </div>
    </div>
  );
};

export default memo(Row);
