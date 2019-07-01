import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: 0,
      image: this.props.value
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    if (this.state.clicked < 1) {
      this.setState({ clicked: this.state.clicked + 1 });
    } else {
      console.log("You lose!");
    }
  }
  render() {
    return (
      <div className="col-md-3 col-sm-4 col-xs-6">
        <img
          className="images"
          onClick={this.setNewNumber}
          key={this.image}
          src={require(`../images/${this.state.image}.png`)}
          alt=""
        />
        <Content myNumber={this.state.clicked} />
      </div>
    );
  }
}

class ImagesContainer extends React.Component {
  render() {
    var arr = [
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
    return (
      <div className="row">
        {arr.map(item => (
          <Item key={item} value={item} />
        ))}
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default ImagesContainer;
