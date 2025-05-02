import { useEffect } from "react";
import { useState } from "react";

const UseMediaDetails = (type, id) => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3/";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const detailsURL = `${BASE_URL}${type}/${id}?api_key=${API_KEY}`;
  const videosURL = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}`;
  const creditsURL = `${BASE_URL}${type}/${id}/credits?api_key=${API_KEY}`;
  const recommendURL = `${BASE_URL}${type}/${id}/recommendations?api_key=${API_KEY}`;

  useEffect(() => {
    const abort = new AbortController();
    const { signal } = abort;

    Promise.all([
      fetch(detailsURL, { signal }).then((res) => res.json()),
      fetch(videosURL, { signal }).then((res) => res.json()),
      fetch(creditsURL, { signal }).then((res) => res.json()),
      fetch(recommendURL, { signal }).then((res) => res.json()),
    ])
      .then(([details, videos, casts, recommendations]) => {
        if (!signal.aborted) {
          setData({
            details,
            trailer: videos.results.find(
              (v) => v.type === "Trailer" && v.site === "YouTube"
            ),
            cast: casts.cast.slice(0, 10),
            recommendaqtions: recommendations.results,
          });
          setLoading(false);
          setError(null);
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(error.message);
          setLoading(false);
        }
      });

    return () => abort.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);

  return { data, loading, error };
};

export default UseMediaDetails;
