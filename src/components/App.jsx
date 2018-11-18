import React, { Component } from "react";
import Header from "./Header";
import Headline from "./Headline";
import Cardboard from "./Cardboard";
import Footer from "./Footer";

class App extends Component {
  state = {
    cards: []
  };
  generateCardBoard = () => {
    const symbols = [
      { icon: "fas fa-apple-alt", color: "firebrick" },
      { icon: "fas fa-atom", color: "blue" },
      { icon: "fas fa-award", color: "darkgoldenrod" },
      { icon: "fas fa-bell", color: "black" },
      { icon: "fas fa-sun", color: "goldenrod" },
      { icon: "fas fa-bolt", color: "cadetblue" },
      { icon: "fas fa-bomb", color: "black" },
      { icon: "fas fa-cannabis", color: "mediumseagreen" },
      { icon: "far fa-grin-alt", color: "slateblue" },
      { icon: "fas fa-crown", color: "goldenrod" },
      { icon: "fas fa-dice-five", color: "white" },
      { icon: "far fa-eye", color: "black" },
      { icon: "fas fa-feather", color: "white" },
      { icon: "fas fa-fist-raised", color: "black" },
      { icon: "fas fa-flask", color: "darkcyan" },
      { icon: "fas fa-ghost", color: "white" },
      { icon: "fas fa-gift", color: "red" },
      { icon: "fas fa-glass-martini-alt", color: "green" }
    ];
    this.setState({
      cards: [...symbols, ...symbols].sort(() => Math.random() - 0.5)
    });
  };
  componentWillMount() {
    this.generateCardBoard();
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Headline />
        <Cardboard cards={this.state.cards} />
        <Footer />
      </div>
    );
  }
}

export default App;
