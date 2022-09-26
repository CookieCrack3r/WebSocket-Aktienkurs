"use strict";

let socket = io.connect();
const showInfos = (price,volume,time) => {
    document.querySelector("#price").textContent = price;
    document.querySelector("#volume").textContent = volume;
    document.querySelector("#time").textContent = time;
}   

showInfos("n/a","n/a","n/a");
socket.on("newInfos", info =>  {
    showInfos(info.price, info.volume, info.time);
});
