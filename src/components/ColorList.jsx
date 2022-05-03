import Color from "./Color";
import { useColor } from "../hooks/useColor";
const ColorList = () => {
  const { colors, onRemoveColor } = useColor();
  if (!colors.length) return <div>no colors</div>;

  return (
    <ul className="listColors">
      {colors.map((e, i) => (
        <Color key={i} onRemove={onRemoveColor} {...e} />
      ))}
    </ul>
  );
};
export default ColorList;
