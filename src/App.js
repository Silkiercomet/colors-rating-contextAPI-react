import AddNewColor from "./components/AddNewColor";
import ColorList from "./components/ColorList";
import { ColorProvider } from "./context/ColorContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ColorProvider>
        <ColorList />
        <AddNewColor />
      </ColorProvider>
    </div>
  );
}
