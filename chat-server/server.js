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

function Message(author, receiver, data) {
    this.author = author;
    this.receiver = receiver;
    this.data = data;
}

function User(nick, age, city) {
    this.nick = nick;
    this.age = age;
    this.city = city;
}

function Group(id, name, members) {
    this.id = id;
    this.name = name;
    this.members = members;
}

io.sockets.on('connection', function (socket) {

    socket.on("SEND_MESSAGE", (params) => {
        io.sockets.socket(userSockets[params.message.receiver]).emit("RECEIVE_MESSAGE", params.message);
    });

    // Group Events
    // socket.on(ADD_GROUP_MESSAGE, () => TODO);
    // socket.on(CREATE_GROUP, () => TODO);
    // socket.on(EXIT_GROUP, () => TODO);

    socket.on("LOGIN_REQUEST", (params) => {
        const user = params.user;
        const username = user.nick;
        console.log("Login Request from " + username);
        console.log(users);

        if (users.has(username)) {
            socket.emit("LOGIN_ERROR", "Invalid nick");
            console.log("ERROR");

        } else {
            // TODO: echo to client they've connected
            // socket.emit('updatechat', 'SERVER', 'you have connected');
            // TODO: echo globally (all clients) that a person has connected
            // socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected: ' + socket.id);

            socket.username = username;
            users.set(username, [user.age, user.city]);
            userSockets.set(username, socket);

            // update the list of users in chat, client-side
            socket.emit("LOGIN_OK", user);
            socket.emit("POPULATE_USER_LIST", users);
            socket.broadcast.emit("ADD_USER", user);
        }
    });

    socket.on("LOGOUT", () => {
        delete users[socket.username];
        delete userSockets[socket.username];

        // update list of users in chat, client-side
        socket.broadcast.emit("DELETE_USER", socket.username);

        // TODO: echo globally that this client has left
        //socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
    });
});