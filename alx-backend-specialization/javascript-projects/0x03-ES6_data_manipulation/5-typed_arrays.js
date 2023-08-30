/*
Typed Arrays:
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position. It should accept three arguments: length (Number), position (Number), and value (Number). If adding the value is not possible the error Position outside range should be thrown.
*/

const createInt8TypedArray = (length, position, value) => {
  const buff = new ArrayBuffer(length);
  const view = new DataView(buff);
  if (position > length - 1) {
    throw Error("Position outside range");
  }
  view.setInt8(position, value);
  return view;
};
