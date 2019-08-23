import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  recognition: PropTypes.object
};

class Dictaphone extends Component {
  onChangeLanguage(localeString) {
    const { recognition } = this.props;
    recognition.lang = localeString;
    console.log('change!')
  }

  render() {
    const { transcript } = this.props;

    if (transcript.includes("switch to Persian")) {
      this.onChangeLanguage("fa-IR");
    } else if (transcript.includes("سوئیچ کن به انگلیسی")) {
      this.onChangeLanguage("en-US");
    }

    return (
      <div>
        <h1>Speak UP!</h1>
        <span>{transcript}</span>
      </div>
    );
  }
}

Dictaphone.propTypes = propTypes;
export default SpeechRecognition(Dictaphone);
