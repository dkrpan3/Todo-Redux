import React from "react";
import "./App.css";
import Input from "./components/Input";
import ListTodo from "./components/ListTodo";
function App() {
  return (
    <div className="App">
      <h2>Koji ti je plan za danas?</h2>
      <Input />
      <ListTodo />
    </div>
  );
}
export default App;
