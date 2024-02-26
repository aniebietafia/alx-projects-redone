export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    // getter and setter for code
    get code() {
        return this._code;
    }

    set code(newCode) {
        if (typeof newCode !== "string") throw new Error("Code must be a string");
        this._code = newCode;
    }

    // getter and setter for name
    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== "string") throw new Error("Name must be a string");
        this._name = newName;
    }

    static displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
