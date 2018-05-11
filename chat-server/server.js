var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Data structures
var users = new Map(); // maps nick to userInfo
var groups = new Map(); // maps groupId to groupInfo
var userSockets = new Map(); // maps nick to socket id

const PUBLIC_ROOM = 'all';

// function Message(author, receiver, data) {
//     this.author = author;
//     this.receiver = receiver;
//     this.data = data;
// }
//
// function User(nick, age, city) {
//     this.nick = nick;
//     this.age = age;
//     this.city = city;
// }
//
// function Group(id, name, members) {
//     this.id = id;
//     this.name = name;
//     this.members = members;
// }

io.sockets.on('connection', function (socket) {

    socket.on("LOGIN_REQUEST", (params) => {
        const user = params.user;
        const username = user.nick;

        console.log("Login Request from " + username);
        console.log(users);

        if (users.has(username)) {
            socket.emit("LOGIN_ERROR", "Invalid nick");
            console.log("ERROR: " + username);

        } else {
            // TODO: echo to client they've connected
            // socket.emit('updatechat', 'SERVER', 'you have connected');
            // TODO: echo globally (all clients) that a person has connected
            // socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected: ' + socket.id);

            socket.username = username;
            users.set(username, { age: user.age, city: user.city });
            userSockets.set(username, socket);

            socket.emit("LOGIN_OK", user);
            socket.emit("POPULATE_USER_LIST", Array.from(users));
            socket.join(PUBLIC_ROOM);
            socket.to(PUBLIC_ROOM).emit("ADD_USER", user);
            console.log("JOINED: " + username);
        }
    });

    socket.on("LOGOUT", () => {
        delete users[socket.username];
        delete userSockets[socket.username];

        socket.to(PUBLIC_ROOM).emit("DELETE_USER", socket.username);

        // delete socket from all rooms
        var roomKeys = Object.keys(socket.rooms);
        var socketIdIndex = roomKeys.indexOf(socket.id);
        var rooms = roomKeys.splice( socketIdIndex, 1 );
        rooms.forEach((room) => socket.leave(room));

        // TODO: echo globally that this client has left
        //socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
    });

    // TODO: hacer el send para los 3 tipos de mensajes
    // socket.on("SEND_MESSAGE", (params) => {
    //     console.log("SENDING MESSAGE");
    //     io.sockets.socket(userSockets[params.message.receiver]).emit("RECEIVE_MESSAGE", params.message);
    // });

    // Group Events
    // socket.on(ADD_GROUP_MESSAGE, () => TODO);
    // socket.on(CREATE_GROUP, () => TODO);
    // socket.on(EXIT_GROUP, () => TODO);

});