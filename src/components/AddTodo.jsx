import PropTypes from "prop-types";
import { useState } from "react";
export default function AddTodo({ handleAddTodo }) {
  const [todoItem, setTodoItem] = useState("");
  return (
    <div className="container mx-auto my-5 rounded-xl pt-44  flex items-center justify-center ">
      <input
        type="text"
        placeholder="Enter todo"
        value={todoItem}
        onChange={(event) => {
          setTodoItem(event.target.value);
        }}
        className="bg-gray-800 text-center text-white text-base p-2 rounded-xl"
      />

      <button
        onClick={() => {
          if (!todoItem) {
            alert("add some text");
            return;
          }
          console.log(todoItem);
          handleAddTodo(todoItem);
          setTodoItem(() => {
            return "";
          });
        }}
        className="bg-sky-500 text-center mx-3  text-base p-2 rounded-xl hover:bg-white hover: text-black"
      >
        Add Todo
      </button>
    </div>
  );
}

AddTodo.propTypes = {
  handleAddTodo: PropTypes.func,
};
