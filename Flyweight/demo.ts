import {SoldierAcademy} from './SoldierAcademy'

const start = Math.floor(Date.now());
for (let i = 0; i < 100; i++) {
  // new Soldier('normal-set', i); // create 1m real soldiers
  SoldierAcademy.getSoldier('normal-set', i); // create 1 soldier
}
const end = Math.floor(Date.now());
console.log(end - start);