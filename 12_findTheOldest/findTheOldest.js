const findTheOldest = function(array) {

  let oldest;
  let max = 0;

  array.forEach(element => {
    const life = element.yearOfDeath - element.yearOfBirth;
    if (life > max) {
      max = life;
      oldest = element;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
