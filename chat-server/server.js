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

io.sockets.on('connection', function (socket) {

    // User Events
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

    socket.on("LOGOUT", () => logout(socket));
    socket.on('disconnect', () => logout(socket));

    function logout(socket) {
        if (users.has(socket.username)) {
            delete users[socket.username];
            delete userSockets[socket.username];

            socket.to(PUBLIC_ROOM).emit("DELETE_USER", socket.username);

            // delete socket from all rooms
            var roomKeys = Object.keys(socket.rooms);
            var socketIdIndex = roomKeys.indexOf(socket.id);
            var rooms = roomKeys.splice( socketIdIndex, 1 );
            rooms.forEach((room) => socket.leave(room));
        }
    };

    // Message events
    socket.on("SEND_PUBLIC_MESSAGE", (params) => {
        socket.to(PUBLIC_ROOM).emit('RECEIVE_PUBLIC_MESSAGE', params.author, params.data);
    });

    socket.on("SEND_PRIVATE_MESSAGE", (params) => {
        socket.to(userSockets.get(params.receiver)).emit('RECEIVE_PRIVATE_MESSAGE', params.author, params.data);
    });

    socket.on("SEND_GROUP_MESSAGE", (params) => {
        socket.to(params.groupId).emit('RECEIVE_GROUP_MESSAGE', params.author, params.data);
    });

    // Group Events
    socket.on("CREATE_GROUP", (params) => {
        const newRoomId = randomId();
        groups.set(newRoomId, { name: params.groupName, members: params.members });

        socket.join(newRoomId);

        for (var i = 0; i < params.members; i++) {
            const nick = params.members[i];
            const memberSocket = userSockets.get(nick);
            memberSocket.join(newRoomId);
            memberSocket.emit('ADD_GROUP', newRoomId, params.groupName, params.members);
        }
        socket.emit('ADD_GROUP', newRoomId, params.groupName, params.members);
    });

    socket.on("EXIT_GROUP", (params) => {
        socket.to(params.groupId).emit('DELETE_MEMBER_GROUP', params.groupId, socket.username);
        socket.leave(params.groupId);
    });

    function randomId() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }
});