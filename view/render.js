"use strict";

let house = new House();
const VIEW_HOUSE = new ViewHouse( house, "root");
VIEW_HOUSE.render();

//first room
let room = new Room("кухня", 1);
let viewRoom = new ViewRoom(room, "houseNew" );
house._listRoom.push(viewRoom);
viewRoom.render();

// first device in the first room
let idDevise = 101;
let load = new DeviceLoad(0, 100);
let  illumDev = new Illumination("000", load);
let viewIllumDev = new ViewIllumination(illumDev, idDevise,100);
viewRoom._room.addDevice(viewIllumDev);
viewIllumDev.render();

// second device in the first room
idDevise = 102;
let programs = new Programs(tvProgramsList);
let volume = new Volume(100);
let tvDev = new Tv("Соня", programs, volume);
let viewTvDev = new ViewTv(tvDev, idDevise, 100);
viewRoom._room.addDevice(viewTvDev);
viewTvDev.render();

//  third dev in the firs room
idDevise = 103;
programs = new Programs(fmStation);
volume = new Volume(100);
let radioDev = new Radio("моё", programs, volume);
let viewRadioDev = new ViewRadio(radioDev, idDevise, 100);
viewRoom._room.addDevice(viewRadioDev);
viewRadioDev.render();

//second room
room = new Room("спальня", 2);
viewRoom = new ViewRoom(room, "houseNew" );
house._listRoom.push(viewRoom);
viewRoom.render();

console.dir(VIEW_HOUSE);