import React, { Component } from "react";
import Card from "./card";
import { Navbar, Nav, NavItem, Grid, Row, Col, Alert } from "react-bootstrap";
import { shuffleArray, deepClone } from "./util/util-functions";

import initialCharacters from "./util/util-data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navText: "Click an image to begin!",
      score: 0,
      topScore: 0,
      characters: deepClone(initialCharacters),
      alertClass: "info"
    };

    this.makeCard = this.makeCard.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  onCardClick(name) {
    let allChars = deepClone(this.state.characters);
    let clickedCharacter = allChars.find(character => character.name === name);

    if (clickedCharacter.clicked) {
      this.setState({
        score: 0,
        characters: deepClone(initialCharacters),
        navText: "You Guessed Incorrectly!",
        alertClass: "danger"
      });
    } else {
      clickedCharacter.clicked = true;
      let topScore = this.state.topScore;
      if (this.state.score + 1 > this.state.topScore) {
        topScore = this.state.score + 1;
      }
      this.setState(
        {
          score: this.state.score + 1,
          topScore,
          characters: allChars,
          navText: "You Guessed Correctly!",
          alertClass: "success"
        },
        () => {
          this.shuffle();
        }
      );
    }
  }

  makeCard(character, key) {
    return (
      <Col xs={12} sm={6} md={4} lg={3} key={key}>
        <Card
          image={character.imageURL}
          name={character.name}
          onCardClick={this.onCardClick}
        />
      </Col>
    );
  }

  shuffle() {
    let shuffledCharacters = shuffleArray(this.state.characters);
    this.setState({
      characters: shuffledCharacters
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">
                <h3>Clicky Game</h3>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <span style={{ color: "#eaeaea" }}>
                  Score: {this.state.score}
                </span>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <span style={{ color: "#eaeaea" }}>
                  Top Score: {this.state.topScore}
                </span>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Alert bsStyle={this.state.alertClass}>
          <div style={{ textAlign: "center", fontSize: "1.5em" }}>
            <strong>{this.state.navText}</strong>
          </div>
        </Alert>;
        <ul className="cards-container">
          <Grid>
            <Row>
              {this.state.characters.map((character, i) =>
                this.makeCard(character, i)
              )}
            </Row>
          </Grid>
        </ul>
      </div>
    );
  }
}

export default App;
