import styles from "./List.module.css";
export function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <div>{item.title} </div>
          <div>{item.rating} </div>
          <div>{item.comment} </div>
        </li>
      ))}
    </ul>
  );
}
