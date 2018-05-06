var ioreq = require("socket.io-request");
var io = require("socket.io-client")("http://localhost:3000");

// var socket = io.connect('http://localhost:3000', { 'forceNew': true });

io.on("connect", function(){
    console.log("request");
    ioreq(io).request("toUpper", "hello world") // method, data
        .then(function(res){
            console.log(res); // get "HELLO WORLD"
        })
        .catch(function(err){
            console.error(err.stack || err);
        });
});

