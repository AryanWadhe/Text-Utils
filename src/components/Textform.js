// import { hover } from "@testing-library/user-event/dist/hover";
// import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./Textform.css";
export default function(props) {
  const handleUpClick = () => {
    // console.log("You have clicked here" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to upperCase", "success");
  };

  const handleloClick = () => {
    // console.log("You have clicked here" +text)
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowerCase", "success");
  };

  const handleClearClick = () => {
    // console.log("On change")
    let newtext = "";
    setText(newtext);
    props.showAlert("text cleared", "danger");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "info");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is removed", "dark");
  };

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          Color: props.mode === "dark" ? "white" : "042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div
          className="mb-3"
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "black",
            color: props.mode === "dark" ? "white" : "042743",
          }}
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            // style={{
            //   backgroundColor: props.mode === "dark" ? "black" : "white",
            //   color: props.mode === "dark" ? "black" : "grey"
            // }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        {/* <button id="upcase" className="btn btn-primary mx-2" onClick={handleUpClick}><b>Convert to Uppercase</b></button>
  <button className="btn btn-warning mx-2" onClick={handleloClick}><b>Convert to Lowercase</b></button>
  <button className="btn btn-danger mx-2" onClick={handleClearClick}><b>Clear Text</b></button> */}
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            id="btn-1"
            type="button"
            onClick={handleUpClick}
            className="btn btn-danger"
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            onClick={handleClearClick}
            className="btn btn-warning"
          >
            Clear Text
          </button>
          <button
            type="button"
            onClick={handleloClick}
            className="btn btn-success"
          >
            Convert to Lowercase
          </button>
          <button type="button" onClick={handleCopy} className="btn btn-info">
            Copy Text
          </button>
          <button
            type="button"
            onClick={handleExtraSpaces}
            className="btn btn-dark"
          >
            Remove Extra Spaces
          </button>

          {/* <div> */}
          {/* <button 
            type="button"
            onClick={handleCopy}
            className="btn btn-primary mx-1"
          >
            Copy Text
          </button> */}
          {/* <button 
            type="button"
            onClick={handleExtraSpaces}
            className="btn btn-primary mx-1"
          >
            Remove Extra Spaces
          </button> */}
          {/* </div> */}
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "black" : "white",
          // style.Color:"black"

          // ,color:"white",
          // color: props.mode === "light" ? "white" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} <b>Words</b> {text.length} <b> characters</b>
        </p>
        <p>
          {0.008 * text.split(" ").length} <i>Reading time</i>
        </p>
        <h2>Preview</h2>
        {text.length > 0 ? text : "Enter something to preview"}
      </div>
    </>
  );
}
