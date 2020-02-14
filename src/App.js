import React, { useState, Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = { lengthofText: 0, inputText: [] };

  textLengthHandler = event => {
    const text = event.target.value;
    const lengthofTextasrray = text.split("");
    this.setState({
      lengthofText: lengthofTextasrray.length,
      inputText: [...lengthofTextasrray]
    });
  };

  removeChareHandler = index => {
    //const personIndex = this.state.inputText.findIndex(index);
    const inputTextOld = [...this.state.inputText];
    const modifiedA = inputTextOld.splice(index, 1);
    const indexS = inputTextOld.indexOf(modifiedA);
    if (indexS > -1) {
      inputTextOld.splice(indexS, 1);
    }

    this.setState({
      inputText: inputTextOld
    });
    //console.log(this.state.inputTextJoined);
  };

  render() {
    const listofChar = (
      <div>
        {this.state.inputText.map((items, index) => {
          return (
            <CharComponent
              key={index}
              removeCharHandler={this.removeChareHandler.bind(this, index)}
              seprateChar={items}
              valueInput={items}></CharComponent>
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textLengthHandler}
          value={this.state.inputText.join("")}></input>
        <ValidationComponent
          lengthofText={this.state.lengthofText}></ValidationComponent>
        {listofChar}
      </div>
    );
  }
}

export default App;
