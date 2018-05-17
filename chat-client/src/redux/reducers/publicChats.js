import { messageConstants, loginConstants} from "../../constants/index";

import { List } from "immutable";

const publicChats = (state = List([]), action) => {
    switch (action.type) {
        case messageConstants.SEND_PUBLIC:
            return state.push({author: action.author, data: action.data});
        case messageConstants.RECEIVE_PUBLIC:
            return state.push({author: action.author, data: action.data});
        case loginConstants.LOGOUT:
            return List([]);
        default:
            return state
    }
};

export default publicChats
