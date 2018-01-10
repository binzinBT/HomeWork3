"use strict";
class UnitPrograms {
  constructor(parentObj, namePrograms) {
    function changeProgramFunc() {
      parentObj.setChannel(selChannel.options[selChannel.selectedIndex].index);
    }

    let divChannel = document.createElement("div");
    divChannel.className = "divChannel";
    divChannel.style.visibility = "hidden";

    let divName = document.createElement("div");
    divName.className = "divName";
    divName.innerHTML = namePrograms;
    divChannel.appendChild(divName);

    let selChannel = document.createElement("select");
    selChannel.setAttribute("size", "1");
    selChannel.className = "selChannel";

    for (let i = 0; i < parentObj.getListPrograms().length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", i);
      option.innerHTML = parentObj.getListPrograms()[i];
      selChannel.appendChild(option);
    }
    selChannel.onchange = changeProgramFunc;

    let btnNextCh = document.createElement("button");
    btnNextCh.type = "button";
    btnNextCh.className = "btnNextCh";
    btnNextCh.innerHTML = `<img src="./img/next.png" >`;
    btnNextCh.addEventListener("click", () => {
      if (selChannel.selectedIndex < selChannel.options.length - 1) {
        selChannel.options[selChannel.selectedIndex + 1].selected = true;
        parentObj.channelNext();
        changeProgramFunc();
      }
    });

    let btnPrevCh = document.createElement("button");
    btnPrevCh.type = "button";
    btnPrevCh.className = "btnPrevCh";
    btnPrevCh.innerHTML = `<img src="./img/prev.png" >`;
    btnPrevCh.addEventListener("click", () => {
      if (selChannel.selectedIndex > 0) {
        selChannel.options[selChannel.selectedIndex - 1].selected = true;
        parentObj.channelPrev();
        changeProgramFunc();
      }
    });

    divChannel.appendChild(btnPrevCh);
    divChannel.appendChild(selChannel);
    divChannel.appendChild(btnNextCh);

    return divChannel;
  }
}