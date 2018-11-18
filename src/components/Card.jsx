import React from "react";

const Card = ({ icon, color }) => {
  return (
    <div className="card">
      <i className={icon} />
    </div>
  );
};

export default Card;
