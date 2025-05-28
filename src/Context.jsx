import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { createContext, useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkId, setBookmarkId] = useState([]);
  console.log("bookmarkId", bookmarkId);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setIsAuth);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAuth) {
      const bookmarkRef = query(
        collection(db, "users", isAuth.email, "bookmarks"),
        orderBy("timeStamp", "desc")
      );
      getDocs(bookmarkRef).then((snapShot) => {
        setBookmarks(
          snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setBookmarkId(snapShot.docs.map((doc) => doc.id));
      });
    }
  }, [isAuth]);

  const isBookmarked = (movie) => bookmarkId.includes(movie.id.toString());

  const addbookmark = async (movie) => {
    const ref = doc(
      db,
      "users",
      isAuth.email,
      "bookmarks",
      movie.id.toString()
    );
    const movieData = {
      id: movie.id,
      title: movie.title,
      img: movie.poster_path || movie.backdrop_path,
      timeStamp: serverTimestamp(),
    };
    try {
      await setDoc(ref, movieData);
      return toast.success("Movie added to watchlist");
    } catch (error) {
      console.log(error);
      return toast.error("Bookmark failed");
    }
  };

  const removeBookmark = async (movie) => {
    const ref = doc(
      db,
      "users",
      isAuth.email,
      "bookmarks",
      movie.id.toString()
    );

    try {
      await deleteDoc(ref);
      return toast.success("Movie deleted");
    } catch (error) {
      console.log(error);
      return toast.error("Delete failed");
    }
  };

  const toggleBookmarks = async (movie) => {
    if (!isAuth) return toast.error("sign in to continue!!");
    try {
      if (isBookmarked(movie)) {
        await removeBookmark(movie);
        setBookmarkId((prev) =>
          prev.filter((id) => id !== movie.id.toString())
        );
        setBookmarks((prev) =>
          prev.filter((bookmarkk) => bookmarkk.id !== movie.id.toString())
        );
      } else {
        await addbookmark(movie);
        setBookmarkId((prev) => [...prev, movie.id.toString()]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        addbookmark,
        removeBookmark,
        bookmarks,
        bookmarkId,
        isBookmarked,
        toggleBookmarks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
