const Footer = () => {
  return (
    <div className=" bg-black text-white font-Montserrat p-4 ">
      {/* <div className=" bg-white text-black font-Montserrat p-4"> */}

      <div className="flex-col w-[90%] mx-auto justify-around items-center">
        <div className="flex justify-center items-center pt-2">
          <div className="flex text-center font-bold text-lg">
            <img
              src="film41.png"
              alt=""
              className="border-1 border-white md:h-[70px] h-[40px] sm:h-[45px] object-contain"
            />
            {/* <img
              src="Filmbox2.png"
              alt=""
              className="border-1 border-white md:h-[50px] h-[40px] sm:h-[45px] object-contain"
            /> */}
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center mt-3">
          <div className="text-sm text-[#D2AC47]">Built with</div>
          <div className="flex p-4">
            {/* <img src="tmdb.png" alt="TMDB.logo" className="w-12 h-12 p-1" /> */}
            {/* <img
              src="footer1.png"
              alt="footer.png"
              className="w-60 p-1 rounded-lg"
            /> */}
            <div className="flex">
              <img
                src="firebase.png"
                alt="firebase.png"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]  object-cover rounded-full border-2 border-[#ffca37]"
              />
              <img
                src="React.png"
                alt="react.png"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]  object-cover rounded-full border-2 border-[#ffca37]"
              />
            </div>
            <img
              src="tmdb.png"
              alt="tmdb.png"
              className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]  object-cover rounded-full border-2 border-[#ffca37]"
            />
            <div className="flex">
              <img
                src="openAi.png"
                alt="openAi.png"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]  object-cover rounded-full border-2 border-[#ffca37]"
              />
              <img
                src="tailwind.png"
                alt="tailwind.png"
                className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]  object-cover rounded-full border-2 border-[#ffca37]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-2 text-xs md:text-sm text-[#D2AC47]">
        &copy; 2025 filmBox. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
