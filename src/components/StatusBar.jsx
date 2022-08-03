import { useMemo } from "react";
import styles from "./StatusBar.module.css";

export function StatusBar({ data }) {
  const statBar = useMemo(() => {
    return data.reduce(
      (previous, current) => {
        return { ...previous, [current.type]: previous[current.type] + 1 };
      },
      { movie: 0, book: 0, game: 0, show: 0 }
    );
  }, [data]);

  return (
    <div className={styles.statusContainer}>
      <div>Movies: {statBar.movie}</div>
      <div>Books: {statBar.book}</div>
      <div>Games: {statBar.game}</div>
      <div>Shows: {statBar.show}</div>
    </div>
  );
}
