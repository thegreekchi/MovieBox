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
  const { data } = UseMediaDetails(type, id);
  return (
    <div className="font-Montserrat">
      {data && (
        <div className="p-6 sm:mt-12 md:mt-16 mt-10">
          <DetailsHero data={data} />
          <Overview data={data} />
          <Trailer data={data} />
          <Casts data={data} />
          <Recommendations data={data} />
          {/* <>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div className="hidden md:flex w-[70%] ml-[5%]">
                <img
                  className=" mt-4 rounded-md min-h-[350px] max-h-[400px] object-contain object-center shadow-lg shadow-black"
                  src={
                    data?.details?.poster_path
                      ? `https://image.tmdb.org/t/p/original/${data.details?.poster_path}`
                      : `https://image.tmdb.org/t/p/original/${data.details?.backdrop_path}`
                  }
                  alt=""
                />
                <div className="text-base text-justify p-3 ml-5 flex flex-col items-start mt-[8%] justify-between">
                  <div>
                    <p className="font-bold tracking-tighter text-2xl ">
                      {data?.details.title ||
                        data?.details.name ||
                        data?.details.original_name}{" "}
                      (
                      {data?.details?.release_date?.slice(0, 4) ||
                        data?.details?.first_air_date?.slice(0, 4)}
                      )
                    </p>
                    {data.details.runtime ? (
                      <p className="italic text-sm text-center tracking-tighter">
                        {`${Math.floor(data.details.runtime / 60)}hr
                ${Math.floor(data.details.runtime % 60)}mins`}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="font-semibold space-y-3">
                    <p>
                      Release Date:{" "}
                      <span className="font-normal">
                        {data?.details?.first_air_date ||
                          data?.details?.release_date}
                      </span>
                    </p>
                    <p>
                      Country:{" "}
                      {data?.details?.production_countries.map((country, i) => (
                        <span key={i} className="font-normal">
                          {`${country.name}, `}
                        </span>
                      ))}
                    </p>
                    <p>
                      Language:{" "}
                      {data?.details?.spoken_languages.map((language, i) => (
                        <span key={i} className="font-normal">
                          {`${language.english_name}, `}
                        </span>
                      ))}
                    </p>
                    <p>
                      Genres:{" "}
                      {data?.details?.genres.map((genre, i) => (
                        <span key={i} className="font-normal">
                          {`${genre.name}, `}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div> */}
          {/* Mobile screens up to small screens */}

          {/* <p className="font-semibold sm:font-bold tracking-tighter text-lg sm:text-2xl text-center md:hidden">
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
                  <p className="italic text-sm text-center tracking-tighter md:hidden">
                    {`${Math.floor(data.details.runtime / 60)}hr
                ${Math.floor(data.details.runtime % 60)}mins`}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="flex mt-2 md:hidden w-[80%] mx-auto gap-4 tracking-tighter ">
                <div className="">
                  <img
                    className=" mt-4 rounded-md  mx-auto min-h-[240px] max-h-[600px] sm:h-[300px] object-contain object-center md:hidden shadow-md shadow-black"
                    src={
                      data?.details?.poster_path
                        ? `https://image.tmdb.org/t/p/original/${data.details?.poster_path}`
                        : `https://image.tmdb.org/t/p/original/${data.details?.backdrop_path}`
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="font-semibold text-xs space-y-2 sm:space-y-4 flex flex-col justify-end h-full">
                    <div>
                      Release Date:{" "}
                      <div className="font-normal">
                        {data?.details?.first_air_date ||
                          data?.details?.release_date}
                      </div>
                    </div>
                    <p>
                      Country:{" "}
                      {data?.details?.production_countries.map((country, i) => (
                        <span key={i} className="font-normal">
                          {`${country.name}, `}
                        </span>
                      ))}
                    </p>
                    <p>
                      Language:{" "}
                      {data?.details?.spoken_languages.map((language, i) => (
                        <span key={i} className="font-normal">
                          {`${language.english_name}, `}
                        </span>
                      ))}
                    </p>
                    <p>
                      Genres:{" "}
                      {data?.details?.genres.map((genre, i) => (
                        <span key={i} className="font-normal">
                          {`${genre.name}, `}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </> */}
          {/* Overview */}
          {/* <>
            <div className="w-[97%] sm:w-[90%] mx-auto mt-2">
              <p className="font-bold sm:text-lg text-base pt-4">Overview</p>
              <p className="text-base text-justify pt-2">
                {data.details.overview}
              </p>
            </div>
          </> */}
          {/* Trailer */}
          {/* <>
            <div className="w-[97%] sm:w-[90%] mx-auto mt-4">
              {data?.trailer ? (
                <div>
                  <p className="font-bold sm:text-lg text-base ">Trailer</p>
                  <iframe
                    className="pt-3 w-[100%] md:w-[70%] sm:w-[80%] h-[260px] sm:h-[360px] md:h-[430px] mx-auto"
                    src={`https://www.youtube.com/embed/${data.trailer.key}`}
                    title="Trailer"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p>No trailer available</p>
              )}
            </div>
          </> */}
          {/* Recommendation */}
          {/* <Recommendations data={data} /> */}
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
