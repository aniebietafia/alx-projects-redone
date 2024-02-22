export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;

        if (typeof this._name !== "string"){
            throw new Error(`${this._name} should be a string`);
        }

        if (typeof Number(this._length) !== "number") {
            throw new Error(`${this._length} should be a number`);
        }

        if (!Array.isArray(students)) {
            throw new Error(`${this._students} is not an array.`);
        }
    }
}
