import PropTypes from "prop-types";
export default function Todo({ todo, toggle }) {
  const { id, text, done } = todo;
  return (
    <li onClick={() => toggle(id)}>
      {done && <strike>{text}</strike>}
      {!done && text}
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggle: PropTypes.func,
};
