export const userConstants = {
    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER',
    POPULATE_USER_LIST: 'POPULATE_USER_LIST'
};

export const groupConstants = {
    CREATE_GROUP: 'CREATE_GROUP',
    ADD_GROUP: 'ADD_GROUP',
    EXIT_GROUP: 'EXIT_GROUP',
    DELETE_MEMBER_GROUP: 'DELETE_MEMBER_GROUP',
};

export const loginConstants = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_OK: 'LOGIN_OK',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT'
};

export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

export const messageConstants = {
    SEND_PRIVATE: 'SEND_PRIVATE_MESSAGE',
    SEND_PUBLIC: 'SEND_PUBLIC_MESSAGE',
    SEND_GROUP: 'SEND_GROUP_MESSAGE',
    RECEIVE_PRIVATE: 'RECEIVE_PRIVATE_MESSAGE',
    RECEIVE_PUBLIC: 'RECEIVE_PUBLIC_MESSAGE',
    RECEIVE_GROUP: 'RECEIVE_GROUP_MESSAGE'
};

export const activeChatsConstants = {
    UPDATE_ACTIVE_CHAT: 'UPDATE_ACTIVE_CHAT',
    ADD_ACTIVE_CHAT: 'ADD_ACTIVE_CHAT',
    DELETE_ACTIVE_CHAT: 'DELETE_ACTIVE_CHAT',
    RECEIVE_PRIVATE: 'RECEIVE_PRIVATE_MESSAGE'
};

export const chatTypes = {
    PUBLIC: 'PUBLIC',
    PRIVATE: 'PRIVATE',
    GROUP: 'GROUP'
};

export const publicChatName = "Public";