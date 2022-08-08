import styles from "./Button.module.css";

export function Button({ children, classes = "", onClick, type }) {
  return (
    <button className={`${styles.button} ${classes}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
