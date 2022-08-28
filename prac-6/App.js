import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <div
        style={{ position: "fixed", bottom: "0", right: "0", fontSize: "30px" }}
      >
        20cs082_Jheel Shah
      </div>
    </div>
  );
}

export default App;
