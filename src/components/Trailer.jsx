/* eslint-disable react/prop-types */
const Trailer = ({ data }) => {
  console.log("Trailer:", data?.trailer);
  return (
    <>
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
          <div className="pt-3 w-[100%] md:w-[70%] sm:w-[80%] h-[260px] sm:h-[360px] md:h-[430px] mx-auto text-gray-600 bg-black text-center sm:text-lg text-base">
            <p>No trailer available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Trailer;
