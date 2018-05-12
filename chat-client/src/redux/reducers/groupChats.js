import { groupConstants, messageConstants, loginConstants } from "../../constants/ActionTypes";

const { Map } = require('immutable');
const initialState = Map({});
const groupChats = (state = initialState, action) => {
    switch (action.type) {
        case messageConstants.RECEIVE_GROUP:
            return Map(state.set(action.groupId, state.get(action.groupId).push({author: action.author, data: action.data})));
        case messageConstants.SEND_GROUP:
            return Map(state.set(action.groupId, state.get(action.groupId).push({author: action.author, data: action.data})));
        case groupConstants.ADD_GROUP:
            return Map(state.set(action.groupId, []));
        case groupConstants.EXIT_GROUP:
            return Map(state.delete(action.groupId));
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default groupChats