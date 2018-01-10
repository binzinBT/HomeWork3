"use strict";

// power for all device
class Power {
  constructor (){
    this._powerStatus = false;
  }

  powerOn () {
    this._powerStatus = true;
  };

  powerOff () {
    this._powerStatus = false;
  };

  getPowerStatus () {
    return this._powerStatus;
  };
}
