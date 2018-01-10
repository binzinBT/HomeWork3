"use strict";

// Список программ в устройстве
class Programs {
  constructor (arr) {
    this._currentProgramIndex = 0;
    this._listPrograms = arr;
  }

  programNext () {
    if (this._currentProgramIndex < this._listPrograms.length - 1) {
      this._currentProgramIndex++;
    }
  };

  programPrev () {
    if (this._currentProgramIndex > 0) {
      this._currentProgramIndex--;
    }
  };

  getProgramIndex () {
    return this._currentProgramIndex
  };

  setProgramIndex (progIndex) {
    if (( 0 < progIndex ) && ( progIndex < this._listPrograms.length - 1 )) {
      this._currentProgramIndex = progIndex;
    }
  };

  getListPrograms () {
    return this._listPrograms;
  };
}