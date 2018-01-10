"use strict";
class  ViewHouse {
  constructor (house, rootId) {
    this._house = house;
    this._rootId = rootId;
  }

  render () {
    let self = this;

    let _indexNextRoom = 3;
    let house = document.createElement("div");
    house.className = "house";
    house.setAttribute("id", "houseNew");

    let cPanel = document.createElement("div");
    cPanel.className = "cPanel";

    let npv = document.createElement("p");
    npv.setAttribute("id", "npv");
    npv.innerHTML = "SMART HOUSE v 0.1";

    // button Add Room
    let addBtn = document.createElement("a");
    addBtn.type = "a";
    addBtn.innerHTML = "+ КОМНАТА";
    addBtn.className = "addRoom";
    addBtn.addEventListener("click", () => {
      let addR = prompt("Введите название комнаты", "Например гостинная");
      if ((addR != "") && (addR != null)) {
        let addNewRoom = new Room(addR, _indexNextRoom++);
        let addNewViewRoom = new ViewRoom(addNewRoom, "houseNew");
        addNewViewRoom.render();
        self._house.addRoom(addNewViewRoom);
      }
    });

    cPanel.appendChild(addBtn);
    cPanel.appendChild(npv);
    house.appendChild(cPanel);

    document.getElementById(this._rootId).appendChild(house);
  };
}