import React from "react";
import "./App.css";
import ImagesContainer from "./components/Images";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <ImagesContainer />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
