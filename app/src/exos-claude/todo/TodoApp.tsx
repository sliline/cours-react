import { useRef, useState } from "react";
import type { Filter, Todo } from "../../types";
import AddTodoForm from "./AddTodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // Compteur d'id qui ne fait qu'augmenter : un id supprimé n'est jamais réutilisé.
  // Ce n'est pas du state : il n'est pas affiché et ne doit pas provoquer de rendu.
  const nextId = useRef(1);

  // Valeurs calculées à partir du state
  const visibleTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "todo") return !todo.done;
    return true;
  });
  const remainingCount = todos.filter((todo) => !todo.done).length;

  function addTodo(text: string) {
    const newTodo: Todo = { id: nextId.current, text, done: false };
    nextId.current += 1;
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h2>Todo list</h2>
      <AddTodoForm onAdd={(text) => addTodo(text)} />
      <FilterBar
        filter={filter}
        onFilterChange={(newFilter) => setFilter(newFilter)}
      />
      <TodoList
        todos={visibleTodos}
        onToggle={(id) => toggleTodo(id)}
        onDelete={(id) => deleteTodo(id)}
      />
      <p>
        {remainingCount} tâche{remainingCount > 1 ? "s" : ""} restante
        {remainingCount > 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default TodoApp;
