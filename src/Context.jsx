import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { createContext, useEffect, useState } from "react";
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setIsAuth);
    return () => unsubscribe();
  }, []);

  const addbookmark = async (userEmail, movie) => {
    const ref = doc(db, "users", userEmail, "bookmarks", movie.id.toString());
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

  const removeBookmark = async (userEmail, movie) => {
    const ref = doc(db, "users", userEmail, "bookmarks", movie.id.toString());

    try {
      await deleteDoc(ref);
      return toast.success("Movie deleted");
    } catch (error) {
      console.log(error);
      return toast.error("Delete failed");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, addbookmark, removeBookmark }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
