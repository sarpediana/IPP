import { Android} from '../Interface/IAndroid'

class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}