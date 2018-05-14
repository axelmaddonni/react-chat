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

function printState() {
    console.log(users);
    console.log(groups);
}

io.sockets.on('connection', function (socket) {

    // User Events
    socket.on("LOGIN_REQUEST", (params) => {
        const user = params.user;
        const username = user.nick;

        console.log("Login Request from " + username);

        if (users.has(username)) {
            socket.emit("LOGIN_ERROR", "Invalid nick");
            console.log("ERROR: " + username);

        } else {
            socket.username = username;
            users.set(username, { age: user.age, city: user.city });
            userSockets.set(username, socket);

            socket.emit("LOGIN_OK", user);
            socket.emit("POPULATE_USER_LIST", Array.from(users));
            socket.join(PUBLIC_ROOM);
            socket.to(PUBLIC_ROOM).emit("ADD_USER", user);
            console.log("JOINED: " + username);
        }

        printState();
    });

    socket.on("LOGOUT", () => logout(socket));
    socket.on('disconnect', () => logout(socket));

    function logout(socket) {
        console.log("Logout Request from " + socket.username);

        if (users.has(socket.username)) {
            users.delete(socket.username);
            userSockets.delete(socket.username);

            socket.to(PUBLIC_ROOM).emit("DELETE_USER", socket.username);

            // delete socket from all rooms
            var roomKeys = Object.keys(socket.rooms);
            var socketIdIndex = roomKeys.indexOf(socket.id);
            var rooms = roomKeys.splice( socketIdIndex, 1 );
            rooms.forEach((room) => socket.leave(room));
        }

        printState();
    };

    // Message events
    socket.on("SEND_PUBLIC_MESSAGE", (params) => {
        socket.to(PUBLIC_ROOM).emit('RECEIVE_PUBLIC_MESSAGE', params.author, params.data);
    });

    socket.on("SEND_PRIVATE_MESSAGE", (params) => {
        if (userSockets.has(params.receiver)) {
            userSockets.get(params.receiver).emit('RECEIVE_PRIVATE_MESSAGE', params.author, params.data);
        }
    });

    socket.on("SEND_GROUP_MESSAGE", (params) => {
        socket.to(params.groupId).emit('RECEIVE_GROUP_MESSAGE', params.groupId, params.author, params.data);
    });

    // Group Events
    socket.on("CREATE_GROUP", (params) => {
        const newRoomId = randomId();
        groups.set(newRoomId, { name: params.groupName, members: params.members });
        socket.join(newRoomId);

        for (var i = 0; i < params.members.length; i++) {
            const nick = params.members[i];
            const memberSocket = userSockets.get(nick);
            memberSocket.join(newRoomId);
            memberSocket.emit('ADD_GROUP', newRoomId, params.groupName, params.members);
        }
    });

    socket.on("EXIT_GROUP", (params) => {
        socket.to(params.groupId).emit('DELETE_MEMBER_GROUP', params.groupId, socket.username);
        socket.leave(params.groupId);
    });

    function randomId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
});