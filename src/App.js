import "./App.css";
import { Search } from "./components/Search";
import { List } from "./components/List";
import { Add } from "./components/Add";
import { Tabs } from "./components/Tabs";
import { StatusBar } from "./components/StatusBar";
import { useMemo, useState } from "react";
import { getNotesFromLocalStorage, saveToLocalStorage } from "./utils/utils";
import { Modal } from "./components/Modal";

function App() {
  const [list, setList] = useState(getNotesFromLocalStorage());
  const [activeTab, setActiveTab] = useState("all");
  const [editItem, setEditItem] = useState();
  const [message, setMessage] = useState();

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleAddNewNote = (newNote) => {
    const lastIdFromList = list.length ? list[0].id : 0;

    const newNoteWithGeneratedId = {
      ...newNote,
      id: lastIdFromList + 1,
    };

    const newList = [newNoteWithGeneratedId, ...list];

    saveToLocalStorage(newList);
    setList(newList);

    setMessage("Added succesfully");
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  const deleteNote = (itemtoDelete) => {
    const newList = list.filter((item) => item.id !== itemtoDelete.id);

    saveToLocalStorage(newList);
    setList(newList);

    setMessage("Deleted item");
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  const handleStartEdit = (note) => {
    setEditItem(note);
  };

  const handleUpdateNote = (note) => {
    const newList = list.map((item) => {
      if (note.id === item.id) {
        return { ...note, updatedAt: new Date().getTime() };
      }
      return item;
    });

    saveToLocalStorage(newList);
    setList(newList);

    setMessage("Edited succesfully");
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  const filteredList = useMemo(() => {
    const filtered =
      activeTab !== "all"
        ? list.filter((listItem) => listItem.type === activeTab)
        : list;
    return filtered;
  }, [activeTab, list]);

  const getMessageStyle = (message) => {
    if (message === "Added succesfully") return "added";
    if (message === "Edited succesfully") return "edited";
    if (message === "Deleted item") return "deleted";
  };

  const messageStyle = getMessageStyle(message);

  return (
    <div className="app">
      <header className="header">
        <h1>Media-notes app</h1>
      </header>
      {message && <div className={messageStyle}>{message}</div>}
      <div>
        <Search data={list} />
        <StatusBar data={list} />

        <Tabs activeTab={activeTab} onChange={handleTabChange} />
      </div>
      <List
        data={filteredList}
        deleteNote={deleteNote}
        onStartEdit={handleStartEdit}
      />
      <Add onAdd={handleAddNewNote} />
      {editItem && (
        <Modal
          editItem={editItem}
          onSave={handleUpdateNote}
          close={() => setEditItem(undefined)}
        />
      )}
      <footer className="footer">Cristian Prieto, 2022</footer>
    </div>
  );
}

export default App;
