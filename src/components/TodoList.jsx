import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const fetchTodos = () => {
  return [
    { id: 1, text: "eat breakfast.", status: false },
    { id: 2, text: "iron clothes", status: false },
    { id: 3, text: "go to gym", status: true },
    { id: 4, text: "do coding", status: false },
    { id: 5, text: "go to sleep", status: false },
  ];
};

export default function TodoList() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleAddTodo = (todoItem) => {
    const todo = { id: todos.length + 1, text: todoItem, status: false };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const toggleStatus = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo,
      ),
    );
  };

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} toggleStatus={toggleStatus} />
        ))}
      </ul>
    </>
  );
}
