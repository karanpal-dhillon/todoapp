import PropTypes from "prop-types";
import { useState } from "react";
export default function AddTodo({ handleAddTodo }) {
  const [todoItem, setTodoItem] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Enter todo"
        value={todoItem}
        onChange={(event) => {
          setTodoItem(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodo(todoItem);
          setTodoItem(() => {
            return "";
          });
        }}
      >
        Add Todo
      </button>
    </>
  );
}

AddTodo.propTypes = {
  handleAddTodo: PropTypes.func,
};
