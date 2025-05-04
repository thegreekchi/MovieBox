import { useParams } from "react-router-dom";
import UseMediaDetails from "../../Hooks/UseMediaDetails";
import { memo } from "react";
import Trailer from "../../components/Trailer";
import Overview from "../../components/Overview";
import DetailsHero from "../../components/DetailsHero";
import Casts from "../../components/Casts";
import Recommendations from "../../components/Recommendations";

const MovieDetail = () => {
  const { type, id } = useParams();
  const { data } = UseMediaDetails(type, id);
  console.log(data);
  return (
    <div className="font-Montserrat">
      {data && (
        <div className="p-6">
          <DetailsHero data={data} />
          <Overview data={data} />
          <Trailer data={data} />
          <Casts data={data} />
          <Recommendations data={data} />
        </div>
      )}
    </div>
  );
};

export default memo(MovieDetail);
