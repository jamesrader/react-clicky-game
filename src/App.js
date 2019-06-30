import React from "react";
import "./App.css";

function clickHandler(event) {
  console.log(event.target.src);
}

function App() {
  const images = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "img7",
    "img8",
    "img9",
    "img10",
    "img11",
    "img12"
  ];
  const listItems = images.map(image => (
    <div onClick={clickHandler} class="col-md-3 col-sm-4 col-xs-6">
      <img className="images" src={require(`./images/${image}.png`)} alt="" />
    </div>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">{listItems}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
