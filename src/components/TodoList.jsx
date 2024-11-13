import { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const fetchTodos = () => {
  return [
    "eat breakfast.",
    "iron clothes",
    "go to gym",
    "do coding",
    "go to sleep",
    "go to sleep",
  ];
};

export default function TodoList() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleAddTodo = (todoItem) => {
    setTodos((prevTodos) => [...prevTodos, todoItem]);
  };

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </>
  );
}
