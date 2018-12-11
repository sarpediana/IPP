import {CoffeeExtraDecorator }from './coffeeExtraDecorator'
export class MilkDecorator extends CoffeeExtraDecorator {
    private _price: Number = 2.5;
    private _freshExtra: Number = 1.5;
  
    cost(): Number {
      return super.cost().valueOf() + this._price.valueOf() + this._freshExtra.valueOf();
    }
  }