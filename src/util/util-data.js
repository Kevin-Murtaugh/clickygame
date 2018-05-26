// Image paths needs to be in relation to index.html file
const imagePaths = {
  beth: "../assets/beth.png",
  birdperson: "../assets/birdperson.png",
  evilmorty: "../assets/evilmorty.png",
  gianthead: "../assets/gianthead.png",
  goldenford: "../assets/goldenford.png",
  jerry: "../assets/jerry.png",
  jessica: "../assets/jessica.png",
  meeseeks: "../assets/meeseeks.png",
  morty: "../assets/morty.png",
  mr: "../assets/mr.png",
  rick: "../assets/rick.png",
  summer: "../assets/summer.png"
};

const initialCharacters = Object.keys(imagePaths).map(key => ({
  name: key,
  imageURL: imagePaths[key],
  clicked: false
}));

module.exports = initialCharacters;
