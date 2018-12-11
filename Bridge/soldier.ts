import {IExecutive} from './IExecutive'
export class Soldier implements IExecutive {
    operate(): void {
      console.log('Shoot');
    }
  }
  