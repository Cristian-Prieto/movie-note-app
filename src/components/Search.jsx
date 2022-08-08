import { useState } from "react";
import { format } from "date-fns";
import styles from "./Search.module.css";
import { BsSearch } from "react-icons/bs";
import { BsStar, BsStarFill } from "react-icons/bs";

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
      <form onSubmit={search} className={styles.searchBox}>
        <input list="entries" placeholder="Search" onChange={handleInputChange} className={styles.textBox} />
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
        <div className={styles.resultTrue}>
          <div>
            <div className={styles.top}>
              <div className={styles.title}>{searchedItem.title}</div>
              <div>
                <BsStarFill />
              </div>
              <div>{searchedItem.rating >= 2 ? <BsStarFill /> : <BsStar />}</div>
              <div>{searchedItem.rating >= 3 ? <BsStarFill /> : <BsStar />}</div>
              <div>{searchedItem.rating >= 4 ? <BsStarFill /> : <BsStar />}</div>
              <div>{searchedItem.rating === 5 ? <BsStarFill /> : <BsStar />} </div>
            </div>
          </div>

          <div className={styles.comment}>{searchedItem.comment}</div>

          <div className={styles.date}> {format(searchedItem.createdAt, "dd/MM/yyyy")}</div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
