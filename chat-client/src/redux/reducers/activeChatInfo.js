import { activeChatsConstants, chatTypes } from "../../constants/ActionTypes";

const initialState = { chatType: chatTypes.PUBLIC, id: undefined };

const activeChatInfo = (state = initialState, action) => {
    switch (action.type) {
        case activeChatsConstants.UPDATE_ACTIVE_CHAT:
            return { chatType: action.chatType, id: action.id };
        default:
            return state
    }
};

export default activeChatInfo;