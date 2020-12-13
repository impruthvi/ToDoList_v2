import React, { useState } from "react";
import TodoItem from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function hendleChange(event) {
    var newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    setItems((previous) => {
      return [...previous, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={hendleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <TodoItem text={todoitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
