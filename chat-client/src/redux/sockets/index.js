import io from "socket.io-client"
import { history } from "../../helpers";

import { userActions, alertActions, loginActions, messageActions, groupActions, activeChatActions  } from "../actions";

import {
loginConstants,
userConstants,
groupConstants,
messageConstants,
chatTypes
} from "../../constants";

const setupSocket = (dispatch) => {
    const socket = io.connect("localhost:3000");

    socket.on(loginConstants.LOGIN_OK, (user) => {
        dispatch(alertActions.clear());
        dispatch(loginActions.loginOk(user));
        history.push('/');
    });

    socket.on(loginConstants.LOGIN_ERROR, (error) => {
        dispatch(alertActions.error(error));
        dispatch(loginActions.loginError(error))
    });

    socket.on(userConstants.ADD_USER, (user) => dispatch(userActions.addUser(user.nick, user.age, user.city)));
    socket.on(userConstants.DELETE_USER, (nick) => dispatch(userActions.deleteUser(nick)));

    socket.on(userConstants.POPULATE_USER_LIST, (userList) => {
        console.log(new Map(userList));
        dispatch(userActions.populateUserList(new Map(userList)))
    });

    socket.on(groupConstants.ADD_GROUP, (groupId, name, members) => {
        dispatch(groupActions.addGroup(groupId, name, members));
        dispatch(activeChatActions.addActiveChat(chatTypes.GROUP, groupId));
    });

    socket.on(groupConstants.DELETE_MEMBER_GROUP, (groupId, nick) => dispatch(groupActions.deleteMemberGroup(groupId, nick)));

    socket.on(messageConstants.RECEIVE_PRIVATE,
        (author, data) => {
            dispatch(activeChatActions.addActiveChat(chatTypes.PRIVATE, author));
            dispatch(messageActions.receivePrivateMessage(author, data))
        });

    socket.on(messageConstants.RECEIVE_PUBLIC,
        (author, data) => dispatch(messageActions.receivePublicMessage(author, data)));

    socket.on(messageConstants.RECEIVE_GROUP,
        (groupId, author, data) => {
            dispatch(activeChatActions.addActiveChat(chatTypes.GROUP, groupId));
            dispatch(messageActions.receiveGroupMessage(groupId, author, data))
        });

    return socket
};

export default setupSocket
