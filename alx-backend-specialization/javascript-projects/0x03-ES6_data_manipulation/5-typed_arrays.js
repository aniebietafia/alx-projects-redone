/*
Typed Arrays:
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: length (Number), position (Number), and value (Number). If adding the value is not possible the error Position outside range should be thrown.
*/

const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position > length - 1) {
    throw new Error("Position outside range.");
  }

  view.setInt8(position, value);
  return view;
};

export default createInt8TypedArray;
