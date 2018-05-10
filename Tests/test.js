var socket = require("socket.io-client")("http://localhost:3000");

// var socket = io.connect('http://localhost:3000', { 'forceNew': true });

socket.on("connect", function(){
    console.log("request");
    const user = { nick: "axel", age: 22, city: "Buenos Aires"};
    socket.emit("LOGIN_REQUEST", user) // method, data

    socket.on("LOGIN_OK", (res) => console.log(res));
    socket.on("LOGIN_ERROR", (res) => console.log(res));
});
