import {activeChatsConstants, chatTypes} from "../../constants/ActionTypes";
import { List } from "immutable";

const initialState = [{chatType: chatTypes.PUBLIC, id: undefined}];

const activeChatList = (state = initialState, action) => {
    switch (action.type) {

        case activeChatsConstants.ADD_ACTIVE_CHAT:
            let esta = false;
            state.forEach(function(activeChatInfo) {
                if((action.chatType === activeChatInfo.chatType) && (action.id === activeChatInfo.id)){
                    esta = true;
                }
            });
            if (!esta) {
                return state.concat([{chatType: action.chatType, id: action.id}]);
            } else {
                return state;
            }

        case activeChatsConstants.DELETE_ACTIVE_CHAT:
            let list = List();
            state.forEach(function(activeChatInfo) {
                if((action.chatType !== activeChatInfo.chatType) || (action.id !== activeChatInfo.id)) {
                    list = list.concat(activeChatInfo);
                }
            });
            return list;

        default:
            return state
    }
};

export default activeChatList;