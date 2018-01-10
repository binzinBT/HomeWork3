"use strict";
class Room {
  constructor(name, id) {
    this._name = name;
    this._id = id;
    this._listDevice = [];
  }

  addDevice (device) {
    this._listDevice.push(device);
  };

  getNameRoom () {
    return this._name;
  };

  getIdRoom () {
    return this._id;
  };
}