import styles from "./TabButton.module.css";

export const TabButton = ({ value, label, activeTab, onChange }) => {
  return (
    <button
      disabled={activeTab === value}
      onClick={() => onChange(value)}
      className={styles.tab}
    >
      {label}
    </button>
  );
};
