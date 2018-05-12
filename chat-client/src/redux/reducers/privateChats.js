import { messageConstants, loginConstants} from "../../constants/ActionTypes";

const { Map } = require('immutable');
const initialState = new Map({});
const privateChats = (state = initialState, action) => {
    switch (action.type) {
        case messageConstants.SEND_PRIVATE:
            if(state.has(action.receiver)){
                return Map(state.set(action.receiver, state.get(action.receiver).push({author:action.author, data: action.data})));
            }else{
                return Map(state.set(action.receiver, [{author:action.author, data: action.data}]));
            }
        case messageConstants.RECEIVE_PRIVATE:
            if(state.has(action.author)){
                return Map(state.set(action.author, state.get(action.author).push({author:action.author, data: action.data})));
            }else{
                return Map(state.set(action.author, [{author:action.author, data: action.data}]));
            }
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default privateChats
