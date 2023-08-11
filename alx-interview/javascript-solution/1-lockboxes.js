function canUnlockAll(boxes) {
  let openedBoxes = new Set([0]); //Start with the first box opened
  let keys = [0]; //Start with the first box keys

  while (keys.length > 0) {
    let currentBox = keys.pop(); //Get the last box from the keys array
    for (let key of boxes[currentBox]) {
      if (!openedBoxes.has(key)) {
        openedBoxes.add(key); //Open the box with the key
        keys.push(key); //Add the keys of the box to the keys array
      }
    }
  }
  return openedBoxes.size === boxes.length; //Check if all boxes are opened
}

let boxes = [[1], [2], []]; // Example input: Box 0 has key 1, Box 1 has key 2, Box 2 has no keys
console.log(canUnlockAll(boxes)); // Output: true

boxes = [[1], [2], [0]]; // Example input: Box 0 has key 1, Box 1 has key 2, Box 2 has key 0
console.log(canUnlockAll(boxes)); // Output: true

boxes = [[1], [2], [3]]; // Example input: Box 0 has key 1, Box 1 has key 2, Box 2 has key 3
console.log(canUnlockAll(boxes)); // Output: false

// const lockboxes = function (boxes) {
//   let keys = [0];
//   let unlocked = [0];
//   let box = 0;
//   while (keys.length > 0) {
//     keys = keys.concat(boxes[box]);
//     keys = keys.filter((key) => !unlocked.includes(key));
//     unlocked.push(...keys);
//     keys.shift();
//     box++;
//   }
//   return unlocked.length === boxes.length;
// };
