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
    const todo = { id: todos.length + 1, text: todoItem, done: false };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const toggleTodoStatus = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((t) => (t.id === id ? { ...t, done: !t.done } : { ...t }))
    );
  };

  return (
    <div className="mx-auto">
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul className=" m-0 mx-auto text-center">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} toggle={toggleTodoStatus} />
        ))}
      </ul>
    </div>
  );
}
