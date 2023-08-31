/*
Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString). It accepts two arguments: a set (Set) and a startString (String). When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -.
*/

const cleanSet = (set, startString) => {
  const newList = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      const newItem = item.slice(startString.length);
      newList.push(newItem);
    }
  }
  return newList.join("-");
};

export default cleanSet;
