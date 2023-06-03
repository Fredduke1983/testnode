/**
 * node calc.js sum 100 252 51
 * node calc.js sub 50 20 10
 * node calc.js mult 2 3 2
 * node calc.js div 12 4 2
 */

const data = process.argv.slice(2);
const [operator, ...args] = data;
const numbers = args.map((el) => Number(el));

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

const result = calculator(operator, numbers);
console.log(result);
