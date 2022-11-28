import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { addTodoHandler } from "./store/todoSlice";

function App() {
  const [text, setText] = useState(""); //работа с form ой
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodoHandler({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField addTodoHandler={addTask} text={text} setText={setText} />
      <TodoList />
    </div>
  );
}

export default App;
