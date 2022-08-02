import { useState } from "react";

export function Search({ ORIGINAL_LIST }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  const search = (event) => {
    event.preventDefault();
    const result = ORIGINAL_LIST.find((obj) => obj.title === inputValue);
    console.log(result);
  };

  return (
    <form onSubmit={search}>
      <input
        list="entries"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <datalist id="entries">
        {ORIGINAL_LIST.map((item) => (
          <option key={item.id} value={item.title}>
            {item.rating}/5
          </option>
        ))}
      </datalist>
      <button type="submit">🔎</button>
    </form>
  );
}
