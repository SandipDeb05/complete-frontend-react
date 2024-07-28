import AddTodo from "../features/todo/AddTodo";
import Todos from "../features/todo/Todos";

function App() {
  return (
    <div className="container">
      <h1>Lets Build a Better 2025 ❤</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
