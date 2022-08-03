import { useState } from "react";

export function Search({ data }) {
  const [inputValue, setInputValue] = useState("");
  const [searchedItem, setSearchedItem] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    const result = data.find((obj) => obj.title.toLowerCase() === inputValue.toLowerCase());
    setSearchedItem(result);
  };

  return (
    <>
      <form onSubmit={search}>
        <input list="entries" placeholder="Search..." onChange={handleInputChange} />
        <datalist id="entries">
          {data.map((item) => (
            <option key={item.id} value={item.title}>
              {item.rating}/5
            </option>
          ))}
        </datalist>
        <button type="submit">🔎</button>
      </form>
      {searchedItem ? (
        <span>
          resultado de la busqueda: {searchedItem.title}, rating:
          {searchedItem.rating}, comment: {searchedItem.comment}
        </span>
      ) : (
        <div>Resultado aqui</div>
      )}
    </>
  );
}
