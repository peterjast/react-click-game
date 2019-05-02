import "./App.css";
import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import tiles from "./tiles.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isGuessCorrect: true,
      tiles: tiles,
      score: 0,
      maxScore: 12,
      topScore: 0,
      message: "Click an image to begin!"
    };
  }

  handleSaveClick = id => {

    const tilez = this.state.tiles;
   
    const tileClicked = tilez.filter(tile => tile.id === id);
   
    if (!tileClicked[0].clicked) {
      tileClicked[0].clicked = true;
      this.handleCorrectClick();
      this.randomizeItems(tilez);
      this.setState({ tilez });
    } else {
      this.handleIncorrectClick();
    }
  };

  randomizeItems = items => {
    items.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "CONGRATS! YOU WIN!",
        messageClass: "correct"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!",
        messageClass: "correct"
      });
    }
  };

  handleIncorrectClick = () => {
    this.setState({
      message: "Wrong choice... Play again?",
      isGuessCorrect: false
    });
    this.resetGame();
  };

  resetGame = id => {
    const tilez = this.state.tiles;
    for (let i = 0; i < tilez.length; i++) {
      tilez[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  render() {
    const { message, score, tiles, topScore } = this.state;
    return (
      <div className="fluid-container lodge h-100vh">
        <Navbar
          className="row"
          score={score}
          topScore={topScore}
          message={message}
        />
        <Header className="bg-header row" />

        <div className="d-flex justify-content-center main-content mx-auto padding-main flex-wrap row">
          {tiles.map(({ id, name, image, clicked }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              clicked={clicked}
              clickHandler={this.handleSaveClick}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;