import React from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import PhotoHolder from "./components/PhotoHolder";

function App() {
  return (
    <div className="App">
      <ErrorMessage />
      <PhotoHolder />
    </div>
  );
}

export default App;
