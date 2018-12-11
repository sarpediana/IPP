
import {Pilot} from './pilot'
import {Soldier} from './soldier'
import {SpecialForceCommander} from './specialForceCommander'
import {AirForceCommander} from './airForceCommander'

const commanderA = new AirForceCommander(new Pilot());
const commanderB = new SpecialForceCommander(new Soldier());

  commanderA.order();
  commanderB.order();
