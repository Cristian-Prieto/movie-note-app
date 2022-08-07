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
    <>
      <span className={styles.title}>
        Movies: {statBar.movie} Books: {statBar.books} Games: {statBar.game} TV
        Shows: {statBar.show}
      </span>

      <div className={styles.statusContainer}>
        <div
          style={{
            height: "100%",
            width: `${statBar.movie}0%`,
            display: "flex",
            backgroundColor: "#be123c",
            alignItems: "center",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            paddingLeft: 6,
            paddingRight: 6,
          }}
        >
          Movies: {statBar.movie}
        </div>
        <div
          style={{
            height: "100%",
            width: `${statBar.book}0%`,
            display: "flex",
            backgroundColor: "#facc15",
            alignItems: "center",
          }}
        >
          Books: {statBar.book}
        </div>
        <div
          style={{
            height: "100%",
            width: `${statBar.game}0%`,
            display: "flex",
            backgroundColor: "#6b21a8",
            alignItems: "center",
          }}
        >
          Games: {statBar.game}
        </div>
        <div
          style={{
            height: "100%",
            width: `${statBar.show}0%`,
            display: "flex",
            backgroundColor: "#1e40af",
            alignItems: "center",
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          {statBar.show}
        </div>
      </div>
    </>
  );
}
