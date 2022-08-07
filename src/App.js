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
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 2,
    type: "game",
    title: "mario and rabits",
    comment: "juegardo",
    rating: 2,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 3,
    type: "book",
    title: "La biblia",
    comment: "Es una verga de libro",
    rating: 1,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 4,
    type: "show",
    title: "2 girls one cup",
    comment: "no la vi",
    rating: 0,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 5,
    type: "book",
    title: "coran",
    comment: "Es una verga de libro",
    rating: 4,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 6,
    type: "show",
    title: "Dexter",
    comment: "Es una verga de serie",
    rating: 5,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 7,
    type: "book",
    title: "jarri poter",
    comment:
      "Es una verga de serie, Es una verga de serie Es una verga de serie Es una verga de serie",
    rating: 5,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 8,
    type: "game",
    title: "jarri poter psx",
    comment: "Es una verga de serie",
    rating: 5,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 9,
    type: "game",
    title: "otro juego",
    comment:
      "me parece un juego exelente, no tiene fallas. Literalmente me cambió la puta vida.",
    rating: 4,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 10,
    type: "game",
    title: "otro juego MAS",
    comment:
      "me parece un juego exelente, no tiene fallas. Literalmente me cambió la puta vida.",
    rating: 4,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 11,
    type: "game",
    title: "juego3",
    comment:
      "me parece un juego exelente, no tiene fallas. Literalmente me cambió la puta vida.",
    rating: 1,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 12,
    type: "game",
    title: "juego de sisisisi",
    comment:
      "me parece un juego exelente, no tiene fallas. Literalmente me cambió la puta vida.",
    rating: 1,
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 13,
    type: "game",
    title: "juego de nonono",
    comment:
      "me parece un juego exelente, no tiene fallas. Literalmente me cambió la puta vida.",
    rating: 1,
    createdAt: new Date(),
    updatedAt: null,
  },
];

function App() {
  const [list, setList] = useState(ORIGINAL_LIST);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleAddNewNote = (newNote) => {
    const lastIdFromList = ORIGINAL_LIST[ORIGINAL_LIST.length - 1].id;

    const newNoteWithGeneratedId = {
      ...newNote,
      id: lastIdFromList + 1,
    };

    console.log(
      "App::handleAddNewNote::newNoteWithGeneratedId",
      newNoteWithGeneratedId
    );
  };

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
      <Search data={ORIGINAL_LIST} />
      <Tabs activeTab={activeTab} onChange={handleTabChange} />
      <List data={list} />
      <StatusBar data={ORIGINAL_LIST} />
      <Add onAdd={handleAddNewNote} />
      <footer className="footer">Cristian Prieto, 2022</footer>
    </div>
  );
}

export default App;
