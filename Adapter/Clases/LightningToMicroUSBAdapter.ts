import { IPhone } from '../Interface/IPhone'
import { Android } from '../Interface/IAndroid'

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