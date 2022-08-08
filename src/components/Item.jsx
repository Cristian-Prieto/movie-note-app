import { format } from "date-fns";
import { BsStarFill, BsStar } from "react-icons/bs";
import { getTypeColor } from "../utils/utils";
import { Button } from "./Button";
import styles from "./Item.module.css";

export function Item({ item }) {
  return (
    <li key={item.id} className={styles.item}>
      <div
        style={{
          borderLeft: `18px solid ${getTypeColor(item.type)}`,
          width: 48,
          minHeight: 45,
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
        className={styles.title}
      >
        {item.title}
      </div>
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
      <Button classes={styles.delete}>x</Button>
      {/* <div> / created at: {item.createdAt.toString()}</div> */}
    </li>
  );
}
