const add = function(operandOne, operandTwo) {
	return (operandOne + operandTwo);
};

const subtract = function(operandOne, operandTwo) {
	return (operandOne - operandTwo);
};

const sum = function(inputNumbers) {
  let result = 0;
  const sumAll = function (inputNumber) {result += inputNumber};
	inputNumbers.forEach(sumAll);
  return result;
};

const multiply = function(inputNumbers) {
  let product = 1;
  const multiplyAll = function (inputNumber) {product *= inputNumber};
  inputNumbers.forEach(multiplyAll);
  return product;
};

const power = function(baseNumber, exponent) {
	let result = 1
  for (i = 0; i < exponent; i++) {
    result *= baseNumber;
  }
  return result;
};

const factorial = function(inputNumber) {
	let result = 1;
  if (inputNumber === 0) {
    return 1;
  } else if (inputNumber > 0) {
    for (i = 1; i <= inputNumber; i++) {
      result *= i;
    };
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
