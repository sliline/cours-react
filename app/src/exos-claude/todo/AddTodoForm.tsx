import { useState } from "react";
import type { FormEvent } from "react";

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState("");

  // Le form gère à la fois le clic sur le bouton et la touche Entrée
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed === "") return;
    onAdd(trimmed);
    setText("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddTodoForm;
