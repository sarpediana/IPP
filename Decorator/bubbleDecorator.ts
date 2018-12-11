import { CoffeeExtraDecorator } from './coffeeExtraDecorator'

export class BubbleDecorator extends CoffeeExtraDecorator {
    private _price: Number = 3;

    cost(): Number {
        return super.cost().valueOf() + this._price.valueOf();
    }
}
