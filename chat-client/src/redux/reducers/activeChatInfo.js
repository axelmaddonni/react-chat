import { activeChatsConstants, chatTypes, loginConstants} from "../../constants/ActionTypes";

const initialState = { chatType: chatTypes.PUBLIC, id: undefined };

const activeChatInfo = (state = initialState, action) => {
    switch (action.type) {
        case activeChatsConstants.UPDATE_ACTIVE_CHAT:
            return { chatType: action.chatType, id: action.id };
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default activeChatInfo;