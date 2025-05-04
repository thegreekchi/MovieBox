/* eslint-disable react/prop-types */
const Trailer = ({ data }) => {
  return (
    <>
      <div className="w-[97%] sm:w-[90%] mx-auto mt-4">
        {data?.cast ? (
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
    </>
  );
};

export default Trailer;
