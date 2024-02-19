export default function appendToEachArrayValue(array, appendString) {
    const result = [];  
  for (const item of array) {
    const value = `${appendString}${item}`;
    result.push(value);
    }

  return result;
}
