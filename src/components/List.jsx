import { Item } from "./Item";
import styles from "./List.module.css";

export function List({ data, deleteNote, onStartEdit }) {
  return (
    <ul className={styles.listBox}>
      {data.map((item) => (
        <Item key={item.id} item={item} deleteNote={deleteNote} onStartEdit={onStartEdit} />
      ))}
    </ul>
  );
}
