import * as types from '../../constants/ActionTypes'
import io from "socket.io-client"

import { userActions, alertActions } from "../actions";
import {history} from "../../helpers";

const setupSocket = (dispatch) => {
    const socket = io.connect("http://localhost:3000");

    socket.on(types.LOGIN_OK, (user) => {
        dispatch(alertActions.clear());
        dispatch(userActions.loginOk(user));
        history.push('/');
    });

    socket.on(types.POPULATE_USER_LIST, (userList) => {
        dispatch(userActions.populateUserList(userList));
    });

    socket.on(types.LOGIN_ERROR, (error) => {
        dispatch(alertActions.error(error));
        dispatch(userActions.loginError(error))
    });

    socket.on(types.ADD_USER, (nick, age, city) => dispatch(userActions.addUser(nick, age, city)));
    socket.on(types.DELETE_USER, (nick) => dispatch(userActions.deleteUser(nick)));
    socket.on(types.CREATE_GROUP, (groupId, name, members) => dispatch(userActions.createGroup(groupId, name, members)));
    socket.on(types.DELETE_MEMBER_GROUP, (groupId, nick) => dispatch(userActions.deleteMemberGroup(groupId, nick)));
    socket.on(types.RECEIVE_MESSAGE, (message) => dispatch(userActions.receiveMessage(message)));
    socket.on(types.ADD_GROUP_MESSAGE, (groupId, message) => dispatch(userActions.addGroupMessage(groupId, message)));

    return socket
}

export default setupSocket
