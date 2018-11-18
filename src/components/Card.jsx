import React from "react";

const Card = ({ index, card, onCardClick }) => {
  const style = {
    // backgroundColor: card.revealed ? "#f0ad4e" : "#bbb",
    // backgroundColor: card.revealed ? "#FFD26D" : "#bbb",
    // backgroundColor: card.revealed ? "#f3bc42" : "#bbb",
    // backgroundColor: card.revealed ? "#F35342" : "#bbb",
    // backgroundColor: card.revealed ? "#FF7B6D" : "#bbb",
    backgroundColor: card.revealed ? "#465A72" : "#bbb",
    // borderColor: card.revealed ? "#f3bc42" : "#999",
    // borderColor: card.revealed ? "#F35342" : "#999",
    borderColor: card.revealed ? "#465A72" : "#999",
    opacity: card.revealed ? 0.8 : 1
  };
  return (
    <div className="card" style={style} onClick={() => onCardClick(index)}>
      <i
        className={card.icon}
        style={{
          color: card.revealed ? "white" : "transparent"
        }}
      />
    </div>
  );
};

export default Card;
