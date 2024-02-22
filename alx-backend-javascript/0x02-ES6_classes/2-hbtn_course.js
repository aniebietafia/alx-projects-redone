export default class HolbertonCourse {
    constructor(name, length, students) {

        if (typeof name !== "string"){
            throw TypeError(`Name should be a string`);
        }

        if (typeof Number(length) !== "number") {
            throw TypeError(`Name should be a number`);
        }

        if (!Array.isArray(students)) {
            throw TypeError(`Students should be an array.`);
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }
}
