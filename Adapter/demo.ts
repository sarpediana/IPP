import { LightningToMicroUSBAdapter } from './Clases/LightningToMicroUSBAdapter'
import { iPhone } from './Clases/Iphone'

let iphone = new iPhone();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);

chargeAdaptor.useMicroUSB();