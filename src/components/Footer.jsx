import { BsCameraReelsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white font-Montserrat p-4 ">
      <div className="flex justify-center items-center">
        <div className="flex text-center font-bold text-lg">
          <span className="">
            <BsCameraReelsFill className="text-red-700" size={21} />
          </span>
          <span className="text-red-700">film</span>
          <span className="text-blue-700">BOX</span>
        </div>
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <div className="text-sm ">Built with</div>
        <div className="flex">
          <img src="tmdb.png" alt="TMDB.logo" className="w-12 h-12 p-1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
