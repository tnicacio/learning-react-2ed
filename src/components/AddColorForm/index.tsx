import { useRef, useState } from "react";
import { useInput } from "../../hooks/useInput";

interface AddColorFormProps {
  onNewColor?: (title: string, color: string) => void;
}


export function AddColorForm({ onNewColor = f => f }: AddColorFormProps): JSX.Element {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        {...colorProps}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  )
}