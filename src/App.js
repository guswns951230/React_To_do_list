import logo from "./logo.svg";
import "./App.css";
import ClockComp from "./components/ClockComp";
import LoginComp from "./components/LoginComp";
import TodoComp from "./components/TodoComp";

function App() {
  return (
    <div className="App">
      <ClockComp />
      <LoginComp />
      <TodoComp />
    </div>
  );
}

export default App;
