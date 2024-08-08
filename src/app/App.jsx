import AddTodo from "../features/todo/AddTodo";
import Todos from "../features/todo/Todos";
import "../App.css";

function App() {
  return (
    <div className="container border m-3 p-3 m-2">
      <h1>Lets Build a Better 2025 ❤</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
