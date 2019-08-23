import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import "./App.css";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  recognition: PropTypes.object
};

const Dictaphone = ({ transcript, resetTranscript, browserSupportsSpeechRecognition, recognition }) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  } else {
    recognition.lang = "en-US";
    // recognition.lang = "fa-IR";
    // recognition.lang = "en-GB";
  }

  // Doesn't work at the moment
  // if (transcript.includes("switch to Persian")) {
  //   recognition.lang = "fa-IR";
  //   console.log(recognition.lang);
  // }

  return (
    <div className="container">
      <button onClick={resetTranscript}>Reset</button>
      <p>
        <span>{transcript}</span>
      </p>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
