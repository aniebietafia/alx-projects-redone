export default function appendToEachArrayValue(array, appendString) {
  const output = [];
  for (const idx of array) {
    output.push(`${appendString}-${idx}`);
  }

  return output;
}
