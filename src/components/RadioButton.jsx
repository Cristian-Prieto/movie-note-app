export const RadioButton = ({ label, value, onChange, isSelected }) => {
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
