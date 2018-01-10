"use strict";
class ViewIllumination {
  constructor (illumination, id, rootElementId) {
    this._illumination = illumination;
    this._id = id;
    this._rootElementId = rootElementId;
  }
  
  render () {
    let self = this;
    let idDevice = this._id;
    let nameDevice = " Освещение - " + this._illumination.getName();
    let illumDiv = document.createElement("div");
    illumDiv.className = "device";
    illumDiv.setAttribute("id", idDevice);
    illumDiv.innerHTML = nameDevice;

    // func for power button from powerDivOnOff
    function eventClickPowerBtn() {
      if (!self._illumination.getPowerStatus()) {
        slider.style.visibility = "visible";
        light.style.visibility = "visible";
        divBright.innerHTML = "ЯРКОСТЬ : " + self._illumination.getLoad();
        imgDev.src = "./img/lampOn.png"
      } else {
        slider.style.visibility = "hidden";
        light.style.visibility = "hidden";
        divBright.innerHTML = "ВЫКЛЮЧЕНО";
        imgDev.src = "./img/lampOff.png"
      }
    }

    // main div power on/off
    let statusDiv = new UnitPowerDev(this._illumination, eventClickPowerBtn);
    illumDiv.appendChild(statusDiv);

    // img Lamp on/off
    let imgDev = imgForDevise("./img/lampOff.png");
    statusDiv.appendChild(imgDev);

    // DIV for illumination load
    let divSlider = document.createElement("div");
    divSlider.className = "divSlider";
    divSlider.setAttribute("id", "dsl" + idDevice);

    let valBright = 0;
    let divBright = document.createElement("div");
    divBright.setAttribute("id", "dbr" + idDevice);
    divBright.className = "divBright";
    divBright.innerHTML = "ВЫКЛЮЧЕНО";
    divSlider.appendChild(divBright);

    // Color DIV for change illumination load
    let light = document.createElement("div");
    light.className = "slColor";
    light.setAttribute("id", "sl" + idDevice);
    divSlider.appendChild(light);

    // Slider illumination load
    let slider = document.createElement("input");
    slider.className = "sliderLoad";
    slider.type = "range";
    slider.setAttribute("id", "r" + idDevice);
    slider.value = 0;
    slider.style.visibility = "hidden";
    slider.oninput = () => {
      let rng = document.getElementById("r" + idDevice); //rng - это Input
      let div = document.getElementById("sl" + idDevice); // div - блок
      valBright = rng.value;
      div.style.width = valBright * 1.8 + 'px';
      divBright.innerHTML = "ЯРКОСТЬ : " + valBright;
      self._illumination.setLoad(valBright);
    };
    divSlider.appendChild(slider);
    illumDiv.appendChild(divSlider);

    // div Button remove illumination device
    let delDevice = new UnitRemoveDevice(idDevice, nameDevice);
    illumDiv.appendChild(delDevice);

    document.getElementById(this._rootElementId).appendChild(illumDiv);
  };
}  