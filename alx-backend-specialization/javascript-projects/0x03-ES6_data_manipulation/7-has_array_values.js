/*
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set (Set) and an array (Array).
*/

const hasValuesFromArray = (set, array) => {
  return array.every((item) => set.has(item));
};

export default hasValuesFromArray;
