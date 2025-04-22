import { useEffect } from "react";
import { useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState(null);
  console.log("randomMovie:", randomMovie);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3/";
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [genreId, setGenreId] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Genres:", data.genres);
        setGenre(data.genres);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const setGenId = (e) => {
    setGenreId(e.target.value);
  };

  useEffect(() => setCurrentPage(1), [genreId]);

  useEffect(() => {
    const abort = new AbortController();

    if (genreId) {
      endpoint += `&with_genres=${genreId}`;
    }

    fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&page=${currentPage}`, {
      signal: abort.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch Data");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("data fetched:", data);
        setData(data.results);
        setRandomMovie(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(error.message);
          setLoading(false);
        }
      });
    return () => {
      abort.abort();
    };
  }, [endpoint, currentPage]);

  return {
    data,
    error,
    loading,
    randomMovie,
    genre,
    currentPage,
    nextPage,
    prevPage,
    setGenId,
  };
};

export default useFetch;
