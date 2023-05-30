import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// import About from './components/About';
import './App.css';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toogleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#050505d1";
      document.body.style.color = "white";
      setText("Light");
      setMode("dark");
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setText("Dark")
      setMode("light");
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toogle={toogleMode} btnText={text} />
        <Alerts alert={alert} />
        <div className="container my-3">
        <TextForm heading="Enter the Text" mode={mode}/>
          {/* <Routes>
            <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm heading="Enter the Text" mode={mode} greenMode={greenMode} />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
