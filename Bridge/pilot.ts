import {IExecutive} from './IExecutive'
export class Pilot implements IExecutive {
    operate(): void {
      console.log('Fly');
    }
  }
  