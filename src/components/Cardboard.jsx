import React from "react";
import Card from "./Card";

const Cardboard = ({ cards, onCardClick }) => {
  return (
    <div className="card-board">
      {cards.map((card, i) => (
        <Card key={i} index={i} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default Cardboard;
