import type { Todo } from "../types";
import EditTodoInput from "./EditTodoInput";

interface TodoItemProps {
  todo: Todo;
  isEditing: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onStartEdit: (id: number) => void;
  onRename: (id: number, text: string) => void;
  onCancelEdit: () => void;
}

export default function TodoItem({
  todo,
  isEditing,
  onToggle,
  onRemove,
  onStartEdit,
  onRename,
  onCancelEdit,
}: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <EditTodoInput
          initialText={todo.text}
          onSave={(text) => onRename(todo.id, text)}
          onCancel={onCancelEdit}
        />
      ) : (
        <span onDoubleClick={() => onStartEdit(todo.id)}>{todo.text}</span>
      )}
      <button onClick={() => onRemove(todo.id)}>Supprimer</button>
    </li>
  );
}
