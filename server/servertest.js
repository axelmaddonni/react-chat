// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
// var io = require('../..')(server);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;
var ioreq = require("socket.io-request");

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on("connection", function(socket){ // new client
    console.log("se conecto ok")
    ioreq(socket).response("toUpper", function(req, res){ // method, handler
        res(req.toUpperCase()); // return to client
    });
});
