import { useRef, useState } from "react";

interface AddColorFormProps {
  onNewColor?: (title: string, color: string) => void;
}

export function AddColorForm({ onNewColor = f => f }: AddColorFormProps): JSX.Element {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  )
}