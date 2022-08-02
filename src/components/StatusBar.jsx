import { useEffect, useState } from "react";
import styles from "./StatusBar.module.css";

export function StatusBar({ ORIGINAL_LIST }) {
  const [moviesCount, setMoviesCount] = useState([]);
  const [booksCount, setBooksCount] = useState([]);
  const [gamesCount, setGamesCount] = useState([]);
  const [showsCount, setShowsCount] = useState([]);

  useEffect(() => {
    setMoviesCount(ORIGINAL_LIST.filter((item) => item.type === "movie"));
    setBooksCount(ORIGINAL_LIST.filter((item) => item.type === "book"));
    setGamesCount(ORIGINAL_LIST.filter((item) => item.type === "game"));
    setShowsCount(ORIGINAL_LIST.filter((item) => item.type === "show"));
  }, [ORIGINAL_LIST]);
  return (
    <div className={styles.statusContainer}>
      <div>Movies: {moviesCount.length}</div>
      <div>Books: {booksCount.length}</div>
      <div>Games: {gamesCount.length}</div>
      <div>Shows: {showsCount.length}</div>
    </div>
  );
}
