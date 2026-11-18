import { useRef, useState } from "react";
import type { Filter, Todo } from "../types";
import AddTodoForm from "./AddTodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [editingId, setEditingId] = useState<number | null>(null);
  // Compteur jamais réutilisé, même après une suppression
  const nextId = useRef(1);

  // Calculés à chaque affichage, jamais stockés
  const visibleTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "todo") return !todo.done;
    return true;
  });
  const remaining = todos.filter((todo) => !todo.done).length;

  function add(text: string) {
    const id = nextId.current;
    nextId.current++;
    setTodos([...todos, { id: id, text: text, done: false }]);
  }

  function toggle(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function remove(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (id === editingId) {
      setEditingId(null);
    }
  }

  function rename(id: number, text: string) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)),
    );
    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
  }

  return (
    <div>
      <h1>Todo</h1>
      <AddTodoForm onAdd={add} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={visibleTodos}
        editingId={editingId}
        onToggle={toggle}
        onRemove={remove}
        onStartEdit={setEditingId}
        onRename={rename}
        onCancelEdit={cancelEdit}
      />
      <p>{remaining} tâche(s) restante(s)</p>
    </div>
  );
}
