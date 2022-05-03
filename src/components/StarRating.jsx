import Star from "./Star";
import { useColor } from "../hooks/useColor";
const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5, style = {}, Stars = 1, id }) => {
  const { onRateColor } = useColor();
  return (
    <div style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((_, i) => (
        <Star
          selected={Stars >= i + 1}
          key={i}
          onSelect={() => onRateColor(id, i + 1)}
        />
      ))}
      <p>
        {Stars} of {totalStars} stars
      </p>
    </div>
  );
};
export default StarRating;
