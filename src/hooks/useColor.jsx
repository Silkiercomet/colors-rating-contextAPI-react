import { useContext } from "react";
import ColorContext from "../context/ColorContext";

export const useColor = () => useContext(ColorContext);
