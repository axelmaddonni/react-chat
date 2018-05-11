import { activeChatsConstants } from "../../constants/ActionTypes";
const { List } = require('immutable');

const activeChatList = (state = [], action) => {
    switch (action.type) {
        case activeChatsConstants.ADD_ACTIVE_CHAT:
            let list = new List();
            list = state;
            list.push({chatType: action.chatType, id: action.id});
            return list;

        case activeChatsConstants.DELETE_ACTIVE_CHAT:
            list = new List();
            state.forEach(function(activeChatInfo) {
                if((action.chatType !== activeChatInfo.chatType) || (action.id !== activeChatInfo.id)){
                    list.push(activeChatInfo)
                }
                return list;
            });
        default:
            return state
    }
};

export default activeChatList;