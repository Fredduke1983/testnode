const data = process.argv.slice(2);
const [operator, ...args] = data;
const numbers = args.map((el) => Number(el));

module.exports = { operator, numbers };
