import { useState } from "react";

export function Modal({ ORIGINAL_LIST, close }) {
  const [selectedType, setSelectedType] = useState("movie");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    console.log(selectedType);
  };

  const addToList = (event) => {
    event.preventDefault();
    console.log("agregada");
  };

  return (
    <div>
      <button onClick={close}>X</button>
      <form onSubmit={addToList}>
        <div>
          <label>
            movie
            <input
              value="movie"
              type="radio"
              name="type"
              onChange={handleTypeChange}
              checked={selectedType === "movie"}
            />
          </label>
          <label>
            game
            <input
              value="game"
              type="radio"
              name="type"
              onChange={handleTypeChange}
              checked={selectedType === "game"}
            />
          </label>
          <label>
            show
            <input
              value="show"
              type="radio"
              name="type"
              onChange={handleTypeChange}
              checked={selectedType === "show"}
            />
          </label>
          <label>
            book
            <input
              value="book"
              type="radio"
              name="type"
              onChange={handleTypeChange}
              checked={selectedType === "book"}
            />
          </label>
        </div>

        <input placeholder="TITLE" />
        <input placeholder="⭐️⭐️⭐️⭐️⭐️" type="number" />
        <input placeholder="COMMENT" />
        <button type="submit">ADD!</button>
      </form>
    </div>
  );
}
