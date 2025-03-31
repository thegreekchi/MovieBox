import { useEffect } from "react";
import { useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomMovie, setRandomMovie] = useState(null);
  // const randomMovie = data[Math.floor(Math.random() * data?.length)];
  console.log("randomMovie:", randomMovie);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3/";

  useEffect(() => {
    const abort = new AbortController();
    fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`, { signal: abort.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch Data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data fetched");
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
  }, [endpoint]);

  return { data, error, loading, randomMovie };
};

export default useFetch;
