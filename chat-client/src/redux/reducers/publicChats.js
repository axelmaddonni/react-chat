import { messageConstants, loginConstants} from "../../constants/ActionTypes";

const publicChats = (state = [], action) => {
    switch (action.type) {
        case messageConstants.SEND_PUBLIC:
            return state.concat([{author: action.author, data: action.data}]);
        case messageConstants.RECEIVE_PUBLIC:
            return state.concat([{author: action.author, data: action.data}]);
        case loginConstants.LOGOUT:
            return [];
        default:
            return state
    }
};

export default publicChats
