import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function hendleChange(event) {
    var newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={hendleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
