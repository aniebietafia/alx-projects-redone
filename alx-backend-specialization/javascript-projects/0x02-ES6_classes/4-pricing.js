import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== "number") throw TypeError("amount must be a number");
    if (!(currency instanceof Currency)) throw TypeError("currency must be a Currency");
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== "number") throw TypeError("amount must be a number");
    this._amount = amount;
  }
  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) throw TypeError("currency must be a Currency");
    this._currency = currency;
  }
  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number") throw TypeError("amount must be a number");
    if (typeof conversionRate !== "number") throw TypeError("conversionRate must be a number");
    return amount * conversionRate;
  }
}
