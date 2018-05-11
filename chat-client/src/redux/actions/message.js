import { messageConstants } from "../../constants/ActionTypes";

export const sendPublicMessage = (data) => ({
    type: messageConstants.SEND_PUBLIC,
    data
});

export const sendPrivateMessage = (author, receiver, data) => ({
    type: messageConstants.SEND_PRIVATE,
    author,
    receiver,
    data
});

export const sendGroupMessage = (author, receiver, data) => ({
    type: messageConstants.SEND_GROUP,
    author,
    receiver,
    data
});

export const receivePublicMessage = (data) => ({
    type: messageConstants.RECEIVE_PUBLIC,
    data
});

export const receivePrivateMessage = (author, receiver, data) => ({
    type: messageConstants.RECEIVE_PRIVATE,
    author,
    receiver,
    data
});

export const receiveGroupMessage = (author, receiver, data) => ({
    type: messageConstants.RECEIVE_GROUP,
    author,
    receiver,
    data
});
