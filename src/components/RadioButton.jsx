import styles from "./RadioButton.module.css";
export const RadioButton = ({ label, value, onChange, isSelected }) => {
  return (
    <label>
      <input
        className={styles.radioBtn}
        value={value}
        type="radio"
        name="type"
        onChange={onChange}
        checked={isSelected}
      />
      {label}
    </label>
  );
};
