const ftoc = function(temp) {
  return (5/9) * (temp - 32);

};

const ctof = function(temp) {
  return (9/5) * temp + 32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
