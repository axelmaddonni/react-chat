import { activeChatsConstants } from "../../constants/ActionTypes";

export const addActiveChat = (chatType, id) => ({
    type: activeChatsConstants.ADD_ACTIVE_CHAT,
    chatType,
    id
});

export const deleteActiveChat = (chatType, id) => ({
    type: activeChatsConstants.DELETE_ACTIVE_CHAT,
    chatType,
    id
});

export const updateActiveChat = (chatType, id) => ({
    type: activeChatsConstants.UPDATE_ACTIVE_CHAT,
    chatType,
    id
});