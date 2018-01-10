"use strict";
class Illumination extends Power{
  constructor ( name, load) {
    super();
    this._name = name;
    this._load = load;
  }

  getName () {
    return this._name;
  };

  setLoad ( newLoad ) {
    this._load.setDeviceLoad( newLoad );
  };

  getLoad () {
    return this._load.getDeviceLoad();
  };

  loadIncrease () {
    this._load.loadDeviceIncrease();
  };

  loadDecrease () {
    this._load.loadDeviceDecrease();
  };
}
