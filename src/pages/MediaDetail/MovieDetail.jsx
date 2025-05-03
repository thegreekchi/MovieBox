import { useParams } from "react-router-dom";
import UseMediaDetails from "../../Hooks/UseMediaDetails";
import { memo } from "react";

const MovieDetail = () => {
  const { type, id } = useParams();
  const { data } = UseMediaDetails(type, id);
  console.log(data);
  return (
    <div className="font-Montserrat">
      {data && (
        <div className="p-6">
          <p className="font-semibold sm:font-bold tracking-tighter text-lg sm:text-2xl text-center">
            {data?.details.title ||
              data?.details.name ||
              data?.details.original_name}{" "}
            (
            {data?.details?.release_date?.slice(0, 4) ||
              data?.details?.first_air_date?.slice(0, 4)}
            )
          </p>
          <div>
            {data.details.runtime ? (
              <p className="italic text-sm text-center tracking-tighter">
                {`${Math.floor(data.details.runtime / 60)}hr
                ${Math.floor(data.details.runtime % 60)}mins`}
              </p>
            ) : (
              ""
            )}
          </div>
          {/* <div className="hidden md:flex w-[70%] mx-auto">
            <img
              className=" mt-4 rounded-md  mx-auto h-[250px] sm:h-[350px] md:h-[450px] object-contain object-center"
              src={
                data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${data.details?.backdrop_path}`
                  : `https://image.tmdb.org/t/p/original/${data.details?.poster_path}`
              }
              alt=""
            />
            <p className="text-base text-justify p-3 ml-3 flex justify-center items-center">
              {data.details.overview}
            </p>
          </div> */}

          <div className="">
            <img
              className=" mt-4 rounded-md  mx-auto h-[250px] sm:h-[350px] md:h-[450px] object-contain object-center"
              src={
                data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${data.details?.backdrop_path}`
                  : `https://image.tmdb.org/t/p/original/${data.details?.poster_path}`
              }
              alt=""
            />
            <div className="w-[90%] mx-auto">
              <p className="font-bold sm:text-lg text-base pt-4">Overview</p>
              <p className="text-base text-justify pt-2">
                {data.details.overview}
              </p>
            </div>
            <div className="w-[90%] mx-auto">
              {data?.trailer ? (
                <div>
                  <p className="font-bold sm:text-lg text-base pt-4">Trailer</p>
                  <iframe
                    className="pt-3 w-[100%] md:w-[70%] sm:w-[80%] h-[250px] md:h-[300px] mx-auto"
                    src={`https://www.youtube.com/embed/${data.trailer.key}`}
                    title="Trailer"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p>No trailer available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(MovieDetail);
