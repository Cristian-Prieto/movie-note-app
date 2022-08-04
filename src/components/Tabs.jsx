import styles from "./Tabs.module.css";
import { TabButton } from "./TabButton";
export function Tabs({ activeTab, onChange }) {
  return (
    <div className={styles.tabsBox}>
      <TabButton
        label="All"
        value="all"
        activeTab={activeTab}
        onChange={onChange}
      />
      <TabButton
        label="Movies"
        value="movie"
        activeTab={activeTab}
        onChange={onChange}
      />
      <TabButton
        label="TV Shows"
        value="show"
        activeTab={activeTab}
        onChange={onChange}
      />
      <TabButton
        label="Games"
        value="game"
        activeTab={activeTab}
        onChange={onChange}
      />
      <TabButton
        label="Books"
        value="book"
        activeTab={activeTab}
        onChange={onChange}
      />
    </div>
  );
}
