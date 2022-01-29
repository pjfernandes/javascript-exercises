const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a - b;

};

const sum = function(array) {
  const sum = array.reduce((total, element) => {
    return total + element;
  }, 0);
  return sum;
};

const multiply = function(array) {
  let prod = 1;
  array.forEach(element => {
    prod = prod * element;
  });
  return prod;
};

const power = function(a, b) {
  return a**b;

};

const factorial = function(num) {
  if (num === 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
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
