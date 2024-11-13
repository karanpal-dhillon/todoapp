import PropTypes from "prop-types";

export default function Todo({ todo, toggleStatus }) {
  const { id, text, status } = todo;
  return (
    <li onClick={() => toggleStatus(id)}>
      {status && <strike> {text}</strike>}
      {!status && text}
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggleStatus: PropTypes.func,
};
