"use strict";
class ViewRadio {
  constructor(radio, idDevice, rootElementId) {
    this._radio = radio;
    this._id = idDevice;
    this._rootElementId = rootElementId;
  }

  render () {
    let self = this;
    let idDevice = this._id;
    let nameDevice = "Radio - " + this._radio.getName();

    // Div device radio
    let radioDiv = document.createElement("div");
    radioDiv.className = "device";
    radioDiv.setAttribute("id", idDevice);
    radioDiv.innerHTML = nameDevice;

    // func for power button from powerDivOnOff when
    function eventClickPowerBtn() {
      if (!self._radio.getPowerStatus()) {
        imgDev.src = "./img/radioOn72.png";
        divVolume.style.visibility = "visible";
        divChannel.style.visibility = "visible";

      } else {
        imgDev.src = "./img/radioOff72.png";
        divVolume.style.visibility = "hidden";
        divChannel.style.visibility = "hidden";
      }
    }

    // main div power on/off
    let powerDivOnOff = new UnitPowerDev(this._radio, eventClickPowerBtn);
    radioDiv.appendChild(powerDivOnOff);

    // img radio on/off
    let imgDev = imgForDevise("./img/radioOff72.png");
    powerDivOnOff.appendChild(imgDev);

    // DIV for channel
    let divChannel = new UnitPrograms(this._radio, "РАДИО ВОЛНА");
    radioDiv.appendChild(divChannel);

    // DIV for volume
    let divVolume = new UnitSound(idDevice, this._radio);
    radioDiv.appendChild(divVolume);

    // div Button remove device
    let delDivDevice = new UnitRemoveDevice(idDevice, nameDevice);
    radioDiv.appendChild(delDivDevice);

    document.getElementById(this._rootElementId).appendChild(radioDiv);
  };

}