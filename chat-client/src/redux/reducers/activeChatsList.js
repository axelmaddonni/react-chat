import {activeChatsConstants, chatTypes, loginConstants} from "../../constants/ActionTypes";
const { List } = require('immutable');
const initialState = [{chatType: chatTypes.PUBLIC, id: undefined}];
const activeChatList = (state = initialState, action) => {
    switch (action.type) {
        case activeChatsConstants.ADD_ACTIVE_CHAT:
            return state.concat([{chatType: action.chatType, id: action.id}]);
        case activeChatsConstants.DELETE_ACTIVE_CHAT:
            let list = new List();
            state.forEach(function(activeChatInfo) {
                if((action.chatType !== activeChatInfo.chatType) || (action.id !== activeChatInfo.id)){
                    list.concat([activeChatInfo]);
                }
                return list;
            });
            break;
        case activeChatsConstants.RECEIVE_PRIVATE:
            console.log("AAHDVBJADHVB");
            let esta = false;
            state.forEach(function(activeChatInfo) {
                if((chatTypes.PRIVATE === activeChatInfo.chatType) && (action.author === activeChatInfo.id)){
                    esta = true;
                }
            });
            if (!esta) {
                return state.concat([{chatType: chatTypes.PRIVATE, id: action.author}]);
            }
            break;
        default:
            return state
    }
};

export default activeChatList;