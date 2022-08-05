import { format } from "date-fns";
import { BsStarFill, BsStar } from "react-icons/bs";
import styles from "./ItemList.module.css";

export function ItemList({ data }) {
  return data.map((item) => (
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
      <div className={styles.date}>{format(item.createdAt, "dd/MM/yyyy")}</div>

      {/* <div> / created at: {item.createdAt.toString()}</div> */}
    </li>
  ));
}
