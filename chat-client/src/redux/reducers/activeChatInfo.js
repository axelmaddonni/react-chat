import { activeChatsConstants, chatTypes, loginConstants} from "../../constants/index";

const initialState = { chatType: chatTypes.PUBLIC, id: undefined };

const activeChatInfo = (state = initialState, action) => {
    switch (action.type) {
        case activeChatsConstants.UPDATE_ACTIVE_CHAT:
            return { chatType: action.chatType, id: action.id };
        case activeChatsConstants.DELETE_ACTIVE_CHAT:
            if (action.chatType === state.chatType && action.id === state.id) {
                return initialState;
            } else {
                return state;
            }
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default activeChatInfo;