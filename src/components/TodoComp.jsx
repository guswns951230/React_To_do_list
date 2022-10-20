import { useReducer } from "react";
import TodoItemComp from "./TodoItemComp";

const initstate = {
  // todoitem의 형태 확인 : 1개의 todo값을 가지고 있음
  todoitem: {
    done: true,
    todo: "확인",
    id: 1,
  },
  // 배열을 통해 여러개의 todoitem을 사용
  todolist: [
    {
      done: true,
      todo: "1st todo",
      id: 1,
    },
    {
      done: false,
      todo: "2nd todo",
      id: 2,
    },
  ], // todoitem을 넣을 공간
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
    case "checkedlist":
      // list안에서 객체 하나를 찾아 객체의 done을 !값으로 변경
      // 객체 하나를 찾는 방법 : id값으로 통해 찾는다
      const newTodoList = state.todolist.map((todoitem) => {
        if (todoitem.id == action.id) {
          // 새로 객체를 만들어 done을 바꿈
          todoitem = {
            ...todoitem,
            done: !todoitem.done,
          };
        }
        return todoitem;
      });
      //
      const newTodoList2 = state.todolist.map((todoitem) =>
        todoitem.id == action.id
          ? { ...todoitem, done: !todoitem.done }
          : todoitem
      );
      return {
        ...state,
        todolist: newTodoList,
      };
    case "deletelist":
      // id값을 가져와, id값과 같은 객체를 제외하고 배열 생성
      const newTodolist = state.todolist.filter(
        (todoitem) => todoitem.id != action.id
      );
      return {
        ...state,
        todolist: newTodolist,
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
            readOnly
          />
          {state.todoitem.todo}
          <button>X</button>
        </li>
        {/* TodoItemComp를 만들어 map을 통해 내용 출력 */}
        {state.todolist.map((todoitem) => (
          <TodoItemComp todoitem={todoitem} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
};

export default TodoComp;
