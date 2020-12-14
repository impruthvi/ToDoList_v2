import React, { useState } from "react";
import TodoItem from "./ToDoList";
import InputArea from "./InputArea";
function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((previous) => {
      return [...previous, inputText];
    });
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
      <InputArea onAdd={addItem} />
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
