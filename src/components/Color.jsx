import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

const Color = ({ id, title, color, rating, onRemove = (f) => f }) => {
  return (
    <li className="color">
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating Stars={rating} id={id} />
    </li>
  );
};
export default Color;
