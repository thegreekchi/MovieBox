import { useContext } from "react";
import { AuthContext } from "../Context";
import MenuMovies1 from "../components/MenuMovies1";

const Bookmarks = () => {
  const { bookmarks, loading, isAuth } = useContext(AuthContext);
  console.log("bookmarks", bookmarks);
  return (
    <div className="p-8 md:w-[95%] w-[100%] mx-auto font-Montserrat sm:mt-12 md:mt-16 mt-[42px]">
      <div className=" font-semibold sm:font-bold tracking-tight text-base sm:text-xl mt-4 ml-2">
        {isAuth && <div>Hello {isAuth?.displayName.split(" ")[0]},</div>}
        {isAuth && (
          <div className="font-light">Here&apos;s your updated watchlist</div>
        )}
      </div>
      <div className="pt-8">
        <div className="space-y-8">
          {loading &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <div key={num}>
                <div className="rounded-md shadow-md shadow-black/20 h-32 sm:h-44 bg-black/70 relative overflow-hidden">
                  <div className="absolute shimmer inset-0 opacity-30 shadow-white bg-gradient-to-r from-black/70 via-white/70 to-black/70" />
                </div>
              </div>
            ))}
        </div>
        <div className="space-y-8">
          {bookmarks && bookmarks.length > 0 ? (
            bookmarks.map((bookmark) => (
              <MenuMovies1
                key={bookmark.id}
                movie={bookmark}
                type={bookmark.type}
              />
            ))
          ) : (
            <div className="h-[50%] flex flex-col justify-center items-center text-center mb-[100px] mt-[100px] sm:mb-[70px] sm:mt-[70px]">
              <div className="text-sm sm:text-base ">
                You have not added any movies to your watchlist
              </div>
              <img
                src="cardboard.png"
                alt=""
                className="sm:w-48 sm:h-48 mt-10 w-40 h-40"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
