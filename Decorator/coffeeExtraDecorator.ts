import { ICoffee } from './ICoffee'
import { GeneralCoffee } from './generalCoffee'

export class CoffeeExtraDecorator implements ICoffee {
    private _coffee: ICoffee;

    constructor(coffee: GeneralCoffee) {
        this._coffee = coffee;
    }

    cost(): Number {
        return this._coffee.cost();
    }
}