"use strict";
exports.__esModule = true;
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log('Want to use micro USB, converting...');
        this.iphoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
exports.LightningToMicroUSBAdapter = LightningToMicroUSBAdapter;
