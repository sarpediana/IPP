import { IPhone } from './IPhone'
import { Android } from './IAndroid'

export class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB() {
        console.log('Want to use micro USB, converting...');
        this.iphoneDevice.useLightning();
    }
}