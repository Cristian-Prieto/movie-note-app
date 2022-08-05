import { useState } from "react";
import { Rating } from "./Rating";
import { RadioButton } from "./RadioButton";
import { InputText } from "./InputText";
import { Button } from "./Button";
import styles from "./Modal.module.css";

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
    <div className={styles.modalBox}>
      <Button onClick={close}>X</Button>
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

        <InputText
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <Rating onChange={handleRatingChange} rating={newNote.rating} />
        <InputText
          name="comment"
          value={newNote.comment}
          onChange={handleInputChange}
          placeholder="Comment"
        />
        <Button>ADD!</Button>
        {/* <button type="submit">ADD!</button> */}
      </form>
    </div>
  );
}
