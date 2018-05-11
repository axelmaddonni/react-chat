import io from "socket.io-client"

import { loginConstants, userConstants, groupConstants, messageConstants } from "../../constants/ActionTypes";
import { userActions, alertActions, loginActions, messageActions, groupActions  } from "../actions";
import {history} from "../../helpers";

const setupSocket = (dispatch) => {
    const socket = io.connect("http://localhost:3000");

    socket.on(loginConstants.LOGIN_OK, (user) => {
        dispatch(alertActions.clear());
        dispatch(loginActions.loginOk(user));
        history.push('/');
    });

    socket.on(loginConstants.LOGIN_ERROR, (error) => {
        dispatch(alertActions.error(error));
        dispatch(loginActions.loginError(error))
    });

    socket.on(userConstants.ADD_USER, (nick, age, city) => dispatch(userActions.addUser(nick, age, city)));
    socket.on(userConstants.DELETE_USER, (nick) => dispatch(userActions.deleteUser(nick)));
    socket.on(userConstants.POPULATE_USER_LIST, (userList) => dispatch(userActions.populateUserList(userList)));

    socket.on(groupConstants.CREATE_GROUP, (groupId, name, members) => dispatch(groupActions.createGroup(groupId, name, members)));
    socket.on(groupConstants.DELETE_MEMBER_GROUP, (groupId, nick) => dispatch(groupActions.deleteMemberGroup(groupId, nick)));

    socket.on(messageConstants.RECEIVE_PRIVATE,
        (message) => dispatch(messageActions.receivePrivateMessage(message.author, message.receiver, message.data)));

    socket.on(messageConstants.RECEIVE_PUBLIC,
        (message) => dispatch(messageActions.receivePublicMessage(message.data)));

    socket.on(messageConstants.RECEIVE_GROUP,
        (groupId, message) => dispatch(messageActions.receiveGroupMessage(message.author, message.receiver, message.data)));

    return socket
};

export default setupSocket
