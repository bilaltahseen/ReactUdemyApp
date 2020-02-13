import React, { useState } from "react";
import "./UserInput.css";

const userInput = props => {
  return (
    <div className="UserInput">
      <input
        type="text"
        placeholder="Enter Text"
        onChange={props.nameChange}
        value={props.name}></input>
    </div>
  );
};

export default userInput;
