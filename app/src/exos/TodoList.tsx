import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  editingId: number | null;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  onStartEdit: (id: number) => void;
  onRename: (id: number, text: string) => void;
  onCancelEdit: () => void;
}

export default function TodoList({
  todos,
  editingId,
  onToggle,
  onRemove,
  onStartEdit,
  onRename,
  onCancelEdit,
}: TodoListProps) {
  if (todos.length === 0) {
    return <p>Rien à faire</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={todo.id === editingId}
          onToggle={onToggle}
          onRemove={onRemove}
          onStartEdit={onStartEdit}
          onRename={onRename}
          onCancelEdit={onCancelEdit}
        />
      ))}
    </ul>
  );
}
