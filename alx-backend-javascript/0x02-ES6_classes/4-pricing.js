import Currency from "./3-currency.js";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount = amount;
    }
    set amount(newAmount) {
        if (typeof Number(newAmount) !== "number") throw new Error("Amount should be a number");
        this._amount = Number(newAmount);
    }

    get currency() {
        return this._currency = currency;
    }
    set currency(newCurrency) {
        if (!(newCurrency instanceof Currency)) throw new Error("Currency must be instance of currency.");
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency}`
    }

    static convertPrice(amount, conversionRate) {
        return Number(amount) * Number(conversionRate);
    }
}
