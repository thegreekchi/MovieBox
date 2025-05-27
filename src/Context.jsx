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

  const isBookmarked = (movieId) => bookmarkId.includes(movieId.id.toString());

  const addbookmark = async (isAuth, movie) => {
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

  const removeBookmark = async (isAuth, movie) => {
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

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        addbookmark,
        removeBookmark,
        bookmarks,
        bookmarkId,
        isBookmarked,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
