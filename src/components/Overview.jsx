/* eslint-disable react/prop-types */
const Overview = ({ data }) => {
  return (
    <>
      <div className="w-[97%] sm:w-[90%] mx-auto mt-2">
        <p className="font-bold sm:text-lg text-base pt-4">Overview</p>
        <p className="text-base text-justify pt-2">{data.details.overview}</p>
      </div>
    </>
  );
};

export default Overview;
