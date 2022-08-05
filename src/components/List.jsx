import { ItemList } from "./ItemList";
import styles from "./List.module.css";

export function List({ data }) {
  return (
    <ul className={styles.listBox}>
      <div className={styles.listHeader}>
        <span className={styles.title}>Title</span>
        <span className={styles.rating}>Rating</span>
        <span className={styles.comment}>Comment</span>
        <span className={styles.date}>Added</span>
      </div>
      <ItemList data={data} />
    </ul>
  );
}
