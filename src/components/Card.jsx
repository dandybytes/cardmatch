import React from "react";

const Card = ({ index, card, onCardClick }) => {
  const style = {};
  return (
    <div className="card" onClick={() => onCardClick(index)}>
      <i className={card.icon} />
    </div>
  );
};

export default Card;
