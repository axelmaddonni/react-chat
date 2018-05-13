import {
    messageConstants,
    loginConstants,
    activeChatsConstants,
    chatTypes as chatType
} from "../../constants/ActionTypes";

const { Map } = require('immutable');
const initialState = new Map({});
const privateChats = (state = initialState, action) => {
    switch (action.type) {
        case activeChatsConstants.ADD_ACTIVE_CHAT:
            if(action.chatType === chatType.PRIVATE && ! state.has(action.id)) {
                return Map(state.set(action.id, []));
            } else {
                return state
            }

        case activeChatsConstants.DELETE_ACTIVE_CHAT:
            if(action.chatType === chatType.PRIVATE && ! state.has(action.id)) {
                return Map(state.delete(action.id));
            } else {
                return state
            }

        case messageConstants.SEND_PRIVATE:
            if(state.has(action.receiver)){
                return Map(state.set(action.receiver, state.get(action.receiver).push({author:action.author, data: action.data})));
            }else{
                return Map(state.set(action.receiver, [{author:action.author, data: action.data}]));
            }

        case messageConstants.RECEIVE_PRIVATE:
            if(state.has(action.author)) {
                return Map(state.set(action.author, state.get(action.author).push({author:action.author, data: action.data})));
            } else{
                return Map(state.set(action.author, [{author:action.author, data: action.data}]));
            }

        case loginConstants.LOGOUT:
            return initialState;

        default:
            return state
    }
};

export default privateChats
