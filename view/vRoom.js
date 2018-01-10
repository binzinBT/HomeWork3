"use strict";
class ViewRoom {
  constructor (room, rootId) {
    this._room = room;
    this._rootId = rootId;
  }
  render () {
    let self = this;
    //  idUnitDevice let for unit device in room
    let idUnitDevice = this._room.getIdRoom() * 100;

    // _indexDevNext let for index next device;
    let _indexDevNext = (idUnitDevice === 100) ? 4 : 1;

    let room = document.createElement("div");
    room.className = "room";
    room.setAttribute("id", this._room.getIdRoom());

    let cPanelRoom = document.createElement("div");
    cPanelRoom.className = "cPanelRoom";

    let nameR = document.createElement("p");
    nameR.setAttribute("id", "nrp");
    nameR.innerHTML = this._room.getNameRoom();
    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "nrd");
    nameDiv.appendChild(nameR);
    cPanelRoom.appendChild(nameDiv);

    let unitDevice = document.createElement("div");
    unitDevice.className = "unitDevice";
    unitDevice.setAttribute("id", idUnitDevice);

    // Button add illumination
    let illuminBtn = document.createElement("button");
    illuminBtn.innerHTML = `<img src="./img/lamp.png" >`;
    illuminBtn.className = "btn";
    illuminBtn.addEventListener("click", () => {
      let msg = prompt("Введите название освещения", "главное");
      if ((msg != "") && (msg != null)) {
        let load = new DeviceLoad(0, 100);
        let idDevise = idUnitDevice + _indexDevNext++;
        let illumDev = new Illumination(msg, load);
        let viewIllumDev = new ViewIllumination(illumDev, idDevise, idUnitDevice);
        self._room.addDevice(viewIllumDev);
        viewIllumDev.render();
      }
    });
    cPanelRoom.appendChild(illuminBtn);

    //Button add TV
    let tvBtn = document.createElement("button");
    tvBtn.innerHTML = `<img src="./img/tv48.png" >`;
    tvBtn.className = "btn";
    tvBtn.addEventListener("click", () => {
      let msg = prompt("Введите название TV", "СОНЯ");
      if ((msg != "") && (msg != null)) {
        let programs = new Programs(tvProgramsList);
        let volume = new Volume(100);
        let idDevise = idUnitDevice + _indexDevNext++;
        let tvDev = new Tv(msg, programs, volume);
        let viewTvDev = new ViewTv(tvDev, idDevise, idUnitDevice);
        self._room.addDevice(viewTvDev);
        viewTvDev.render();
      }
    });
    cPanelRoom.appendChild(tvBtn);

    //Button add Radio
    let mp3Btn = document.createElement("button");
    mp3Btn.innerHTML = `<img src="./img/radio48.png" >`;
    mp3Btn.className = "btn";
    mp3Btn.addEventListener("click", () => {
      let msg = prompt("Введите название радио", "МОЁ радио");
      if ((msg != "") && (msg != null)) {
        let programs = new Programs(fmStation);
        let volume = new Volume(100);
        let idDevise = idUnitDevice + _indexDevNext++;
        let radioDev = new Radio(msg, programs, volume);
        let viewRadioDev = new ViewRadio(radioDev, idDevise, idUnitDevice);
        self._room.addDevice(viewRadioDev);
        viewRadioDev.render();
      }
    });
    cPanelRoom.appendChild(mp3Btn);

    //button remove room
    let delRoomDiv = document.createElement("div");
    delRoomDiv.className = "delRoomDiv";

    let delRoomBtn = document.createElement("a");
    delRoomBtn.type = "a";
    delRoomBtn.innerHTML = " УДАЛИТЬ КОМНАТУ ";
    delRoomBtn.className = "delElem";
    delRoomBtn.addEventListener("click", () => {
      if (confirm("Вы действительно хотите удалить комнату")) {
        VIEW_HOUSE._house.removeRoom(self._room.getNameRoom());
        let r = document.getElementById(self._room.getIdRoom());
        r.parentNode.removeChild(r);
      }
    });

    delRoomDiv.appendChild(delRoomBtn);
    cPanelRoom.appendChild(delRoomDiv);

    room.appendChild(cPanelRoom);
    room.appendChild(unitDevice);
    document.getElementById(this._rootId).appendChild(room);
  };
}