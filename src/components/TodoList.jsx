import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const fetchTodos = () => {
  return [
    { id: 1, text: "eat breakfast.", done: false },
    { id: 2, text: "iron clothes", done: true },
    { id: 3, text: "go to gym", done: false },
    { id: 4, text: "do coding", done: false },
    { id: 5, text: "go to sleep", done: false },
  ];
};

export default function TodoList() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleAddTodo = (todoItem) => {
    setTodos((prevTodos) => [...prevTodos, todoItem]);
  };

  const toggleTodoStatus = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((t) => (t.id === id ? { ...t, done: !t.done } : { ...t })),
    );
  };

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} toggle={toggleTodoStatus} />
        ))}
      </ul>
    </>
  );
}
