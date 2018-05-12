import {activeChatsConstants, chatTypes, loginConstants} from "../../constants/ActionTypes";
const { List } = require('immutable');
const initialState = [{chatType: chatTypes.PUBLIC, id: undefined}];
const activeChatList = (state = initialState, action) => {
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
        case loginConstants.LOGOUT:
            return [];
        default:
            return state
    }
};

export default activeChatList;