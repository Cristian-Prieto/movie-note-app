import { useMemo } from "react";
import styles from "./StatusBar.module.css";
import { getTypeColor } from "../utils/utils";

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
      <div
        className={styles.statItem}
        style={{ backgroundColor: getTypeColor("movie") }}
      >
        Movies: {statBar.movie}
      </div>
      <div
        className={styles.statItem}
        style={{ backgroundColor: getTypeColor("book") }}
      >
        Books: {statBar.book}
      </div>
      <div
        className={styles.statItem}
        style={{ backgroundColor: getTypeColor("game") }}
      >
        Games: {statBar.game}
      </div>
      <div
        className={styles.statItem}
        style={{ backgroundColor: getTypeColor("show") }}
      >
        TV Shows: {statBar.show}
      </div>
    </div>
  );
}
