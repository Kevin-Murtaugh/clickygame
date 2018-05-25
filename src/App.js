import React, { Component } from "react";
import Card from "./card";

// Write a function that takes an array of objects and shffules it

const getRandomNumber = upper => Math.floor(Math.random() * upper);

const shuffleArray = array => {
  let shuffledArray = [];
  let length = array.length;
  let randomNumber;
  let tempObj;
  while (shuffledArray.length !== length) {
    // generate a random number between 0 and array.length
    randomNumber = getRandomNumber(array.length);
    tempObj = array.splice(randomNumber, 1)[0];
    shuffledArray.push(tempObj);
  }
  return shuffledArray;
};

[2][(3, 7, 4, 2)];

const imageUrls = {
  rick:
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Rick_and_Morty_characters_-_Rick_Sanchez.jpg/110px-Rick_and_Morty_characters_-_Rick_Sanchez.jpg",
  morty:
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Rick_and_Morty_characters_-_Morty_Smith.jpg/110px-Rick_and_Morty_characters_-_Morty_Smith.jpg",
  beth:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Rick_and_Morty_characters_-_Beth_Smith.jpg/110px-Rick_and_Morty_characters_-_Beth_Smith.jpg",
  jerry:
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Rick_and_Morty_characters_-_Jerry_Smith.jpg/110px-Rick_and_Morty_characters_-_Jerry_Smith.jpg"
};

const styles = {
  nav: {
    height: "40px",
    background: "magenta",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px"
  },

  cardContainer: {
    display: "flex"
  },

  card: {
    margin: "10px",
    border: "2px solid red"
  }
};

const initialCharacters = [
  {
    name: "Rick",
    imageURL: imageUrls.rick,
    clicked: false
  },
  {
    name: "Morty",
    imageURL: imageUrls.morty,
    clicked: false
  },
  {
    name: "Beth",
    imageURL: imageUrls.beth,
    clicked: false
  },
  {
    name: "Jerry",
    imageURL: imageUrls.jerry,
    clicked: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navText: "Click an image to begin!",
      score: 0,
      topScore: 0,
      characters: initialCharacters.map(character =>
        Object.assign({}, character)
      )
    };

    this.makeCard = this.makeCard.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  onCardClick(name) {
    // When a card is clicked, there are two situation

    // 1. The card is clicked for the first time
    let allChars = this.state.characters;

    let clickedCharacter = allChars.find(character => character.name === name);

    if (clickedCharacter.clicked) {
      // Game Over
      this.setState({
        score: 0,
        characters: initialCharacters
      });
    } else {
      // Mark the character as clicked and increase the score by 1
      clickedCharacter.clicked = true;
      this.setState(
        {
          score: this.state.score + 1,
          characters: allChars
        },
        () => {
          this.shuffle();
        }
      );
    }

    // 2. The card is clicked for the second time
    // Game Over
    // Reset the score
    // Shuffle the cards
  }

  makeCard(character, key) {
    return (
      <Card
        key={key}
        image={character.imageURL}
        name={character.name}
        onCardClick={this.onCardClick}
      />
    );
  }

  shuffle() {
    let shuffledCharacters = shuffleArray(this.state.characters);
    console.log(shuffledCharacters);
    this.setState({
      characters: shuffledCharacters
    });
  }

  render() {
    return (
      <div className="App">
        <nav style={styles.nav}>
          <span>Clicky Game</span>
          <span>{this.state.navText}</span>
          <span>Score: {this.state.score}</span>
          <span>Top Score: {this.state.topScore}</span>
        </nav>
        <ul className="cards-container" style={styles.cardContainer}>
          {this.state.characters.map((character, i) =>
            this.makeCard(character, i)
          )}
        </ul>
        <button onClick={this.shuffle}>Shuffle</button>
      </div>
    );
  }
}

export default App;
