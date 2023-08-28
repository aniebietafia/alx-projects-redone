export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  // Method that returns the size of the instance
  valueOf() {
    return this._size;
  }
  // Method that returns the location of the instance
  toString() {
    return this._location;
  }
}
