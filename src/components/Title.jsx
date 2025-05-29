/* eslint-disable react/prop-types */
import useFetch from "../Hooks/UseFetch";

const Title = ({ title, url }) => {
  const { loading } = useFetch(url);

  return (
    <div className="text-center flex justify-center font-Montserrat font-semibold text-lg md:text-2xl">
      {loading ? (
        <div className="w-28 h-6 md:w-32 md:h-8 rounded-sm bg-black/60 relative overflow-hidden mb-6 flex justify-center mt-5">
          <div className="absolute shimmer inset-0 opacity-30  shadow-white bg-gradient-to-r from-black/60 via-white/70 to-black/60" />
        </div>
      ) : (
        <div className="bg-slate-50 pt-4 w-full text-red-600 ">
          <div className="drop-shadow-xl">{title}</div>
        </div>
      )}
    </div>
  );
};

export default Title;
