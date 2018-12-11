import {Commander} from './commander'
export class SpecialForceCommander extends Commander {
    order(): void {
      console.log('Special Force commander make order')
      // extra logics here
      super.order();
    }
  }