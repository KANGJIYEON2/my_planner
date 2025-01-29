let generateRandomNum = function (min, max) {
  let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randNum;
};

export default generateRandomNum;
