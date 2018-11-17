import React from "react";
import Card from "./Card";
import "../styles/Cardboard.css";

const Cardboard = () => {
  return (
    <div className="card-board">
      {Array(24)
        .fill(1)
        .map((x, i) => (
          <Card key={i} />
        ))}
    </div>
  );
};

export default Cardboard;
