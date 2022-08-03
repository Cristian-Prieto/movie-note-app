import styles from "./List.module.css";
// TODO: Install date-fns and format date: `npm install date-fns`
// import { format } from "date-fns";

export function List({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className={styles.item}>
          <div>{item.title} </div>
          <div>{item.rating} </div>
          <div>{item.comment} </div>
          {/* format(item.createdAt, "dd/MM/yyyy HH:mm") */}
          <div> / created at: {item.createdAt.toString()}</div>
        </li>
      ))}
    </ul>
  );
}
