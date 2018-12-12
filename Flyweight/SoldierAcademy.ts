import { Soldier} from './Soldier'

export class SoldierAcademy {
    private static groups: { [set: string]: Soldier } = {}
  
    public static getSoldier(set: string, num: number) {
      let soldier = SoldierAcademy.groups[set];
  
      if (!soldier) {
        soldier = new Soldier(set, num);
        SoldierAcademy.groups[set] = soldier;
      } else {
        soldier.number = num;
        console.log(`shared soldier ${soldier.number}`);
      }
  
      return soldier;
    }
  }