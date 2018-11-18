import React from "react";

const Card = ({ index, card, onCardClick }) => {
  const style = {
    borderColor: card.revealed ? "coral" : "#999"
  };
  return (
    <div className="card" style={style} onClick={() => onCardClick(index)}>
      <i
        className={card.icon}
        style={{ color: card.revealed ? "coral" : "#999" }}
      />
    </div>
  );
};

export default Card;
