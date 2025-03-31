const Footer = () => {
  return (
    <div className=" bg-black text-white font-Montserrat p-4 ">
      <div className="text-red-700 text-center font-bold text-lg">
        MOVIE <span className=" text-blue-700">BOX</span>
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
