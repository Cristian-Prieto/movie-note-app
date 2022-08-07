import { BsStarFill, BsStar } from "react-icons/bs";

export const Rating = ({ rating, onChange }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button type="button" onClick={() => onChange(1)}>
        <BsStarFill />
      </button>
      <button type="button" onClick={() => onChange(2)}>
        {rating >= 2 ? <BsStarFill /> : <BsStar />}
      </button>
      <button type="button" onClick={() => onChange(3)}>
        {rating >= 3 ? <BsStarFill /> : <BsStar />}
      </button>
      <button type="button" onClick={() => onChange(4)}>
        {rating >= 4 ? <BsStarFill /> : <BsStar />}
      </button>
      <button type="button" onClick={() => onChange(5)}>
        {rating === 5 ? <BsStarFill /> : <BsStar />}
      </button>
    </div>
  );
};
