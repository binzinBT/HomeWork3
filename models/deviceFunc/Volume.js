"use strict";

//Громкость
class Volume {
  constructor (maxVol) {
    this._maxVol = Insp.checkPositiveNum(maxVol);
    this._curVol = 0;
    this._mute = false;
  }

  getCurrentVolume () {
    return this._curVol;
  };

  getMaxVolume () {
    return this._maxVol;
  };

  volumeUp () {
    if (this._curVol < this._maxVol) {
      this._curVol++;
    }
  };

  volumeDown () {
    if (this._curVol > 0) {
      this._curVol--;
    }
  };

  setVolume (value) {
    if (Insp.checkNum(value)) {
      if (( value >= 0 ) && (value <= this._maxVol)) {
        this._curVol = +value;
      }
    }
  };

  mute (bool) {
    if (typeof bool === "boolean") {
      this._mute = bool;
    }
    return this._mute;
  };

}