import { messageConstants, loginConstants} from "../../constants/ActionTypes";

const publicChats = (state = [], action) => {
    switch (action.type) {
        case messageConstants.SEND_PUBLIC:
            let newState = state;
            newState.push({author: action.author, data: action.data});
            return newState;
        case messageConstants.RECEIVE_PUBLIC:
            newState = state;
            newState.push({author: action.author, data: action.data});
            return newState;
        case loginConstants.LOGOUT:
            return [];
        default:
            return state
    }
};

export default publicChats
