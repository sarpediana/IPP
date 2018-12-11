"use strict";
exports.__esModule = true;
var LightningToMicroUSBAdapter_1 = require("./Clases/LightningToMicroUSBAdapter");
var Iphone_1 = require("./Clases/Iphone");
var iphone = new Iphone_1.iPhone();
var chargeAdaptor = new LightningToMicroUSBAdapter_1.LightningToMicroUSBAdapter(iphone);
chargeAdaptor.useMicroUSB();
