import { userConstants, loginConstants} from "../../constants/ActionTypes";

const { Map } = require('immutable');

const initialState = Map({});

const userList = (state = initialState, action) => {
    console.log(action);
    const info = {age: action.age, city: action.city}
    switch (action.type) {
        case userConstants.ADD_USER:
            return Map(state.set(action.nick, info));
        case userConstants.DELETE_USER:
            return Map(state.delete(action.nick));
        case userConstants.POPULATE_USER_LIST:
            return Map(action.list);
        case loginConstants.LOGOUT:
            return initialState;
        default:
            return state
    }
};

export default userList
