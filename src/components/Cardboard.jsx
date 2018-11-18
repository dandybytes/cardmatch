import React from "react";
import Card from "./Card";

const Cardboard = ({ cards }) => {
  return (
    <div className="card-board">
      {cards.map((card, i) => (
        <Card key={i} icon={card.icon} color={card.color} />
      ))}
    </div>
  );
};

export default Cardboard;
