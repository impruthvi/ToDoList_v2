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

  function deleteitem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((todoitem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
