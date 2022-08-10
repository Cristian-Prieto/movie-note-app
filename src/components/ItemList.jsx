import { format } from "date-fns";
import { BsStarFill, BsStar } from "react-icons/bs";
import styles from "./ItemList.module.css";

export function ItemList({ data }) {
  return data.map((item) => (
    <li
      key={item.id}
      style={{
        listStyle: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        minHeight: "2.5rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.5)",
      }}
    >
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
