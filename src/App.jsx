import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Layout from "./components/Layout";
import TrendingMovies from "./pages/MovieRoutes/TrendingMovies";
import UpcomingMovies from "./pages/MovieRoutes/UpcomingMovies";
import TopRatedMovies from "./pages/MovieRoutes/TopRatedMovies";
import PopularMovies from "./pages/MovieRoutes/PopularMovies";
import TvPopular from "./pages/TvRoutes/TvPopular";
import TvAiring from "./pages/TvRoutes/TvAiring";
import TvTopRated from "./pages/TvRoutes/TvTopRated";
import MovieDetail from "./pages/MediaDetail/MovieDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trendingMovies" element={<TrendingMovies />} />
        <Route path="upcomingMovies" element={<UpcomingMovies />} />
        <Route path="popularMovies" element={<PopularMovies />} />
        <Route path="topRatedMovies" element={<TopRatedMovies />} />
        <Route path="tvAiring" element={<TvAiring />} />
        <Route path="tvPopular" element={<TvPopular />} />
        <Route path="tvTopRated" element={<TvTopRated />} />
        <Route path="media/:type/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
