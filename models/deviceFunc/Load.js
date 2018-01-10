"use strict";

// Нагрузка на устройство
class DeviceLoad {
  constructor ( minLoad, maxLoad ) {
    this._minLoad = Insp.checkNum( minLoad );
    this._maxLoad = Insp.checkPositiveNum ( maxLoad );
    this._curDeviceLoad = 0;
  }

  setDeviceLoad ( curLoad ) {
    if ( ( Insp.checkNum(curLoad) )
      && ( curLoad <= this._maxLoad )
      && ( curLoad >= this._minLoad ) ){
      this._curDeviceLoad = curLoad;
    }
  };

  getDeviceLoad () {
    return this._curDeviceLoad;
  };

  loadDeviceIncrease () {
    if ( this._curDeviceLoad < this._maxLoad ) {
      ++this._curDeviceLoad;
    }
  };

  loadDeviceDecrease () {
    if ( this._curDeviceLoad > this._minLoad ) {
      --this._curDeviceLoad;
    }
  };
}
