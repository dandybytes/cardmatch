import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Headline from "./Headline";
import Cardboard from "./Cardboard";
import "../styles/App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Header />
        <Headline />
        <Cardboard />
        <Footer />
      </div>
    );
  }
}

export default App;
