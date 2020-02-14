import "./CharComponent.css";
import React, { Component } from "react";

class CharComponent extends Component {
  render() {
    //console.log(this.props.seprateChar);
    return (
      <div className="CharComponent" onClick={this.props.removeCharHandler}>
        {this.props.seprateChar}
      </div>
    );
  }
}

export default CharComponent;
