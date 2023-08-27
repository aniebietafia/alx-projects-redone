export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }
  set code(newCode) {
    if (typeof newCode !== "string") {
      throw new TypeError("Code must be a string");
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Name must be a string");
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
