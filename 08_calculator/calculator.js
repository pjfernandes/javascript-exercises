const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;

};

const sum = function(array) {
  const sum = array.reduce((total, element) => {
    return total + element;
  }, undefined);
  return sum;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
  return a**b;

};

const factorial = function() {

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
