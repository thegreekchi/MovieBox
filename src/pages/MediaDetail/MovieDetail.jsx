import { useParams } from "react-router-dom";
import UseMediaDetails from "../../Hooks/UseMediaDetails";
// import { memo } from "react";
import Trailer from "../../components/Trailer";
import Overview from "../../components/Overview";
import DetailsHero from "../../components/DetailsHero";
import Casts from "../../components/Casts";
import Recommendations from "../../components/Recommendations";

const MovieDetail = () => {
  const { type, id } = useParams();
  const { data, error } = UseMediaDetails(type, id);
  console.log("movie details", data);
  return (
    <div className="font-Montserrat">
      {error && <h1>{error}</h1>}
      {data && (
        <div className="p-6  md:mt-20 mt-[52px] sm:mt-16">
          <DetailsHero type={type} data={data} />
          <Overview data={data} />
          <Trailer data={data} />
          <Casts data={data} />
          <Recommendations data={data} />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
