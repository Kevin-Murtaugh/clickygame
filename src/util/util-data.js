// Image paths needs to be in relation to index.html file
const imagePaths = {

  pelicanrugby: "../assets/pelicanrugby.png",
  msulogo2: "../assets/msulogo2.png",
  ucflogo: "../assets/ucflogo.png",  
  npmlogo: "../assets/npmlogo.png",
  reactlogo: "../assets/reactlogo.png",
  mongodb2: "../assets/mongodb2.png",
  jslogo: "../assets/jslogo.png",  
  redwings: "../assets/redwings4.png",
  html6logo: "../assets/html6logo.png",
  githublogo: "../assets/githublogo.png",
  sqldblogo: "../assets/sqldblogo.png",
  phplogo: "../assets/phplogo.png"

  //Assortment of traditional cartoon characters
//  beth: "../assets/beth.png",
//  birdperson: "../assets/birdperson.png",
//  evilmorty: "../assets/evilmorty.png",
 // gianthead: "../assets/gianthead.png",
//  goldenford: "../assets/goldenford.png",
 // jerry: "../assets/jerry.png",
//  jessica: "../assets/jessica.png",
//  meeseeks: "../assets/meeseeks.png",
//  morty: "../assets/morty.png",
//  mr: "../assets/mr.png",
//  rick: "../assets/rick.png",
//  summer: "../assets/summer.png",


};

const initialCharacters = Object.keys(imagePaths).map(key => ({
  name: key,
  imageURL: imagePaths[key],
  clicked: false
}));

module.exports = initialCharacters;
