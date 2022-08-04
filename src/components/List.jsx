import { format } from "date-fns";
import styles from "./List.module.css";
import { BsStarFill, BsStar } from "react-icons/bs";

export function List({ data }) {
  return (
    <ul className={styles.listBox}>
      <div className={styles.listHeader}>
        <span className={styles.title}>Title</span>
        <span className={styles.rating}>Rating</span>
        <span className={styles.comment}>Comment</span>
        <span className={styles.date}>Added</span>
      </div>
      {data.map((item) => (
        //li => COMPONENTE: 1.
        <li key={item.id} className={styles.item}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.rating}>
            <div>
              <BsStarFill />
            </div>
            <div>{item.rating >= 2 ? <BsStarFill /> : <BsStar />}</div>
            <div>{item.rating >= 3 ? <BsStarFill /> : <BsStar />}</div>
            <div>{item.rating >= 4 ? <BsStarFill /> : <BsStar />}</div>
            <div>{item.rating === 5 ? <BsStarFill /> : <BsStar />} </div>
          </div>
          <div className={styles.comment}>{item.comment} </div>
          <div className={styles.date}>
            {format(item.createdAt, "dd/MM/yyyy")}
          </div>

          {/* <div> / created at: {item.createdAt.toString()}</div> */}
        </li>
      ))}
    </ul>
  );
}
