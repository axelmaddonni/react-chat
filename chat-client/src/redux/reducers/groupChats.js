// TODO: cambiar por nuevas acciones
import { groupConstants, messageConstants, loginConstants } from "../../constants/ActionTypes";

const { Map } = require('immutable');
const initialState = new Map();
const groupChats = (state = initialState, action) => {
    switch (action.type) {
        case messageConstants.RECEIVE_GROUP:
            return state.set(action.groupId, state.get(action.groupId).push({author: action.author, groupId: action.groupId, data: action.data}));
        case groupConstants.EXIT_GROUP:
            return state.delete(action.groupId);
        case loginConstants.LOGOUT:
            return initialState;
        case groupConstants.SEND_GROUP:
            return state.set(action.groupId, state.get(action.groupId).push(action.message));
        default:
            return state
    }
};

export default groupChats