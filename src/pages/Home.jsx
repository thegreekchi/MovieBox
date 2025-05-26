// import { useEffect } from "react";
import Hero from "../components/Hero";
import MoviesHome from "../components/MoviesHome";
import TvHome from "../components/TvHome";
import toast from "react-hot-toast";
// import Row from "../components/Row";

const Home = () => {
  // useEffect(() => toast.success("page has loaded"), []);
  toast.success("page has loaded");
  return (
    <>
      <Hero />
      <MoviesHome />
      <TvHome />
    </>
  );
};

export default Home;
