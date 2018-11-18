import React, { Component } from "react";
import Header from "./Header";
import Headline from "./Headline";
import Cardboard from "./Cardboard";
import Footer from "./Footer";
import fontAwesomeCards from "../cards/cards";

class App extends Component {
  state = {
    cards: [],
    compareCardIndex: null,
    revealedCards: 0
  };

  resetCardBoard = () => {
    const faCards = fontAwesomeCards;
    this.setState({
      compareCardIndex: null,
      revealedCards: 0,
      cards: [...faCards, ...faCards]
        .map(card => ({ icon: card.icon, revealed: false }))
        .sort(() => Math.random() - 0.5)
    });
  };

  revealCard = index => {
    console.log(`revealing card ${index}`);
    const newCards = [...this.state.cards];
    newCards[index].revealed = true;
    this.setState({ cards: newCards });
  };

  hideCard = index => {
    console.log(`hiding card ${index}`);
    const newCards = [...this.state.cards];
    newCards[index].revealed = false;
    this.setState({ cards: newCards });
  };

  wipeCompareCard = () => this.setState({ compareCardIndex: null });

  incrementRevealedCards = () =>
    this.setState(prevState => ({
      revealedCards: prevState.revealedCards + 2
    }));

  handleCardClick = clickedCardIndex => {
    const { cards, compareCardIndex } = this.state;
    if (!cards[clickedCardIndex].revealed) {
      this.revealCard(clickedCardIndex);
      if (compareCardIndex === null) {
        this.setState({ compareCardIndex: clickedCardIndex });
      } else {
        console.log(`clicked card index: ${cards[clickedCardIndex].icon}`);
        console.log(`compare card index: ${cards[compareCardIndex].icon}`);
        if (cards[clickedCardIndex].icon === cards[compareCardIndex].icon) {
          this.incrementRevealedCards();
        } else {
          setTimeout(() => this.hideCard(compareCardIndex), 500);
          setTimeout(() => this.hideCard(clickedCardIndex), 500);
        }
        this.wipeCompareCard();
      }
    }
  };

  componentWillMount() {
    this.resetCardBoard();
  }

  render() {
    return (
      <div className="app">
        <Header reset={this.resetCardBoard} />
        <Headline
          gameWon={this.state.revealedCards === this.state.cards.length}
        />
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
