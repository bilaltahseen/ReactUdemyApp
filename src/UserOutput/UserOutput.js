import React, { useState } from "react";
import { render } from "@testing-library/react";

const userOutput = props => {
  const style = {
    backgroundColor: "gray",
    color: "white"
  };
  return (
    <div>
      <p style={style}>
        Welcome User:
        {props.username}
        {props.children}
      </p>
    </div>
  );
};

export default userOutput;
