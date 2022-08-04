import { useState } from "react";
import styles from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

export function Search({ data }) {
  const [inputValue, setInputValue] = useState("");
  const [searchedItem, setSearchedItem] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    const result = data.find(
      (obj) => obj.title.toLowerCase() === inputValue.toLowerCase()
    );
    setSearchedItem(result);
  };

  return (
    <>
      <form onSubmit={search} className={styles.searchBox}>
        <input
          list="entries"
          placeholder="Search"
          onChange={handleInputChange}
          className={styles.textBox}
        />
        <datalist id="entries">
          {data.map((item) => (
            <option key={item.id} value={item.title}>
              {item.rating}/5
            </option>
          ))}
        </datalist>
        <button type="submit" className={styles.submitBtn}>
          <BsSearch />
        </button>
      </form>
      {searchedItem ? (
        <span className={styles.resultTrue}>
          resultado de la busqueda: {searchedItem.title}, rating:
          {searchedItem.rating}, comment: {searchedItem.comment}
        </span>
      ) : (
        <div></div>
      )}
    </>
  );
}
