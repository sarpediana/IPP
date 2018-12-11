import {IExecutive} from './IExecutive'

export class Commander {
    executeObject: IExecutive;
  
    constructor(executeObject: IExecutive) {
      this.executeObject = executeObject;
    }
  
    order(): void {
      this.executeObject.operate();
    }
  }