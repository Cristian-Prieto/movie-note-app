export function InputText({ name, value, onChange, placeholder }) {
  return (
    <input
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        borderStyle: "none",
        height: "2rem",
        borderRadius: "1rem",
        paddingLeft: 12,
        paddingRight: 12,
      }}
    />
  );
}
