import React, { Component } from "react";
import "./styles/MiniLoader.css";

export class Loader extends Component {
  render() {
    return (
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
