import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const newCar = new this.constructor();
    for (const key in this) {
      newCar[key] = this[key];
    }
    return newCar;
  }
}
