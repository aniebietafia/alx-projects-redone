export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        const NewObject = this.constructor[Symbol.species] || this.constructor;
        const clone = new NewObject();
        return clone;
    }
}
