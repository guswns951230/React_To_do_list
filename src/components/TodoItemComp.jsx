const TodoItemComp = (props) => {
  const { todoitem, dispatch } = props;
  return (
    <li>
      {/* Todoitem - check 여부, 할 일, id 값 */}
      <input
        type="checkbox"
        checked={todoitem.done}
        onClick={() => {
          dispatch({ type: "checkedlist", id: todoitem.id });
        }}
        readOnly
      />
      {todoitem.todo}
      <button
        onClick={() => {
          dispatch({ type: "deletelist", id: todoitem.id });
        }}
      >
        X
      </button>
    </li>
  );
};

export default TodoItemComp;
