import { useState } from "react";
import type { Filter, Todo } from "../types";
import AddTodoForm from "./AddTodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // Calculés à chaque affichage, jamais stockés
  const visibleTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "todo") return !todo.done;
    return true;
  });
  const remaining = todos.filter((todo) => !todo.done).length;

  function add(text: string) {
    const nextId =
      todos.length === 0 ? 1 : Math.max(...todos.map((todo) => todo.id)) + 1;
    setTodos([...todos, { id: nextId, text: text, done: false }]);
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
  }

  return (
    <div>
      <h1>Todo</h1>
      <AddTodoForm onAdd={add} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TodoList todos={visibleTodos} onToggle={toggle} onRemove={remove} />
      <p>{remaining} tâche(s) restante(s)</p>
    </div>
  );
}
