export function InputText({ onChange, placeholder }) {
  return (
    <input
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
