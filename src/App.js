import "./App.css";
import { useState } from "react";
import AddTodo from "./Components/AddTodo/addTodo";
import FilterTodo from "./Components/FilterTodo/filterTodo";
import TodoList from "./Components/TodoList/todoList";

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);

  console.log(done, unDone);

  return (
    <div>
      <AddTodo />
      <div style={{ textAlign: "center" }}>
        <FilterTodo setDone={setDone} setUndone={setUndone} />
      </div>

      <TodoList done={done} unDone={unDone} />
    </div>
  );
}

export default App;
