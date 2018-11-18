import React from "react";

const Header = ({ reset }) => {
  return (
    <header>
      <h1>Card Match</h1>
      <button onClick={reset}>Reset Game</button>
    </header>
  );
};

export default Header;
