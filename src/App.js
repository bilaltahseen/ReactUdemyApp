import React, { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";

const App = () => {
  const [userNameState, userNameChangeState] = useState({ userName: "Bilal" });
  const nameChangeHandler = event => {
    userNameChangeState({ userName: event.target.value });
  };
  return (
    <div className="App">
      <h1>ReactJS UserDataProject</h1>
      <UserInput
        nameChange={nameChangeHandler}
        name={userNameState.userName}></UserInput>
      <UserOutput username={userNameState.userName}>
        This is paragraph 1:
      </UserOutput>
    </div>
  );
};

export default App;
