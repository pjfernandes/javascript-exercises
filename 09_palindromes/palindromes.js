const palindromes = function (string) {
  const array = string.toLowerCase().replace(" ", "").replace(/[^\w\s]/gi, "").split("");
  return array == array.reverse() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
