"use strict";
class UnitPowerDev {
  constructor(parentObj, funcEventClick) {
    // Div power on/off
    let statusDiv = document.createElement("div");
    statusDiv.className = "statusDiv";

    // Power button on/off
    let statePowerBtn = document.createElement("button");
    statePowerBtn.type = "button";
    statePowerBtn.className = "btnPow";
    statePowerBtn.innerHTML = `<img src="./img/off64.png" >`;
    statePowerBtn.addEventListener("click", () => {
      funcEventClick();
      if (!parentObj.getPowerStatus()) {
        parentObj.powerOn();
        statePowerBtn.innerHTML = `<img src="./img/on64.png" >`;
      } else {
        parentObj.powerOff();
        statePowerBtn.innerHTML = `<img src="./img/off64.png" >`;
      }
    });
    statusDiv.appendChild(statePowerBtn);

    return statusDiv;
  }
}