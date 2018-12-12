import { Android} from './IAndroid'

class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}