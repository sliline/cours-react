import { useState } from "react";

interface EditTodoInputProps {
  initialText: string;
  onSave: (text: string) => void;
  onCancel: () => void;
}

export default function EditTodoInput({
  initialText,
  onSave,
  onCancel,
}: EditTodoInputProps) {
  // Monté à chaque début d'édition : part toujours du texte actuel
  const [text, setText] = useState(initialText);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const trimmed = text.trim();
      if (trimmed === "") {
        onCancel();
      } else {
        onSave(trimmed);
      }
    } else if (e.key === "Escape") {
      onCancel();
    }
  }

  return (
    <input
      autoFocus
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
