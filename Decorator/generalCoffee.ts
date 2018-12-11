import { ICoffee } from './ICoffee'
export class GeneralCoffee implements ICoffee {
    cost(): Number {
        return 10;
    }
}