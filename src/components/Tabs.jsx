export function Tabs({ setActiveTab }) {
  const changeActiveTab = (event) => {
    setActiveTab(event);
  };

  return (
    <div>
      <button onClick={() => changeActiveTab("all")}>all</button>
      <button onClick={() => changeActiveTab("movie")}>Movies</button>
      <button onClick={() => changeActiveTab("show")}>TV Shows</button>
      <button onClick={() => changeActiveTab("game")}>Games</button>
      <button onClick={() => changeActiveTab("book")}>Books</button>
    </div>
  );
}
