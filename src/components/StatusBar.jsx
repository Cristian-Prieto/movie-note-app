import styles from "./StatusBar.module.css";

export function StatusBar({ ORIGINAL_LIST }) {
  const statBar = ORIGINAL_LIST.reduce(
    (previous, current) => {
      return { ...previous, [current.type]: previous[current.type] + 1 };
    },
    { movie: 0, book: 0, game: 0, show: 0 }
  );

  return (
    <div className={styles.statusContainer}>
      <div>Movies: {statBar.movie}</div>
      <div>Books: {statBar.book}</div>
      <div>Games: {statBar.game}</div>
      <div>Shows: {statBar.show}</div>
    </div>
  );
}
