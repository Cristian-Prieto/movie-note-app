import { useState } from "react";

export function Modal({ onAdd, close }) {
  const [newNote, setNewNote] = useState({
    type: "movie",
    title: "",
    comment: "",
    rating: 1,
    createdAt: new Date(),
    updatedAt: null,
  });

  const handleRatingChange = (newRating) => {
    setNewNote({
      ...newNote,
      rating: newRating,
    });
  };

  const handleInputChange = (event) => {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value,
    });
  };

  const handleRadioButtonChange = (event) => {
    setNewNote({
      ...newNote,
      type: event.target.value,
    });
  };

  const addToList = (event) => {
    event.preventDefault();
    onAdd(newNote);
    close();
  };

  return (
    <div>
      <button onClick={close}>X</button>
      <form onSubmit={addToList}>
        <div>
          <RadioButton
            label="Movie"
            value="movie"
            onChange={handleRadioButtonChange}
            isSelected={newNote.type === "movie"}
          />
          <RadioButton
            label="Game"
            value="game"
            onChange={handleRadioButtonChange}
            isSelected={newNote.type === "game"}
          />
          <RadioButton
            label="TV Show"
            value="show"
            onChange={handleRadioButtonChange}
            isSelected={newNote.type === "show"}
          />
          <RadioButton
            label="Book"
            value="book"
            onChange={handleRadioButtonChange}
            isSelected={newNote.type === "book"}
          />
        </div>

        <input name="title" value={newNote.title} onChange={handleInputChange} placeholder="TITLE" />
        {/* <input placeholder="⭐️⭐️⭐️⭐️⭐️" type="number" /> */}
        <Rating onChange={handleRatingChange} rating={newNote.rating} />
        <input name="comment" value={newNote.comment} onChange={handleInputChange} placeholder="COMMENT" />
        <button type="submit">ADD!</button>
      </form>
    </div>
  );
}

// Before:

// <label>
//   movie
//   <input
//     value="movie"
//     type="radio"
//     name="type"
//     onChange={handleRadioButtonChange}
//     checked={newNote.type === "movie"}
//   />
// </label>

// After:

// <RadioButton
//   label="Movie"
//   value="movie"
//   onChange={handleRadioButtonChange}
//   isSelected={newNote.type === "movie"}
// />

const RadioButton = ({ label, value, onChange, isSelected }) => {
  return (
    <label>
      <input
        style={{ backgroundColor: "tomato" }}
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

const Rating = ({ rating, onChange }) => {
  return (
    <div>
      <button type="button" onClick={() => onChange(1)}>
        ⭐️
      </button>
      <button type="button" onClick={() => onChange(2)}>
        {rating >= 2 ? "⭐️" : "🔴"}
      </button>
      <button type="button" onClick={() => onChange(3)}>
        {rating >= 3 ? "⭐️" : "🔴"}
      </button>
      <button type="button" onClick={() => onChange(4)}>
        {rating >= 4 ? "⭐️" : "🔴"}
      </button>
      <button type="button" onClick={() => onChange(5)}>
        {rating === 5 ? "⭐️" : "🔴"}
      </button>
    </div>
  );
};
