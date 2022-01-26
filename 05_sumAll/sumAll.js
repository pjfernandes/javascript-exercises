const sumAll = function(min, max) {

  let array = [];
  let j = 1;
  for (let i = 0; i < max; i++) {

    array[i] = j;
    j++;
  };

  let sum = 0;
  array.forEach(element => {
    sum = sum + element;
  });
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
