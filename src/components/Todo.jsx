import PropTypes from "prop-types";
export default function Todo({ todo, toggle }) {
  const { id, text, done } = todo;
  console.log(todo);
  return (
    <div className=" pb-3 flex items-center justify-center">
      <li onClick={() => toggle(id)}>
        {done && <strike>{text}</strike>}
        {!done && text}
      </li>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};
