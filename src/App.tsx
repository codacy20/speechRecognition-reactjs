import React, { Component } from "react";
import "./App.css";
import SpeechRecognition from "../src/SpeechRecognition";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SpeechRecognition />
        </div>
      </React.Fragment>
    );
  }
}
