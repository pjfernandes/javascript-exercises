const reverseString = function(str) {
  let array = [];
  str_array = str.split("");
  str_array.forEach((element) => {
    array.unshift(element);
  });
  return array.join("");
};

// Do not edit below this line
module.exports = reverseString;
