export default class HolbertonCourse {
    constructor(name, length, students) {

        if (typeof this.name !== "string") throw TypeError(`Name should be a string`);

        if (typeof Number(this.length) !== "number") throw TypeError(`Name should be a number`);

        if (!Array.isArray(this.students)) throw TypeError(`Students should be an array.`);

        for (const student of students) {
            if (typeof student !== "string") throw TypeError("Student must be an array of strings");
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    // getter and setter for name
    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== "string") throw TypeError("Name should be a string");
        this._name = newName;
    }

    // getter and setter for length
    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof Number(newLength) !== "number") throw TypeError("Length should be a number");
        this._length = newLength;
    }

    // getter and setter for students
    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (!Array.isArray(newStudents)) throw TypeError("Students must be an array.");
        for (const student of newStudents) {
            if (typeof student !== "string") throw TypeError("Student must be an array of strings.");
        }
        this._students = newStudents;
    }
}
