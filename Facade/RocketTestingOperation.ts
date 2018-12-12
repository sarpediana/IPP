import {OxygenSystem} from './OxygenSystem'
import {EngineSystem} from './EngineSystem'
import {MonitorSystem} from './MonitorSystem'

export class RocketTestingOperation {

    private _engineSys: EngineSystem;
    private _monitorSys: MonitorSystem;
    private _oxygenSys: OxygenSystem;
  
    constructor() {
      this._engineSys = new EngineSystem();
      this._monitorSys = new MonitorSystem();
      this._oxygenSys = new OxygenSystem();
    }
  
    operationStart() {
      this._monitorSys.check();
      this._oxygenSys.generate();
      this._engineSys.activate();
  
    }
  }