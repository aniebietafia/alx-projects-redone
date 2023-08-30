/*
Create a function named setFromArray that returns a Set from an array.
It accepts an argument (Array, of any kind of element).
*/

const setFromArray = (arrOfNums) => {
  const set = new Set(arrOfNums);
  return set;
};

export default setFromArray;
