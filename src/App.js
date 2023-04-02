import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [color, setColor] = useState("light");
  const newMode = () => {
    if (mode === "#FF003F") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("#FF003F");
      document.body.style.backgroundColor = "#FF003F";
      // document.body.style.color = "black";
    }
  };
  const newYMode = () => {
    if (mode === "yellow") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("yellow");
      document.body.style.backgroundColor = "yellow";
      // document.body.style.color = "red";
    }
  };
  const newGMode = () => {
    if (mode === "green") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("green");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "green";
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light" || mode === "yellow") {
      // showAlert("Dark mode has been enabled", "success");
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = "Textutils-Dark";
    } else {
      // showAlert("Light mode has been enabled", "success");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Textutils-Light";
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils" /> */}

      {/* <Navbar/> */}
      <Router>
        <Navbar
          title="Textutils"
          mode={mode}
          toggleMode={toggleMode}
          newMode={newMode}
          newYMode={newYMode}
          newGMode={newGMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About />}></Route>
            <Route
             exact path="/"
              element={
                <Textform showAlert={showAlert} heading="Enter text here" />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
