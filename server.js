"use strict";
// Express
const express = require("express");
const server = express();
const ip = "127.0.0.1";
const port = 8081;
server.use(express.static("public"));

// Socket
let http = require("http");
let webServer = http.Server(server);
let socketIo = require("socket.io");
let io = socketIo(webServer);


io.on("connection", socket => {
    
    setInterval(() => {
        let info = {
            price:      (174 + 20 * Math.random()).toFixed(2),
            volume:     (160000000 + 500000 * Math.random()).toFixed(2),
            time:       (new Date()).toLocaleTimeString()
        };
        socket.emit("newInfos", info)
    },1000);

});


webServer.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});
