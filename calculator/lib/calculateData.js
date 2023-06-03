const calculator = (operation, numbersArr) => {
  switch (operation) {
    case "sum":
      return numbersArr.reduce((acc, index) => acc + index);
    case "sub":
      return numbersArr.reduce((acc, index) => acc - index);
    case "mult":
      return numbersArr.reduce((acc, index) => acc * index);
    case "div":
      return numbersArr.reduce((acc, index) => acc / index);

    default:
      return "невідомий тип операції";
  }
};

module.exports = calculator;
