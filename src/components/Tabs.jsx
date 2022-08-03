export function Tabs({ activeTab, onChange }) {
  return (
    <div>
      <TabButton label="All" value="all" activeTab={activeTab} onChange={onChange} />
      <TabButton label="Movies" value="movie" activeTab={activeTab} onChange={onChange} />
      <TabButton label="TV Shows" value="show" activeTab={activeTab} onChange={onChange} />
      <TabButton label="Games" value="game" activeTab={activeTab} onChange={onChange} />
      <TabButton label="Books" value="book" activeTab={activeTab} onChange={onChange} />
    </div>
  );
}

const TabButton = ({ value, label, activeTab, onChange }) => {
  return (
    <button disabled={activeTab === value} onClick={() => onChange(value)}>
      {label}
    </button>
  );
};
