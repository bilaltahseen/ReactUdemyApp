import React, { useState } from "react";
import { render } from "@testing-library/react";

const userOutput = props => {
  const style = {
    backgroundColor: "gray",
    color: "white",
    fontSize: 40
  };
  return (
    (style.backgroundColor = props.username),
    (
      <div>
        <p style={style}>
          The Color is :{props.username}
          <br></br>
          {props.children}
        </p>
      </div>
    )
  );
};

export default userOutput;
