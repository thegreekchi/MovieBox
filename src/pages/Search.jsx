import { useEffect, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import MenuMovies from "../components/MenuMovies";

const Search = () => {
  const location = useLocation();
  const initialQuery = new URLSearchParams(location.search).get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  console.log(results);
  console.log(loading);

  // ⬆️ Scroll to top when query changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [initialQuery]);

  useEffect(() => {
    setQuery(initialQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const navigate = useNavigate();

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  // 🔍 Fetch results when query changes
  useEffect(() => {
    if (!initialQuery.trim()) return;

    setLoading(true);

    const url = `https://api.themoviedb.org/3/search/multi?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&page=${currentPage}&query=${encodeURIComponent(
      initialQuery
    )}&include_adult=false&language=en-US`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Search failed");
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setTotalPages(data.total_pages);
        const filtered = data.results.filter(
          (item) => item.media_type === "movie" || item.media_type === "tv"
        );
        setResults(filtered);
      })
      .catch((err) => {
        console.error(err);
        setResults([]);
      })
      .finally(() => setLoading(false));
  }, [initialQuery, currentPage]);

  return (
    <div className="p-8 md:w-[95%] w-[100%] mx-auto font-Montserrat sm:mt-12 md:mt-16 mt-[42px]">
      <div className="w-[100%]  mx-auto bg-black/40 rounded-md my-3">
        <form action="" className="" onSubmit={handleSubmit}>
          <input
            type="search"
            name=""
            id=""
            aria-label="search movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search..."
            className="w-full md:hidden text-white  placeholder-gray-400 p-2 text-sm focus:rounded-md bg-gray-600 border border-[#e4ba46] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2AC47] "
          />
        </form>
      </div>
      <div className="flex justify-between items-center">
        <div className=" font-semibold sm:font-bold tracking-tight text-base sm:text-xl">
          Showing search results for {query}
        </div>
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
          {results &&
            results.map((trending) => (
              <MenuMovies
                key={trending.id}
                movie={trending}
                type={trending.media_type}
              />
            ))}
        </div>
        <div className="flex w-[60%] mx-auto justify-between mt-16 mb-8">
          <FaCircleChevronLeft
            onClick={prevPage}
            size={24}
            className="text-[#679267] z-10 cursor-pointer hover:scale-125 duration-100  rounded-full ring-2 ring-[#679267] ring-offset-1"
          />
          <span className="font-bold">{currentPage}</span>
          <FaCircleChevronRight
            onClick={nextPage}
            size={24}
            className="text-[#679267] z-10 cursor-pointer hover:scale-125 duration-100  rounded-full ring-2 ring-[#679267] ring-offset-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
