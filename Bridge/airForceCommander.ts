import {Commander} from './commander'
export class AirForceCommander extends Commander {
    order(): void {
      console.log('Air Force commander make order')
      // extra logics here
      super.order();
    }
  }