import React from "react";

const Headline = ({ gameWon }) => {
  return (
    <h2 className={gameWon ? "game-won" : "headline"}>
      {gameWon
        ? "Congratulations! You have won!"
        : "Click on a card to reveal its hidden image. Find all matching image pairs to win the game."}
    </h2>
  );
};

export default Headline;
