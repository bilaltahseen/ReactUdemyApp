import React, { Component } from "react";

class ValidationComponent extends Component {
  render() {
    if (this.props.lengthofText >= 15) {
      return (
        <div>
          <p>Text is too long</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Text is Okay</p>
        </div>
      );
    }
  }
}

export default ValidationComponent;
