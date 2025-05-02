import { useParams } from "react-router-dom";
import UseMediaDetails from "../../Hooks/UseMediaDetails";

const MovieDetail = () => {
  const { type, id } = useParams();
  const { data } = UseMediaDetails(type, id);
  console.log(data);
  return (
    <div>
      MovieDetail {type} {id}
      <div>
        {data?.trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${data.trailer.key}`}
            title="Trailer"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
