import { Route, Routes, useLocation } from "react-router-dom";
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
import { Toaster } from "react-hot-toast";
import Bookmarks from "./pages/Bookmarks";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Scroll from "./components/Scroll";
import Search from "./pages/Search";
import Chat from "./pages/AiChat/Chat";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/chat";
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      />
      <Navbar />
      <Scroll />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="trendingMovies" element={<TrendingMovies />} />
          <Route path="upcomingMovies" element={<UpcomingMovies />} />
          <Route path="popularMovies" element={<PopularMovies />} />
          <Route path="topRatedMovies" element={<TopRatedMovies />} />
          <Route path="tvAiring" element={<TvAiring />} />
          <Route path="tvPopular" element={<TvPopular />} />
          <Route path="tvTopRated" element={<TvTopRated />} />
          <Route path="chat" element={
            <ProtectedRoutes>
              <Chat />
            </ProtectedRoutes>
          } />
          <Route path="media/:type/:id" element={<MovieDetail />} />
          <Route
            path="bookmarks"
            element={
              <ProtectedRoutes>
                <Bookmarks />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
