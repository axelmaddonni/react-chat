import { messageConstants } from "../../constants/ActionTypes";

// export const sendPublicMessageWithType = (author, data, messageType) => ({
//     function (dispatch) {
//         // if(messageType === "Image"){
//         //     data = uploadService.uploadImg(data);
//         // }
//         return dispatch(sendPublicMessage(author, data, messageType));
//     }
// });

export const sendPublicMessage = (author, data) => ({
    type: messageConstants.SEND_PUBLIC,
    author,
    data
});

export const sendPrivateMessage = (receiver, author, data) => ({
    type: messageConstants.SEND_PRIVATE,
    receiver,
    author,
    data
});

export const sendGroupMessage = (groupId, author, data) => ({
    type: messageConstants.SEND_GROUP,
    groupId,
    author,
    data
});

export const receivePublicMessage = (author, data) => ({
    type: messageConstants.RECEIVE_PUBLIC,
    author,
    data
});

export const receivePrivateMessage = (author, data) => ({
    type: messageConstants.RECEIVE_PRIVATE,
    author,
    data
});

export const receiveGroupMessage = (groupId, author, data) => ({
    type: messageConstants.RECEIVE_GROUP,
    groupId,
    author,
    data
});
