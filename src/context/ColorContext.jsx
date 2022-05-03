import { createContext, useState } from "react";
import colorData from "../data/data-colors.json";
const ColorContext = createContext({ item: 1 });

export function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const onRemoveColor = (id) => {
    setColors(colors.filter((e) => e.id !== id));
  };
  const onRateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const onNewColor = (color, title) => {
    let newColors = [
      ...colors,
      {
        id: title,
        title: color,
        color: title,
        rating: 0
      }
    ];
    setColors(newColors);
  };
  return (
    <ColorContext.Provider
      value={{ colors, onRemoveColor, onRateColor, onNewColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export default ColorContext;
