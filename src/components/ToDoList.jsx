import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function hendleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={hendleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
