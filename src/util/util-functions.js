const getRandomNumber = upper => Math.floor(Math.random() * upper);

const shuffleArray = array => {
  array = array.slice(0); // Make a deep copy of original array to avoid mangling
  let shuffledArray = [];
  let length = array.length;
  while (shuffledArray.length !== length) {
    shuffledArray.push(array.splice(getRandomNumber(array.length), 1)[0]);
  }
  return shuffledArray;
};

//This will deep clone an array of objects(Objects should NOT be nested)
const deepClone = arrayOfObjects =>
  arrayOfObjects.map(object => Object.assign({}, object));

module.exports = {
  shuffleArray,
  deepClone
};
