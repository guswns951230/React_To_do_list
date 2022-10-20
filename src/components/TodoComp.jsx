import { useReducer } from "react";

const initstate = {
  // todoitem의 형태 확인 : 1개의 todo값을 가지고 있음
  todoitem: {
    done: true,
    todo: "확인",
    id: 1,
  },
  // 배열을 통해 여러개의 todoitem을 사용
  todolist: [], // todoitem을 넣을 공간
  // todo값을 입력받을 todoInput
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "checked":
      return {
        ...state,
        todoitem: {
          ...state.todoitem,
          done: !state.todoitem.done,
        },
      };
    case "todoInput":
      return {
        ...state,
        todoInput: action.payload,
      };
    default: // 다른 값이 들어왔을 때 현재 state를 유지하고 오류를 알려준다
      console.error("존재하지 않는 action.type");
      return state;
  }
}

const TodoComp = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "todoInput", payload: e.target.value });
        }}
      />
      <button>+</button>

      <ul>
        <li>
          {/* Todoitem - check 여부, 할 일, id 값 */}
          <input
            type="checkbox"
            checked={state.todoitem.done}
            onClick={() => {
              dispatch({ type: "checked" });
            }}
          />
          {state.todoitem.todo}
          <button>X</button>
        </li>
        {/* TodoItemComp를 만들어 map을 통해 내용 출력 */}
      </ul>
    </div>
  );
};

export default TodoComp;
