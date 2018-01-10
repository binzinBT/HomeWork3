"use strict";

class Tv extends Power {
  constructor (name, programs, volume) {
    super();
    this._name = name;
    this._programs = programs;
    this._volume = volume;
  }

  getName () {
    return this._name;
  };

  // List programs
  channelNext () {
    this._programs.programNext();
  };

  channelPrev () {
    this._programs.programPrev();
  };

  getChannel () {
    this._programs.getProgramIndex();
  };

  setChannel (newChannelID) {
    this._programs.setProgramIndex(newChannelID);
  };

  getListPrograms () {
    return this._programs.getListPrograms();
  };

  // Volume
  volUp () {
    this._volume.volumeUp();
  };

  volDown () {
    this._volume.volumeDown();
  };

  setVol (val) {
    this._volume.setVolume(val);
  };

  getCurVolume () {
    return this._volume.getCurrentVolume();
  };

  getMaxVolume () {
    return this._volume.getMaxVolume();
  };

  mute (bool) {
    return this._volume.mute(bool);
  };
}