export const getTypeColor = (type) => {
  const colors = {
    movie: "#be123c",
    book: "#eab308",
    game: "#6b21a8",
    show: "#1e40af",
  };

  return colors[type];
};

export const getNotesFromLocalStorage = () => {
  const existingNotes = window.localStorage.getItem("notes");

  if (existingNotes) {
    const notes = JSON.parse(existingNotes);

    return notes;
  }

  return [];
};

export const saveToLocalStorage = (notes) => {
  window.localStorage.setItem("notes", JSON.stringify(notes));
};
