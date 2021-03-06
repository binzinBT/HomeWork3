"use strict";
class House {
  constructor () {
    this._name = "My house";
    this._listRoom = [];
  }

  addRoom (obj) {
    this._listRoom.push(obj);
  };

  removeRoom (nameRoom) {
    /*for (let i = 0; i < this._listRoom.length; i++){
      if (this._listRoom[i]._room._name === nameRoom){
        this._listRoom.splice( i, 1);
        break;
      }
    }*/
    this._listRoom = this._listRoom.filter((elem)=>{return  elem._room._name !== nameRoom});
  };

  removeDevice (idRoom, idDevice) {
    /*for (let i = 0; i < this._listRoom.length; i++){
      if (this._listRoom[i]._room._id === idRoom){
        for (let j = 0; j < this._listRoom[i]._room._listDevice.length; j++){
          if (this._listRoom[i]._room._listDevice[j]._id === idDevice){
            this._listRoom[i]._room._listDevice.splice(j, 1);
            break;
          }
        }
        break;
      }
    }*/

    this._listRoom.forEach((item) => {
      if (item._room.getIdRoom() === idRoom) {
        item._room._listDevice = item._room._listDevice.filter((elem) => {
          return elem._id !== idDevice;
        });
      }
    });

  };

}

