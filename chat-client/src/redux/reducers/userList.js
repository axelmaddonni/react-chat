import { userConstants, loginConstants} from "../../constants/ActionTypes";

const { Map } = require('immutable');
const initialState = new Map();
const userList = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case userConstants.ADD_USER:
            return state.set(action.nick, {age: action.age, city: action.city});
        case userConstants.DELETE_USER:
            return state.delete(action.nick);
        case userConstants.POPULATE_USER_LIST:
            return action.list;
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default userList
