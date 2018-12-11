import { GeneralCoffee } from './generalCoffee'
import { BubbleDecorator } from './bubbleDecorator'
import { MilkDecorator } from './milkDecorator'

const general = new GeneralCoffee();
const withBubble = new BubbleDecorator(general);
const withMilk = new MilkDecorator(withBubble);
console.log(`Total: ${withMilk.cost()}`);