// eslint-disable-next-line react/prop-types
const Conic = ({ percentage }) => {
  return (
    <div
      className="flex justify-center items-center mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full relative opacity-80"
      style={{
        background: `conic-gradient(#22c55e ${percentage * 3.6}deg, #3b3b3b ${
          percentage * 3.6
        }deg)`,
      }}
    >
      <div className="bg-white absolute rounded-full w-12 h-12 md:w-16 md:h-16 font-Montserrat flex justify-center items-center">
        <span className="font-semibold text-lg md:text-xl">{percentage}</span>
        <span className="text-xs md:text-sm">%</span>
      </div>
    </div>
  );
};

export default Conic;
