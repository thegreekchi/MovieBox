// eslint-disable-next-line react/prop-types
const ConicRow = ({ percentage }) => {
  return (
    <div
      className="flex justify-center items-center mx-auto w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full relative"
      style={{
        background: `conic-gradient(#22c55e ${percentage * 3.6}deg, #3b3b3b ${
          percentage * 3.6
        }deg)`,
      }}
    >
      <div className="bg-white absolute rounded-full w-[20px] h-[20px] md:w-[25px] md:h-[25px] font-Montserrat flex justify-center items-center">
        <span className="font-semibold text-[10px] md:text-[12px]">
          {percentage}
        </span>
        <span className="text-[4px] md:text-[6px]">%</span>
      </div>
    </div>
  );
};

export default ConicRow;
