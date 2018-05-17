import {
    groupConstants,
    messageConstants,
    loginConstants,
    chatTypes as chatType,
    activeChatsConstants
} from "../../constants/index";

import { List, Map } from "immutable";

const initialState = Map({});
const groupChats = (state = initialState, action) => {
    switch (action.type) {

        case activeChatsConstants.ADD_ACTIVE_CHAT:
            if(action.chatType === chatType.GROUP && ! state.has(action.id)) {
                return Map(state.set(action.id, List([])));
            } else {
                return state
            }

        case messageConstants.RECEIVE_GROUP:
            return Map(state.set(action.groupId, state.get(action.groupId).push({author: action.author, data: action.data})));
        case messageConstants.SEND_GROUP:
            return Map(state.set(action.groupId, state.get(action.groupId).push({author: action.author, data: action.data})));
        case groupConstants.ADD_GROUP:
            return Map(state.set(action.groupId, List([])));
        case groupConstants.EXIT_GROUP:
            return Map(state.delete(action.groupId));
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default groupChats