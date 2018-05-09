import * as types from '../../constants/ActionTypes'

export const loginOk = (userList) => ({
    type: types.LOGIN_OK,
    userList
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

export const createGroup = (groupId) => ({
    type: types.CREATE_GROUP,
    groupId
})

export const addUser = (nick, age, city) => ({
    type: types.ADD_USER,
    nick,
    age,
    city
});
export const updateView = (view) => ({
    type: types.UPDATE_VIEW,
    view
});

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})
