import "./App.css";
import { Search } from "./components/Search";
import { List } from "./components/List";
import { Add } from "./components/Add";
import { Tabs } from "./components/Tabs";
import { useState, useEffect } from "react";
import { StatusBar } from "./components/StatusBar";

const ORIGINAL_LIST = [
  {
    id: 1,
    type: "movie",
    title: "Jumanji",
    comment: "Es una verga de pelicula",
    rating: 3,
  },
  {
    id: 2,
    type: "game",
    title: "mario and rabits",
    comment: "juegardo",
    rating: 2,
  },
  {
    id: 3,
    type: "book",
    title: "La biblia",
    comment: "Es una verga de libro",
    rating: 1,
  },
  {
    id: 4,
    type: "show",
    title: "2 girls one cup",
    comment: "no la vi",
    rating: 0,
  },
  {
    id: 5,
    type: "book",
    title: "coran",
    comment: "Es una verga de libro",
    rating: 4,
  },
  {
    id: 6,
    type: "show",
    title: "Dexter",
    comment: "Es una verga de serie",
    rating: 5,
  },
  {
    id: 7,
    type: "book",
    title: "jarri poter",
    comment: "Es una verga de serie",
    rating: 5,
  },
  {
    id: 8,
    type: "game",
    title: "jarri poter psx",
    comment: "Es una verga de serie",
    rating: 5,
  },
];

function App() {
  const [list, setList] = useState(ORIGINAL_LIST);
  const [activeTab, setActiveTab] = useState("all");
  console.log(activeTab);
  console.log(list);
  useEffect(() => {
    if (activeTab !== "all") {
      setList(ORIGINAL_LIST.filter((listItem) => listItem.type === activeTab));
    } else {
      setList(ORIGINAL_LIST);
    }
  }, [activeTab]);

  return (
    <div className="app">
      <header className="header">
        <h1>Media-notes app</h1>
      </header>
      <Search ORIGINAL_LIST={ORIGINAL_LIST} />
      <div className="body">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <List list={list} />
      </div>
      <Add ORIGINAL_LIST={ORIGINAL_LIST} />
      <StatusBar ORIGINAL_LIST={ORIGINAL_LIST} />
      <footer className="footer">Cristian Prieto, 2022</footer>
    </div>
  );
}

export default App;
