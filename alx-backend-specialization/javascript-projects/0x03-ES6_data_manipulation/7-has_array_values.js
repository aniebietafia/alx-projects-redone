/*
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set (Set) and an array (Array).
*/

const hasValuesFromArray = (setValues, arrValues) => {
  return arrValues.every((value) => setValues.has(value));
};

export default hasValuesFromArray;
