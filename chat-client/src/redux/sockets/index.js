import * as types from '../../constants/ActionTypes'
import io from "socket.io-client"

import {
    addGroupMessage,
    addUser,
    createGroup,
    deleteMemberGroup, deleteUser,
    loginOk,
    receiveMessage,
} from "../actions";

const setupSocket = (dispatch, user) => {
    const socket = io.connect("http://localhost:3000");

    socket.on("connect", function(){
        // TODO: depende del login
    });

    socket.on(types.LOGIN_OK, (userList) => dispatch(loginOk(userList)));
    socket.on(types.ADD_USER, (nick, age, city) => dispatch(addUser(nick, age, city)));
    socket.on(types.DELETE_USER, (nick) => dispatch(deleteUser(nick)));
    socket.on(types.CREATE_GROUP, (groupId, name, members) => dispatch(createGroup(groupId, name, members)));
    socket.on(types.DELETE_MEMBER_GROUP, (groupId, nick) => dispatch(deleteMemberGroup(groupId, nick)));
    socket.on(types.RECEIVE_MESSAGE, (message) => dispatch(receiveMessage(message)));
    socket.on(types.ADD_GROUP_MESSAGE, (groupId, message) => dispatch(addGroupMessage(groupId, message)));

    return socket
}

export default setupSocket
