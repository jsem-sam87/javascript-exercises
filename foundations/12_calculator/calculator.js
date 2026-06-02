const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numArray) {
  return numArray.reduce((sum, addSum) => sum + addSum, 0); 
};

const multiply = function(numArray) {
  return numArray.reduce((sum, addSum) => sum * addSum); 
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let res = 1;
  
	for (let i = num; i > 0; i--)
  {
    res *= i;
  }
  return res;
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
