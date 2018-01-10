"use strict";
class UnitSound {
  constructor(idDevice, parentObj) {
    // crop for divColor
    let crop = 1.19;

    let btnClickMuteOn = () => {
      colorDiv.style.background = "#bdc3c7";
      btnVolMute.innerHTML = `<img src="./img/muteOn24.png" >`;
      parentObj.mute(true);
      divStatusVol.style.textAlign = "center";
      divStatusVol.style.marginLeft = "0px";
      divStatusVol.innerHTML = "MUTE";
    };

    let btnClickMuteOff = () => {
      colorDiv.style.background = "";
      btnVolMute.innerHTML = `<img src="./img/muteOff24.png" >`;
      parentObj.mute(false);
      divStatusVol.innerHTML = "ГРОМКОСТЬ : " + parentObj.getCurVolume();
      divStatusVol.style.textAlign = "";
      divStatusVol.style.marginLeft = "";
    };

    // main DIV volume
    let divVolume = document.createElement("div");
    divVolume.className = "divVolume";
    divVolume.setAttribute("id", "dVol" + idDevice);
    divVolume.style.visibility = "hidden";

    // status sound "MUTE" or "Громкость"
    let divStatusVol = document.createElement("div");
    divStatusVol.setAttribute("id", "dsv" + idDevice);
    divStatusVol.className = "divStatusVol";
    divStatusVol.innerHTML = "ГРОМКОСТЬ";
    divVolume.appendChild(divStatusVol);

    // Button volume Mute
    let btnVolMute = document.createElement("button");
    btnVolMute.type = "button";
    btnVolMute.className = "btnVolMute";
    btnVolMute.innerHTML = `<img src="./img/muteOff24.png" >`;
    btnVolMute.addEventListener("click", () => {
      parentObj.mute() ? btnClickMuteOff() : btnClickMuteOn();
    });
    divVolume.appendChild(btnVolMute);

    // Button volume Up
    let btnVolUp = document.createElement("button");
    btnVolUp.type = "button";
    btnVolUp.className = "btnVolUp";
    btnVolUp.innerHTML = `<img src="./img/plus24.png" >`;
    btnVolUp.addEventListener("click", () => {
      if (parentObj.getMaxVolume() >= parentObj.getCurVolume()) {
        if (parentObj.mute()) {
          btnClickMuteOff()
        }
        let rng = document.getElementById("rv" + idDevice); //rng - это Input
        let divColor = document.getElementById("slcv" + idDevice); // div - блок
        ++rng.value;
        divColor.style.width = rng.value * crop + 'px';
        divStatusVol.innerHTML = "ГРОМКОСТЬ : " + rng.value;
        parentObj.volUp();
      }
    });
    divVolume.appendChild(btnVolUp);

    // Button volume Down
    let btnVolDown = document.createElement("button");
    btnVolDown.type = "button";
    btnVolDown.className = "btnVolDown";
    btnVolDown.innerHTML = `<img src="./img/minus24.png" >`;
    btnVolDown.addEventListener("click", () => {
      if (0 <= parentObj.getCurVolume()) {
        if (parentObj.mute()) {
          btnClickMuteOff()
        }
        let rng = document.getElementById("rv" + idDevice); //rng - это Input
        let divColor = document.getElementById("slcv" + idDevice); // div - блок
        --rng.value;
        divColor.style.width = rng.value * crop + 'px';
        divStatusVol.innerHTML = "ГРОМКОСТЬ : " + rng.value;
        parentObj.volDown();
      }
    });
    divVolume.appendChild(btnVolDown);

    // Color DIV for volume
    let colorDiv = document.createElement("div");
    colorDiv.className = "slColorVol";
    colorDiv.setAttribute("id", "slcv" + idDevice);
    divVolume.appendChild(colorDiv);

    // Slider volume load
    let slider = document.createElement("input");
    slider.className = "sliderVol";
    slider.type = "range";
    slider.setAttribute("id", "rv" + idDevice);
    slider.value = 0;
    slider.oninput = () => {
      let rng = document.getElementById("rv" + idDevice); //rng - это Input
      let divColor = document.getElementById("slcv" + idDevice); // div - блок
      divColor.style.width = rng.value * crop + 'px';
      divStatusVol.innerHTML = "ГРОМКОСТЬ : " + rng.value;
      parentObj.setVol(rng.value);
      if (parentObj.mute()) {
        btnClickMuteOff()
      }
    };
    divVolume.appendChild(slider);

    return divVolume;
  }
}