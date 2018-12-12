import { LightningToMicroUSBAdapter } from './LightningToMicroUSBAdapter'
import { iPhone } from './IphoneClass'

let iphone = new iPhone();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);

chargeAdaptor.useMicroUSB();