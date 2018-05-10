import * as types from "../../constants/ActionTypes";

export const loginOk = (user) => ({
    type: types.LOGIN_OK,
    user
});

export const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    error
});

export const sendMessage = (message) => ({
    type: types.SEND_MESSAGE,
    message
});

export const receiveMessage = (message) => ({
    type: types.RECEIVE_MESSAGE,
    message
});

export const addGroupMessage = (groupId, message) => ({
    type: types.ADD_GROUP_MESSAGE,
    groupId,
    message
});

export const deleteChat = (nick) => ({
    type: types.DELETE_MESSAGE,
    nick
});

export const deleteGroupChat = (groupId) => ({
    type: types.DELETE_GROUP_MESSAGES,
    groupId
});

export const login = (user) => ({
    type: types.LOGIN_REQUEST,
    user: user
});

export const logout = () => ({
    type: types.LOGOUT
});

export const updateActiveChat = (nick) => ({
    type: types.UPDATE_ACTIVE_CHAT,
    nick
});

export const openGroupChat = (groupId) => ({
    type: types.OPEN_GROUP_CHAT,
    groupId
});


export const addUser = (nick, age, city) => ({
    type: types.ADD_USER,
    nick,
    age,
    city
});

export const deleteUser = (nick) => ({
    type: types.DELETE_USER,
    nick
});

export const createGroup = (groupId, groupName, members) => ({
    type: types.CREATE_GROUP,
    groupId,
    groupName,
    members
});

export const deleteMemberGroup = (groupId, nick) => ({
    type: types.DELETE_MEMBER_GROUP,
    groupId,
    nick
});

export const populateUserList = (list) => ({
    type: types.POPULATE_USER_LIST,
    list
});

export const userActions = {
    loginOk, loginError, sendMessage, receiveMessage, addGroupMessage, deleteChat, deleteGroupChat,
    login, logout, updateActiveChat, openGroupChat, addUser, deleteUser, createGroup, deleteMemberGroup,
    populateUserList
};