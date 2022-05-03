import { useInput } from "../hooks/useInput";
import { useColor } from "../hooks/useColor";

export default function AddNewColor() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const { onNewColor } = useColor();
  const submit = (event) => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle("");
    resetColor("#000000");
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
