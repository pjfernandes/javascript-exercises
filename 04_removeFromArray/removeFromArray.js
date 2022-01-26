const removeFromArray = function(array, item) {
  let items = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      continue;
    } else {
      items.push(array[i]);
    }
  }
  return items;
};

// Do not edit below this line
module.exports = removeFromArray;
