import { activeChatsContants } from "../../constants/ActionTypes";

export const addActiveChat = (chatType, id) => ({
    type: activeChatsContants.ADD_ACTIVE_CHAT,
    chatType,
    id
});

export const deleteActiveChat = (chatType, id) => ({
    type: activeChatsContants.DELETE_ACTIVE_CHAT,
    chatType,
    id
});

export const updateActiveChat = (chatType, id) => ({
    type: activeChatsContants.UPDATE_ACTIVE_CHAT,
    chatType,
    id
});