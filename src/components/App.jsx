import React, { Component } from "react";
import Header from "./Header";
import Headline from "./Headline";
import Cardboard from "./Cardboard";
import Footer from "./Footer";
import fontAwesomeCards from "../cards/cards";

class App extends Component {
  state = {
    cards: []
  };
  generateCardBoard = () => {
    const faCards = fontAwesomeCards;
    this.setState({
      cards: [...faCards, ...faCards]
        .map(card => ({ icon: card.icon, revealed: false }))
        .sort(() => Math.random() - 0.5)
    });
  };
  handleCardClick = index => {
    console.log(`card ${index} clicked`);
  };
  componentWillMount() {
    this.generateCardBoard();
  }
  render() {
    return (
      <div className="app">
        <Header reset={this.generateCardBoard} />
        <Headline />
        <Cardboard
          cards={this.state.cards}
          onCardClick={this.handleCardClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
