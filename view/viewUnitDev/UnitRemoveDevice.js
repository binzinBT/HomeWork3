"use strict";
class UnitRemoveDevice {
  constructor(idDevice, nameDevice) {
    // Button remove illumination device
    let delDevice = document.createElement("div");
    delDevice.className = "delIllumDiv";
    let delDevBtn = document.createElement("a");
    delDevBtn.type = "a";
    delDevBtn.innerHTML = " УДАЛИТЬ УСТРОЙСТВО ";
    delDevBtn.className = "delElem";
    delDevBtn.addEventListener("click", () => {
      if (confirm(`Вы действительно хотите удалить - "${nameDevice}"`)) {
        let idRoom = ((idDevice - (idDevice % 100)) / 100);

        VIEW_HOUSE._house.removeDevice(idRoom, idDevice);
        let r = document.getElementById(idDevice);
        r.parentNode.removeChild(r);
      }
    });
    delDevice.appendChild(delDevBtn);

    return delDevice;
  }
}