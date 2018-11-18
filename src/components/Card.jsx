import React from "react";
import "../styles/Card.css";

const Card = ({ icon, color }) => {
  return (
    <div className="card">
      <i className={icon} />
    </div>
  );
};

export default Card;
