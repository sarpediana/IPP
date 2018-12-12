import {IAction} from './IAction'

export class Soldier implements IAction {

    private equipmentSet: string;
    number: number;
  
    constructor(set: string, number: number) {
      // initialization consumes time
      this.equipmentSet = set;
      this.number = number;
      console.log(`new soldier ${number}`);
    }
  
    move(location: [number, number]): void {
      console.log(`move to ${location}`)
    }
  
    shoot?(target: string, location: [number, number]): void {
      console.log(`damage ${target} at ${location}`);
    }
  
    cure?(mate: string, location: [number, number]): void {
      console.log(`cure ${mate} at ${location}`);
    }
  }