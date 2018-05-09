import * as types from '../../constants/ActionTypes'

export const loginOk = (list) => ({
    type: types.LOGIN_OK,
    list
});

export const sendMessage = (message) => ({
    type: types.SEND_MESSAGE,
    message
});

export const receiveMessage = (message) => ({
    type: types.RECEIVE_MESSAGE,
    message
});

export const sendGroupMessage = (groupId, message) => ({
    type: types.ADD_GROUP_MESSAGE,
    groupId,
    message
})

export const deleteChat = (nick) => ({
    type: types.DELETE_MESSAGE,
    nick
})

export const deleteGroupChat = (groupId) => ({
    type: types.DELETE_GROUP_MESSAGES,
    groupId
})

export const createGroup = (groupId, groupName, members) => ({
    type: types.CREATE_GROUP,
    groupId,
    groupName,
    members
})

export const addUser = (nick, age, city) => ({
    type: types.ADD_USER,
    nick,
    age,
    city
});

export const logOut = () => ({
    type: types.LOG_OUT
});

export const updateActiveChat = (nick) => ({
    type: types.UPDATE_ACTIVE_CHAT,
    nick
});

export const openGroupChat = (groupId) => ({
    type: types.OPEN_GROUP_CHAT,
    groupId
});