import { useRef } from "react";

interface AddColorFormProps {
  onNewColor?: (title: string, color: string) => void;
}

export function AddColorForm({ onNewColor = f => f }: AddColorFormProps): JSX.Element {
  const txtTitle = useRef<HTMLInputElement | null>(null);
  const hexColor = useRef<HTMLInputElement | null>(null);

  const submit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    onNewColor(title, color);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="color title..." required></input>
      <input>type="color" required</input>
      <button>ADD</button>
    </form>
  )
}